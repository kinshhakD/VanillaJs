import "./scss/main.scss";

import database from "./models/data";
import blockItem from "./models/content";
import addRecipeWindow from "./models/addModal";
import asideTransition from "./models/sidebar";
import {isShowAllCategory,CategoryButton, uniqueCategoryButtons} from "./models/CategoryButton";


/*render database*/
(async () => {

  const data = await database();
  

  return data.forEach((el) =>

    document.querySelector(".dish-data").append(blockItem(el))
  );
})();

/*  Category Buttons  */
(async () => {

  const data = await uniqueCategoryButtons(database());

  return data.forEach((el) => 
  document.querySelector('.container-buttons').append(CategoryButton(el))
  )

  
})();

/*Category button (show all)*/
document.querySelector('.container-buttons').append(isShowAllCategory());


/*Modal window with adding recipes*/
document.getElementById('btnHeader').addEventListener('click', addRecipeWindow);

/*Sidebar*/
document.querySelector('.open-aside').addEventListener('click', asideTransition);

