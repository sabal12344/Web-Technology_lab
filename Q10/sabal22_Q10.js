const result=document.getElementById('result');


const plus=document.getElementById('plus-button');
const minus=document.getElementById('minus-button');
const reset=document.getElementById('reset-button');

plus.addEventListener('click',incrementer);
minus.addEventListener('click',decrementer);
reset.addEventListener('click',resetter);

function incrementer(){
    const current = parseInt(result.textContent);
    result.textContent=current+1;
}

function decrementer(){
    
    const current = parseInt(result.textContent);
    if(current==0)
        return;
    result.textContent=current-1;


}
function resetter(){
    result.textContent='0';

}