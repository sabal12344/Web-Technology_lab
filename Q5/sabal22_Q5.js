document.getElementById("ageForm").addEventListener("submit", function(e) {
            e.preventDefault();

            let dob = document.getElementById("birthdate").value;
            let result = document.getElementById("result");

            let birthDate = new Date(dob);
            let today = new Date();

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (days < 0) {
                days += 30; 
                months--;
            }

            if (months < 0) {
                months += 12;
                years--;
            }

            result.innerHTML =
                "Age: " + years + " Years, " +
                months + " Months, " +
                days + " Days";
        });