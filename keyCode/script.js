// Add a keydown event listener to the document
document.addEventListener("keypress", function (event) {
    // This function will be called when a key is pressed

    // Report key, code, and charCode values
    console.log("Key pressed: " + event.key);
    console.log("Code pressed: " + event.code);
    console.log("CharCode pressed: " + event.charCode);
    document.getElementById("keycodeKey").innerText = event.key;
    document.getElementById("keycodeDisplay").innerText = event.code;
    document.getElementById("charCode").innerText = event.charCode;
    // You can perform additional actions based on the pressed key
    // For example, check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        console.log("Enter key pressed!");
        // Perform actions specific to the 'Enter' key
    }
});