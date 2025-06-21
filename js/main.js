const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabclick(tab)));

const tabclick = (tab) =>  {
   tabs.forEach(tab => tab.classList.remove('active'))
           
   const contents = document.querySelectorAll('.content')
          
   tab.classList.add('active') 
           
   contents.forEach(content => content.classList.remove('show'))
             
   const contentId = tab.getAttribute('content-id')
           
   const content = document.getElementById(contentId)

          
           content.classList.add('show') 

 const activetab = document.querySelector('.tab-btn.active')}