

const asideTransition = () => {
    
    const aside = document.querySelector('.aside');
    
    const btnCategory = document.querySelectorAll('.btn-category');

    if (aside.classList.contains('sidebar-close')){
     
      aside.classList = 'aside sidebar-active';

      btnCategory.forEach(item => {
        item.classList.remove('dnone')
      })      
      
    } else {
      aside.classList = 'aside sidebar-close';
      
      btnCategory.forEach(item => {
        item.classList.add('dnone')
      }) 
    }
    
   return aside;
  
  }
  
  


 export default asideTransition;
