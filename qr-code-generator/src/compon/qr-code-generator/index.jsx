import QRCode from "react-qr-code";
import { useState } from "react";
import './styles.css';


// Define the QRCodeGenerator component
export default function QRCodeGenerator() {
    // State variables to handle user input and the generated QR code
    const [qrCode, setQrCode] = useState('');  // Holds the current QR code value
    const [input, setInput] = useState('');    // Holds the user's input

    // Function to generate the QR code from the user input
    const handleGenerateQrCode = () => {
        setQrCode(input);   // Set the QR code value based on user input
        setInput('');       // Clear the input field after generating
    };

    return (
        <div className="container">
            {/* Title */}
            <h1 className="title">QR Code Generator</h1>

            {/* Input field and generate button */}
            <div className="input-container">
                <input 
                    type="text" 
                    value={input}
                    placeholder="Enter your value here"
                    className="input-field"
                    onChange={(e) => setInput(e.target.value)} // Update input state as user types
                />
                
                {/* Disable button if input is empty or just spaces */}
                <button 
                    className="generate-button"
                    onClick={handleGenerateQrCode} 
                    disabled={!input.trim()}  // Automatically checks if input is empty
                >
                    Generate
                </button>
            </div>
            
            {/* Render QR code if there is a value to generate */}
            {qrCode && (
                <div className="qr-code-container">
                    <QRCode 
                        value={qrCode}   // QR code value to be generated
                        size={400}       // Set size for the QR code
                        className="qr-code" // Custom styling for QR code
                    />
                </div>
            )}
        </div>
    );
}