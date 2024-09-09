import {useState, useEffect} from "react"

export default function RandomColor(){
    // 1. Create two state variables: 
    // - `typeOfColor` stores whether we are generating a 'hex' or 'rgb' color.
    // - `color` stores the actual color value (e.g., '#000000' or 'rgb(0,0,0)').
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    // 2. Utility function to generate a random number between 0 and a given length.
    // This will help generate random values for colors.
    function randomColorUtility(length){
        return Math.floor(Math.random() * length);
    }

    // 3. Function to generate a random HEX color.
    // HEX colors have 6 characters made up of numbers (0-9) and letters (A-F).
    function handleCreateRandomHexColor(){
        // Define the HEX values (0-9 and A-F).
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#"; // HEX colors start with a '#' symbol.

        // Loop through 6 times to pick 6 random values from the `hex` array.
        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]; // Add the random value to `hexColor`.
        }
        console.log(hexColor); // Log the generated hex color (optional).
        setColor(hexColor); // Update the state with the new hex color.
    }

    // 4. Function to generate a random RGB color.
    // RGB colors are written as `rgb(r, g, b)` where `r`, `g`, and `b` are values between 0-255.
    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256); // Generate random value for red (0-255).
        const g = randomColorUtility(256); // Generate random value for green (0-255).
        const b = randomColorUtility(256); // Generate random value for blue (0-255).

        setColor(`rgb(${r}, ${g}, ${b})`); // Update the state with the new rgb color.
    }

    // 5. useEffect runs whenever `typeOfColor` changes (either 'hex' or 'rgb').
    // When it changes, it generates a new random color in the selected format.
    useEffect(()=>{
        // If the selected type is 'rgb', generate a random RGB color.
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        // Otherwise, generate a random HEX color.
        else handleCreateRandomHexColor();
    }, [typeOfColor]); // Only run when `typeOfColor` changes.

    // 6. The return function renders the UI:
    // - A full-page background that changes to the generated color.
    // - Three buttons: 
    //     - To switch to HEX color generation.
    //     - To switch to RGB color generation.
    //     - To manually generate a new random color in the current format.
    return (
        <div style={{
            width: "100vw", // Full viewport width.
            height: "100vh", // Full viewport height.
            background: color, // Set the background to the current `color` state.
        }}>
            {/* Button to set the color type to 'hex'. */}
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            
            {/* Button to set the color type to 'rgb'. */}
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            
            {/* Button to generate a random color based on the current color type (hex or rgb). */}
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                Generate Random Color
            </button>
            
            {/* Display the color type (HEX or RGB) and the current color value. */}
            <div style={{
                display: 'flex', // Use flexbox for layout.
                justifyContent: 'center', // Center horizontally.
                alignItems: 'center', // Center vertically.
                color: '#ffffff', // White text.
                fontSize: '60px', // Large font for better visibility.
                marginTop: '50px', // Margin at the top.
                flexDirection: 'column', // Stack the elements vertically.
                gap: '20px' // Add space between elements.
            }}>
                {/* Show whether the color is in RGB or HEX format. */}
                <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
                
                {/* Show the actual color value. */}
                <h1>{color}</h1>
            </div>
        </div>
    );
}
