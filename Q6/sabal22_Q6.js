document.getElementById('button').addEventListener("click",clickFunction);


    function clickFunction(){
        // a
        let firstPara = document.querySelector("p");
        console.log(firstPara);

        // b
        let para1 = document.querySelector("#p1");
        let para2 = document.querySelector("#p2");
        let para3 = document.querySelector("#p3");
        let para4 = document.querySelector("#p4");

        // c
        let allPara = document.querySelectorAll("p");

        // d
        for(let i=0;i<allPara.length;i++){
            console.log(allPara[i].textContent);
        }

        // e
        para4.textContent = "Fourth Paragraph";

        // f
        para1.setAttribute("class","one");
        para2.className = "two";
        para3.setAttribute("class","three");
        para4.className = "four";

        para1.id = "first";
        para2.id = "second";
        para3.id = "third";
        para4.id = "fourth";

        // g
        for(let i=0;i<allPara.length;i++){
            allPara[i].style.backgroundColor = "lightgray";
            allPara[i].style.border = "1px solid black";
            allPara[i].style.fontSize = "20px";
            allPara[i].style.fontFamily = "Arial";
        }

        // h
        for(let i=0;i<allPara.length;i++){
            if(i==0 || i==2){
                allPara[i].style.color = "green";
            }
            else{
                allPara[i].style.color = "red";
            }
        }

        // i
        para1.textContent = "Paragraph One";
        para2.textContent = "Paragraph Two";
        para3.textContent = "Paragraph Three";
        para4.textContent = "Paragraph Four";

    }
        