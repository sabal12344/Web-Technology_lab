const box = document.getElementById('box');
const display = document.getElementById('display');
const reset = document.getElementById('reset');

reset.addEventListener('click',resetter);

const buttons=['1','2','3','/','4','5','6','*','7','8','9','-','0','.','=','+'];

for(let i=0;i<buttons.length;i++){


    const newButton = document.createElement('button');
    newButton.textContent=buttons[i];
    newButton.id=buttons[i];
    if(newButton.id=='='){
        newButton.addEventListener('click',calculate);
    }
    else{
        newButton.addEventListener('click',function updateDisplay(){
            display.textContent+=newButton.textContent;

        });

    } 

    
    


    box.append(newButton);
    


}

function calculate(){
    display.textContent = eval(display.textContent);


}
function resetter(){
    display.textContent=' ';
}
