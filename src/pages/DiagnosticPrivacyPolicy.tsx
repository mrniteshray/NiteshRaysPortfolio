import { useParams } from "react-router-dom";
import { getPrivacyPolicy } from "@/data/privacyPolicyData";

const DiagnosticPrivacyPolicy = () => {
  const { appName } = useParams<{ appName: string }>();
  const policy = appName ? getPrivacyPolicy(appName) : null;
  
  console.log('Diagnostic - appName:', appName);
  console.log('Diagnostic - policy:', policy);
  
  return (
    <div style={{ 
      padding: '20px', 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0',
      color: '#000',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Privacy Policy Diagnostic</h1>
      
      <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
        <h2>Debug Information:</h2>
        <p><strong>App Name:</strong> {appName || 'undefined'}</p>
        <p><strong>Policy Found:</strong> {policy ? 'Yes' : 'No'}</p>
        <p><strong>URL:</strong> {window.location.href}</p>
        <p><strong>Pathname:</strong> {window.location.pathname}</p>
      </div>
      
      {policy && (
        <div style={{ backgroundColor: '#fff', padding: '20px', border: '1px solid #ccc' }}>
          <h2>Policy Data:</h2>
          <p><strong>App Name:</strong> {policy.appName}</p>
          <p><strong>Last Updated:</strong> {policy.lastUpdated}</p>
          <p><strong>Introduction:</strong> {policy.content.introduction.substring(0, 100)}...</p>
        </div>
      )}
      
      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{ color: '#0066cc' }}>Go back home</a>
      </div>
    </div>
  );
};

export default DiagnosticPrivacyPolicy;
