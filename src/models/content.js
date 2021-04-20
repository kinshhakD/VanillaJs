

const createDiv = (classList) => {
  const div = document.createElement("div");
  div.classList = `${classList}`;
  return div;
};



const listIngredients = asyncData => {
  const list = asyncData.ingredients.map(
    (el) => `<li class='list-ing'>${el}</li>`
  );
  return list;
};



const openModalDish = data => {

  const block = createDiv("window");

  const containerWindow = createDiv("container-window");

  // After containerWindow

  const windowHeader = createDiv("window-header");

  const imageHeader = document.createElement("img");

  imageHeader.classList = "window-img";

  imageHeader.src = `${data.src}`;

  windowHeader.appendChild(imageHeader);

  // After windowHeader
  const windowBody = createDiv("window-body");

  const windowContent = createDiv("window-content");

  windowContent.innerHTML = `
    <div class='modalW-name'><h2>${data.dish}</h2></div>
    <div class='modalW-description'><p>${data.description}</p></div>
    <div class='list-description'>
    <ul>
    ${listIngredients(data)}
    </ul>
    </div>
    `;

  // block-->(containerWindow(windowHeader-->windowBody(windowContent)))

  block.appendChild(containerWindow);

  containerWindow.append(windowHeader);

  windowHeader.after(windowBody);

  windowBody.appendChild(windowContent);

  return document.body.after(block);

}




const blockItem = (data) => {

  const item = createDiv(`data-item ${data.category}`);

  item.addEventListener('click', () => openModalDish(data))


  const dataImage = document.createElement("img");

  dataImage.className = "img-dish";

  dataImage.id = `ModalImage-${data.id}`;

  dataImage.src = `${data.src}`;

  const dataNameDiv = createDiv();

  dataNameDiv.className = "item-dish";

  const dataNameInner = document.createElement("p");

  dataNameInner.className = `dish-handler`;

  dataNameInner.innerHTML = `${data.dish}`;

  item.appendChild(dataImage);

  dataImage.after(dataNameDiv);

  dataNameDiv.appendChild(dataNameInner);

  return item;
};

export default blockItem;
