const countries = [
            "Nepal","India","China","Japan","USA","Canada",
            "Brazil","Argentina","France","Germany","Italy","Spain",
            "Portugal","Russia","Australia","New Zealand","Mexico","Egypt",
            "Kenya","Nigeria","South Africa","Pakistan","Bangladesh","Sri Lanka",
            "Bhutan","Maldives","Thailand","Vietnam","Malaysia","Singapore",
            "Indonesia","Philippines","South Korea","North Korea","Turkey","Greece",
            "Norway","Sweden","Finland","Denmark","Poland","Ukraine",
            "Belgium","Netherlands","Switzerland","Austria","Ireland","Scotland",
            "England","Wales"
        ];

        const table = document.getElementById("Table");

        for(let i = 0; i < countries.length; i++){

            if(i % 6 == 0){
                var row = table.insertRow();
            }

            let cell = row.insertCell();
            cell.innerHTML = countries[i];
        }