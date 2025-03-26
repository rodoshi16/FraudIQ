# FraudIQ - AI-Powered Fraud Risk Assessment

FraudIQ is an intelligent fraud detection tool designed to help financial institutions assess transaction risks. Inspired by **S&P Global’s Market Intelligence platform**, this project provides real-time fraud risk scoring and insightful analytics to enhance financial security.


![FD9F1450-51A4-4175-AB38-B3F11CA0D24A](https://github.com/user-attachments/assets/d8d87707-585a-415d-8f54-c4889a5cb1f0)

## 🚀 Key Features

- **Logistic Regression Model**: Implements a machine learning model with **97.5% validation accuracy** for fraud detection.
- **Risk Scoring System**: Assigns a probability-based fraud risk score (0-100) to transactions.
- **Real-Time Fraud Analysis**: Processes transaction data and provides instant risk assessments.
- **Explainability with SHAP**: Offers insights into the key factors influencing fraud classification.
- **Financial API Integration**: Exposes a REST API for seamless integration with financial platforms.
- **SQL-Backed Risk Insights**: Stores and retrieves risk data using SQL databases.
- **S&P Global-Inspired UI**: The dashboard adopts a sleek, professional design influenced by S&P Global’s branding.
- **Market Intelligence Integration**: Includes a dedicated **Market Intelligence** button that redirects users to S&P Global’s Market Intelligence platform for further financial insights.

## 🏗️ Tech Stack

- **Frontend**: React.js (Styled to reflect S&P Global’s Market Intelligence UI)
- **Backend**: Flask (REST API for transaction risk analysis)
- **Machine Learning**: Logistic Regression with **SMOTE** for handling class imbalance
- **Database**: SQL-based transaction storage
- **Deployment**: Flask API with CORS support

## 📊 How It Works

1. **Transaction Input**: Users enter transaction details (Amount, Time, etc.).
2. **Risk Prediction**: The logistic regression model calculates a risk score and categorizes transactions as Low, Medium, or High risk.
3. **Insights Dashboard**: View risk distribution through interactive charts styled after S&P Global’s **Market Intelligence** UI.
4. **High-Risk Alerts**: The system flags high-risk transactions for immediate review.
5. **Market Intelligence Access**: A **Market Intelligence** button redirects users to **S&P Global’s Market Intelligence platform** for additional financial insights.

## 🖥️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/FraudIQ.git
cd FraudIQ

# Install dependencies
pip install -r requirements.txt

# Run the backend
python app.py

# Navigate to frontend and start React app
cd client
npm install
npm start
```

## 🌎 Demo
> A working prototype will be available soon. The UI is designed to match S&P Global’s Market Intelligence branding, reinforcing its role in financial market intelligence.

## 🤝 Why FraudIQ for S&P Global?
FraudIQ aligns with **S&P Global’s mission** of delivering data-driven financial insights by offering:
- **Market Intelligence-Inspired Risk Analysis**
- **Enterprise-Ready API for Fraud Prevention**
- **Real-Time Decision Support for Financial Transactions**
- **Direct Access to Market Intelligence Insights**

## 📜 License
MIT License. Feel free to use and expand on FraudIQ!

---
### 🚀 Future Enhancements
- Integrating deep learning models for advanced fraud detection.
- Expanding API capabilities for broader financial applications.
- Incorporating external financial data sources for enhanced risk modeling.

---
**Built for financial risk innovation, tailored for S&P Global’s Market Intelligence.** 🌍

