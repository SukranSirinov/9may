let btn = document.getElementById('createBtn');
btn.onclick = function(){
    let input=document.getElementById('myinput');
  
   let newLi=document.createElement('li');
   newLi.innerText=input.value;
   newLi.className='list-item'
   document.querySelector('ul').appendChild(newLi)
}

let closeSpan=document.createElement('span');
closeSpan.innerText='x';
closeSpan.style.float = 'right';
closeSpan.style.color = 'red';
closeSpan.style.cursor = 'pointer';
closeSpan.onclick=function(){
    newLi.remove();
}

input.value = "";
newLi.appendChild(closeSpan);
