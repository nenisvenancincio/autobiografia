var menuIcon= document.querySelector(".menu-icon")
var ul= document.querySelector('.ul')
menuIcon.addEventListener('click',()=>{ 
    
    if(ul.classList.contains('ative')){ 
        ul.classList.remove('ative')
    } else{ 
        ul.classList.add('ative')
    } 
})