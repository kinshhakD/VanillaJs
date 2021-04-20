import "./scss/main.scss";

import database from "./models/data";
import blockItem from "./models/content";
import addRecipeWindow from "./models/addModal";
import filter from "./models/filter";
import asideTransition from "./models/sidebar";
import CategoryButton from "./models/CategoryButton";






// запрос на сервер и рендер базы

// renderWrapper((
//   async () => {
//     const data = await database();
//     return data.map((el) =>
//       document.querySelector(".dish-data").append(blockItem(el))
//     );
//   })()
// );


(async () => {
  const data = await database();
  return data.map((el) =>
    document.querySelector(".dish-data").append(blockItem(el))
  );
})();

const renderButton = async () => {
  const data = await database();
  return data.map((el) => 
    document.querySelector('.container-buttons').append(CategoryButton(el))
  )
};

renderButton()

document.getElementById('btnHeader').addEventListener('click', addRecipeWindow);
document.querySelector('.open-aside').addEventListener('click', asideTransition);


// const filterNew = (category,items) => {
  
  
//   const buttons = document.querySelectorAll('.btn-filter');

//   function filter () {
    

//     items.forEach(item => {
     
//       const isItemFiltered = !item.classList.contains(category);

//       const isShowAll = category.toLowerCase() === 'all';

//       if (isItemFiltered && !isShowAll){
//         item.classList.add('dnone');
//       } else { 
//         item.classList.remove('dnone');
//       }
//     })
//   }

//    buttons.forEach(button => {
  
    
    
//     button.addEventListener('click', () => {

//        const cards = document.querySelectorAll('.data-item');

//        const currentCategory = button.dataset.filter;

//        filter(currentCategory, cards )
//      })
//    })


// }

// filterNew()
