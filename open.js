let input=document.createElement('input');
let div=document.createElement('div');
let btn1=document.createElement('button');
let btn2=document.createElement('button');
let body=document.querySelector('body');

body.style.display="flex"
body.style.justifyContent="center"
div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.marginTop="350px"
div.style.gap="10px";
div.style.width="600px";
btn1.style.width="90px";
btn2.style.width="90px";
btn1.style.height="36px";
btn2.style.height="36px";
input.style.height="30px";
input.style.width="350px";
btn1.style.fontSize="20px";
btn2.style.fontSize="20px"
btn1.innerText="CLOSE";
btn2.innerText="OPEN";
div.append(input,btn1,btn2)
btn2.disabled=true;

btn1.addEventListener('click',()=>{
    input.disabled=true;
    btn1.disabled=true;
    btn2.disabled=false;
})
btn2.addEventListener('click',()=>{
    input.disabled=false;
    btn1.disabled=false;
    btn2.disabled=true;
})




document.body.append(div)
