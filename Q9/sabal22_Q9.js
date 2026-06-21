 function jaadu(){

            let n = document.getElementById("num").value;
            let container = document.getElementById("container");

            container.innerHTML = "";

            for(let i=1;i<=n;i++){

                let box = document.createElement("div");
                box.textContent = i;

                let prime = true;

                if(i == 1){
                    prime = false;
                }

                for(let j=2;j<=i/2;j++){
                    if(i % j == 0){
                        prime = false;
                        break;
                    }
                }

                if(prime){
                    box.className = "prime";
                }
                else if(i % 2 == 0){
                    box.className = "even";
                }
                else{
                    box.className = "odd";
                }

                container.appendChild(box);
            }
        }