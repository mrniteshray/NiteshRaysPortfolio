import { useParams } from "react-router-dom";

const TestPrivacyPolicy = () => {
  const { appName } = useParams<{ appName: string }>();
  
  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: 'white' }}>
      <h1>Privacy Policy Test Page</h1>
      <p>App Name: {appName || 'No app name'}</p>
      <p>This is a test to see if routing works.</p>
      <a href="/">Go back home</a>
    </div>
  );
};

export default TestPrivacyPolicy;
