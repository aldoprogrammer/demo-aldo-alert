import React from 'react';
import { useAldoAlert } from 'aldo-alert';

function App() {
  const { showAldoAlert } = useAldoAlert();

  const handleButtonClick = (message, type) => {
    showAldoAlert(message, type);
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically on the page
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px', // Add margin between buttons
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const successButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2b9254',
    color: 'white',
  };

  const warningButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f6e05e',
    color: 'black',
  };

  const infoButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e53e3e',
    color: 'white',
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        style={successButtonStyle}
        onClick={() => handleButtonClick('Success message!', 'success')}
      >
        Success
      </button>
      <button
        style={warningButtonStyle}
        onClick={() => handleButtonClick('Warning message!', 'warning')}
      >
        Warning
      </button>
      <button
        style={infoButtonStyle}
        onClick={() => handleButtonClick('Info message!', 'info')}
      >
        Info
      </button>
      <button
        style={dangerButtonStyle}
        onClick={() => handleButtonClick('Danger message!', 'danger')}
      >
        Danger
      </button>
    </div>
  );
}

export default App;
