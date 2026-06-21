const container = document.getElementById("container");

for(let i=1;i<=100;i++){
    let odd=false;
let prime=true;
let even=false;


 if(i==1)
    prime=false;

    const box= document.createElement('div');
    box.textContent=i;
    if(i%2==0)
        even=true;
    else
        odd=true;

    

    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            prime=false;
            break;
        }

    }
    if(prime){
        box.className='prime';
    }
    else if(odd){
        box.className='odd';

    }
    else{
        box.className='even';
    }
    container.appendChild(box);
}