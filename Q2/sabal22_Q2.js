function addition(){
    const a = parseInt(prompt("Enter 1st number : "));
    const b = parseInt(prompt("Enter 2nd number"));
    const sum = a+b;
    const text=document.getElementById('text');
    text.textContent=a +" + "+b +"="+sum;
    text.style.color="green";
    
}