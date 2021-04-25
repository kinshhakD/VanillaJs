const createDiv = (classList) => {

    const div = document.createElement("div");

    div.classList = `${classList}`;

    return div;
  };

const filterCategory = (category,items) => {
  
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

const isShowAllCategory = () => {

  const buttonBlock = createDiv('btn-category dnone');

  const button = document.createElement('button');

  button.classList = 'btn-filter';

  button.dataset.filter = `all`;

  button.textContent = `Show all`;

  button.addEventListener('click', () => {

    const currentCategory = button.dataset.filter;

    const cards = document.querySelectorAll('.data-item');

    filterCategory(currentCategory, cards);

  })

  buttonBlock.appendChild(button);

  return buttonBlock;
}



const uniqueCategoryButtons = async (data) => {

  const result = await data;
  
  const setCategory = result.map(el => el.category);

  return new Set(setCategory);

}

const CategoryButton =  (data) => {

    const buttonBlock = createDiv('btn-category dnone');  

    const button = document.createElement('button');

    button.classList = 'btn-filter';

    button.dataset.filter = `${data}`;

    button.textContent = `${data}`;

    button.addEventListener('click', () => {

    

    const currentCategory = button.dataset.filter;  

    const cards = document.querySelectorAll('.data-item');
      
     filterCategory(currentCategory, cards);

    })
    
    buttonBlock.appendChild(button);

    return buttonBlock;
}

export  {isShowAllCategory, CategoryButton, uniqueCategoryButtons};