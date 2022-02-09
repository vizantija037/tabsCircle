const buttonsContainer = document.querySelector('.buttons-container');
const buttonElement = document.querySelectorAll('.button');
const textArea = document.querySelectorAll('.content-container');
const btnDark = document.getElementById('btn');
const lightBody = document.querySelector('body');

buttonsContainer.addEventListener('click', function(e){
   const btnId = e.target.dataset.id;
   
   if(btnId) {
       buttonElement.forEach(function(item){
           item.classList.remove('active');
           e.target.classList.add('active');
    
       })
       textArea.forEach(function(item){
           
        item.classList.remove('active');
        const showContent = document.getElementById(btnId);
        console.log(showContent);
        showContent.classList.add('active');        
    })
   }
})

btnDark.addEventListener('click', function(){
    btnDark.classList.toggle('active');
    if(btnDark.innerHTML==='Turn ON the light'){
        btnDark.innerHTML='Turn OFF the light';
        lightBody.classList.add('active')
    } else {
        btnDark.innerHTML='Turn ON the light';
        lightBody.classList.remove('active')
    }


})