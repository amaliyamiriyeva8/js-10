let body=document.querySelector('body')
let div=document.createElement('div')
let first=document.createElement('input')
let second=document.createElement('input')
let third=document.createElement('input')
let firstEl = document.createElement('label');
let Btn = document.createElement('button');
let p1=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');
Btn.textContent = 'Click!';
div.append(Btn);
div.style.display="flex";
div.style.gap="10px";
Btn.style.width="100px";
Btn.style.height="35px";
Btn.style.marginTop="15px";
p1.style.fontSize="20px";
p2.style.fontSize="20px";
p3.style.fontSize="20px"

p1.innerHTML="yaslilar ucun";
first.setAttribute('type','radio');
first.setAttribute('name','example');

p2.innerHTML="boyukler ucun";
second.setAttribute('type','radio');
second.setAttribute('name','example');

p3.innerHTML="kicikler ucun";
third.setAttribute('type','radio');
third.setAttribute('name','example');

first.value="yaslilar ucun";
second.value="boyukler ucun";
third.value="kicikler ucun";

div.append(p1,first,p2,second,p3,third);

Btn.addEventListener('click',()=>{
    let file=document.querySelector('input[name="example"]:checked').value;
    console.log(file);
})
document.body.append(div);


