window.onload = function() {
    document.getElementById("dateForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Parse the input date provided by the user
        var birthdateInput = document.getElementById("birthdate").value;
        var birthdate = new Date(birthdateInput);
    
        // Get the current date
        var currentDate = new Date();
        
        // Calculate the difference between the current date and the input date
        var ageDiff = currentDate - birthdate;
        
        // Calculate age in years, months, and days
        var ageDate = new Date(ageDiff); // Convert difference to a Date object
        var years = ageDate.getUTCFullYear() - 1970;
        var months = ageDate.getUTCMonth();
        var days = ageDate.getUTCDate() - 1; // Subtract 1 because getUTCDate() starts from 1
        
        // Display the output div tags
        document.getElementById("years").style.display = "inline";
        document.getElementById("months").style.display = "inline";
        document.getElementById("days").style.display = "inline";

        // Display the calculated age
        document.getElementById("years").innerHTML = years + "<br> years";
        document.getElementById("months").innerHTML = months + "<br> months";
        document.getElementById("days").innerHTML = days + "<br> years";
    });
};
