from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

current_folder = os.path.dirname(os.path.abspath(__file__))
ml_folder = os.path.join(current_folder, '..', 'ml')
model_path = os.path.join(ml_folder, 'model.joblib')
scaler_path = os.path.join(ml_folder, 'scaler.joblib')

print("Loading model from:", model_path)
model = joblib.load(model_path)
scaler = joblib.load(scaler_path)

@app.route('/')
def home():
    return "Hello! The Breast Cancer Prediction API is running."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        fixed_data = {key.replace('_', ' '): value for key, value in data.items()}
        
        input_df = pd.DataFrame([fixed_data])
        
        scaled_data = scaler.transform(input_df)
        
        prediction = model.predict(scaled_data)[0]
        probability = model.predict_proba(scaled_data)[0][1]
        
        result = "Malignant" if prediction == 1 else "Benign"
        
        return jsonify({
            "prediction": result,
            "probability": float(probability),
            "message": "Prediction successful!"
        })
        
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
