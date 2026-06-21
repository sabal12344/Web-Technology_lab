function myFunction(){
    const a = parseInt(prompt("Enter 1st number : "));
    const b = parseInt(prompt("Enter 2nd number"));
    const c = parseInt(prompt("Enter 2nd number"));
    let bigger;
    if(a>=b&&a>=c){
        bigger=a;
    }
    else if(b>=a&&b>=c){
        bigger=b;
    }
    else{
        bigger=c;
    }

    const text=document.getElementById('text');
    text.textContent=bigger + " is the biggest number you entered."
    text.style.color = "Blue";
    
}