const buttonsContainer = document.querySelector('.buttons-container');
const buttonElement = document.querySelectorAll('.button');
const textArea = document.querySelectorAll('.content-container');

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
