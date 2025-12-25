# AI-Based Breast Cancer Risk Prediction & Analysis System

## 📌 Project Overview
This project is a production-ready, end-to-end Machine Learning system designed to predict whether a breast tumor is **Malignant** or **Benign** based on clinical features. It leverages the **Breast Cancer Wisconsin (Diagnostic) Dataset** and employs advanced ML algorithms with a focus on **recall** (minimizing false negatives) and **explainability**.

> [!IMPORTANT]
> **Medical Disclaimer**: This system is for **educational and research purposes only**. It is NOT a medical device and should not be used for clinical diagnosis or treatment decisions. Always consult a healthcare professional.

## 🚀 Tech Stack
- **Machine Learning**: Python, Scikit-Learn, XGBoost, SHAP, Pandas, NumPy.
- **Backend**: FastAPI, Uvicorn, Pydantic.
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, React.
- **Deployment**: Vercel (Frontend), Render/Railway (Backend).

## 🧠 Model Details
- **Dataset**: Breast Cancer Wisconsin (Diagnostic) Dataset.
- **Models Trained**: Logistic Regression, SVM, Random Forest, XGBoost.
- **Best Model**: Selected based on **Recall** (to minimize missed malignant cases) and **ROC-AUC**.
- **Preprocessing**: StandardScaler for feature scaling.
- **Explainability**: SHAP (SHapley Additive exPlanations) values used to interpret model predictions.

## 📊 Evaluation Metrics
The model is evaluated using healthcare-grade metrics:
- **Recall (Sensitivity)**: Critical for minimizing False Negatives.
- **Precision**: To minimize False Positives.
- **F1-Score**: Balance between Precision and Recall.
- **ROC-AUC**: Overall performance capability.
- **Accuracy**: General correctness.

## ⚖️ Ethics & Limitations
- **Bias**: The model is trained on a specific dataset and may not generalize to all populations.
- **False Negatives**: No model is perfect; there is a risk of missing malignant cases.
- **Data Privacy**: Ensure patient data is handled according to HIPAA/GDPR if extending this project.

---
*Built by Shourya Pratap*
