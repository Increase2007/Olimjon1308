let btn=document.querySelector('.btn');
let spanText=document.querySelector('span');
btn.addEventListener('click',()=>{
    // console.log(spanText.classList);
    if(spanText.classList.contains('show')){
        spanText.classList.remove('show');
        btn.textContent='Kamroq';
    }
    else{
        spanText.classList.add('show');
        btn.textContent='Koproq';
    }
})