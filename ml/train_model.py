import pandas as pd
import numpy as np
import joblib
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, recall_score

print("Loading the breast cancer data...")
data = load_breast_cancer()
df = pd.DataFrame(data.data, columns=data.feature_names)
df['target'] = data.target

df['target'] = df['target'].apply(lambda x: 1 if x == 0 else 0)

print("Splitting data into training and testing...")
X = df.drop('target', axis=1)
y = df['target']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Scaling features...")
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

joblib.dump(scaler, 'ml/scaler.joblib')

print("Training the model...")
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

predictions = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, predictions)
recall = recall_score(y_test, predictions)

print(f"Model Accuracy: {accuracy}")
print(f"Model Recall: {recall}")

print("Saving the model...")
joblib.dump(model, 'ml/model.joblib')
print("Done! Model saved to ml/model.joblib")
