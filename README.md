# FraudIQ - ML Risk Analysis tool 

FraudIQ is an intelligent fraud detection tool designed to help financial institutions assess transaction risks. Inspired by **S&P Global’s Market Intelligence platform**, this project provides real-time fraud risk scoring and insightful analytics to enhance financial security.

![BC04E430-7F05-4793-9943-57FFB1EFA756](https://github.com/user-attachments/assets/d5355103-a53d-4e06-bd32-f1fb2f1bd9b0)


## 🚀 Key Features

- **Logistic Regression Model**: Implements a Logistic Regression Machine Learning model trained with a dataset of 284,807 transactions with a validation accuracy of **97.5%**
- **Risk Scoring System**: Assigns a probability-based fraud risk score (0-100) to transactions.
- **Real-Time Fraud Analysis**: Processes transaction data and provides instant risk assessments.
- **Explainability with SHAP**: Offers insights into the key factors influencing fraud classification.
- **S&P Global-Inspired UI**: The dashboard adopts a sleek, professional design influenced by S&P Global’s branding.
- **Market Intelligence Integration**: Includes a dedicated **Market Intelligence** button that redirects users to S&P Global’s Market Intelligence platform for further financial insights.

## 🧑‍💻 Tech Stack

- **Frontend**: React.js (Styled to reflect S&P Global’s Market Intelligence UI)
- **Backend**: Flask (REST API for transaction risk analysis)
- **Machine Learning**: Logistic Regression with **SMOTE** for handling class imbalance

## 📊 How It Works

1. **Transaction Input**: Users enter transaction details (Amount & Time).
2. **Risk Prediction**: The logistic regression model calculates a risk score and categorizes transactions as Low, Medium, or High risk.
3. **Insights Dashboard**: View risk distribution through interactive charts styled after S&P Global’s **Market Intelligence** UI.
4. **Market Intelligence Access**: A **Market Intelligence** button redirects users to **S&P Global’s Market Intelligence platform** for additional financial insights.

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


## 🤝 Why FraudIQ for S&P Global?
FraudIQ aligns with **S&P Global’s mission** of delivering data-driven financial insights by offering:
- **Market Intelligence-Inspired Risk Analysis**
- **Real-Time Decision Support for Financial Transactions**
- **Direct Access to Market Intelligence Insights**


---
### 🚀 Future Enhancements
- Integrating deep learning models for advanced fraud detection.
- Expanding API capabilities for broader financial applications.
- Incorporating external financial data sources for enhanced risk modeling.

---
**Built for financial risk innovation, inspired by S&P Global’s Market Intelligence.** 

