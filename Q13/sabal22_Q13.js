
        function setCookie(){
            let name = document.getElementById("username").value;

            document.cookie = "username=" + name + "; path=/";

            document.getElementById("output").innerText = "Cookie Saved";
        }

        
        function getCookie(){

            let cookies = document.cookie;
            let output = document.getElementById("output");

            if(cookies === ""){
                output.innerText = "No Cookie Found";
                return;
            }

            output.innerText = "Cookies: " + cookies;
        }

        
        function deleteCookie(){

            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

            document.getElementById("output").innerText = "Cookie Deleted";
        }
