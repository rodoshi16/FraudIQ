import {useState} from "react"; 
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import './App.css'; 

const FraudIQDashboard = () => {
  const [transactionAmount, setTransactionAmount] = useState(""); 
  const [transactionTime, setTransactionTime] = useState("")
  const [riskData, setRiskData] = useState([
    {name: "Low Risk", value: 60}, 
    {name: "Medium Risk", value: 25}, 
    {name: "High risk", value: 15}, 
  ]); 

  const [riskScore, setRiskScore] = useState(null); 
  const [riskLevel, setRiskLevel] = useState(null); 

  const [alerts, setAlerts] = useState([
    { id: "TXN12345", level: "High" },
    { id: "TXN67890", level: "Medium" },
  ]);

  const handleAnalyzeRisk = async () => {
    if (!transactionAmount || !transactionTime){
      alert("Please enter both the transaction time and amount."); 
      return; 
    }

    try{
      const transactionData = {
        Amount: transactionAmount, 
        Time: transactionTime, 
      }; 

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(transactionData)
    }); 

    console.log("Response status:", response.status);
    const result = await response.json();
    console.log("Received:", result); 


    if (response.ok) {
      setRiskScore(result["Risk score"]); 
      setRiskLevel(result["Risk level"])

    } else {
      alert(`Error: ${result.error}`);
    }

  } catch (error) {
    alert("An error occurred. Please try again.");
    console.error(error);
  }
};

const handleMarket = () => {
  window.open("https://www.spglobal.com/marketintelligence/en/", "_blank");

}

  return (
    <div className="Container">
      <h1>FraudIQ Dashboard</h1>
      <h2>Transaction Risk Analyzer</h2>
      <div className="Bar">
        <input
          type="number"
          placeholder="Transaction Amount"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        /> 
        <input
        type="number"
        placeholder="Transaction Time"
        value={transactionTime}
        onChange={(e) => setTransactionTime(e.target.value)}
        />
        <button onClick={handleAnalyzeRisk} className="Button">
          Analyze Risk
        </button>
      </div>

      <div className="ChartResultContainer">
      <div className="Chart" style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
        <h3>Risk Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={riskData}>
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="value" fill="#D6002A" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="Result">
        <h3>Result Analysis</h3>
        <p>Risk Score: {riskScore}%</p>
        <p>Risk Level: {riskLevel}</p>
      </div>
      </div>
      <button onClick={handleMarket} className="Market" >S&P Market Intelligence </button>
    </div>
  ); 
}

export default FraudIQDashboard; 
