function myFunction(){
    const a = parseInt(prompt("Enter 1st number : "));
    const b = parseInt(prompt("Enter 2nd number"));
    let bigger;
    if(a>b){
        bigger=a;
    }
    else{
        bigger=b;
    }
    const text=document.getElementById('text');
    text.textContent=bigger + " is the biggest number you entered."
    text.style.color = "Blue";
    
}