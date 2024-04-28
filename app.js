window.onload = function() {
    document.getElementById("dateForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Get the value of the date input field
        var dateInput = document.getElementById("birthdate").value;
    
        // Display the value
        var output = document.getElementById("output");
        output.textContent = "Selected date: " + dateInput;
    });
};
