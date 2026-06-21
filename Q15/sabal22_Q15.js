 var size = 12;

        function changeBg() {
            document.body.style.backgroundColor = "lightblue";
        }

        function changeParaBg() {
            document.getElementById("p").style.backgroundColor = "yellow";
        }

        function hidePara() {
            document.getElementById("p").style.display = "none";
        }

        function showPara() {
            document.getElementById("p").style.display = "block";
        }

        function increaseFont() {
            size = size + 2;
            document.getElementById("p").style.fontSize = size + "pt";
        }

        function decreaseFont() {
            size = size - 2;
            document.getElementById("p").style.fontSize = size + "pt";
        }

        function resetFont() {
            size = 12;
            document.getElementById("p").style.fontSize = "12pt";
        }

        function changeColor() {
            document.getElementById("p").style.color = "red";
        }