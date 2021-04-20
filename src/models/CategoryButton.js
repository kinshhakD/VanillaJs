import { call } from "file-loader";

const createDiv = (classList) => {

    const div = document.createElement("div");

    div.classList = `${classList}`;

    return div;
  };



const filterNew = (category,items) => {
  
  
    // const buttons = document.querySelectorAll('.btn-filter');
  
      items.forEach(item => {
       
        const isItemFiltered = !item.classList.contains(category);
  
        const isShowAll = category.toLowerCase() === 'all';
  
        if (isItemFiltered && !isShowAll){
          item.classList.add('dnone');
        } else { 
          item.classList.remove('dnone');
        }
      })
}


const uniqueCategoryButtons = (callback) => {

  


}


const CategoryButton =  (data) => {

    const buttonBlock = createDiv('btn-category dnone');  

    const button = document.createElement('button');

    button.classList = 'btn-filter';

    button.dataset.filter = `${data.category}`;

    button.textContent = `${data.category}`;

    button.addEventListener('click', () => {

    const currentCategory = button.dataset.filter;  
      
     filterNew(currentCategory, document.querySelectorAll('.data-item'));

    })
    
    buttonBlock.appendChild(button);

    return buttonBlock;
}




export default CategoryButton;