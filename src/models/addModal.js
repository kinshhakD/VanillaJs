
const jsonServer = 'http://localhost:3000/dish';



const createElement = (type = 'div', params = {}) => {

    const element = document.createElement(type);

  return  Object.keys(params).map( key => element[key] = params[key] )
        
    
}




const createDiv = classList => {
    const div = document.createElement('div');
    div.classList = `${classList}`;
    return div
 }



// Modal-window
const addRecipeWindow = () => {


    //blocks for content
    const block = createDiv('window'),
    containerWindow = createDiv('container-window'),
    windowHeader = createDiv('window-header'),
    windowBody = createDiv('window-body'),
    windowContent = createDiv('window-content'),
    formContent =   windowContent.appendChild(addFormtoModal());

    formContent.after(afterForm())

 
   

    windowHeader.innerHTML = `<img src='/src/images/cook.jpg' class='window-img'>` 

    

    // block-->(containerWindow(windowHeader-->windowBody(windowContent)))
    block.appendChild(containerWindow);
    containerWindow.appendChild(windowHeader);
    windowHeader.after(windowBody);
    windowBody.appendChild(windowContent);

    return document.body.after(block);
}





//Name and Description form
const addFormtoModal = () => {


    const form = document.createElement('form'),
    inputName = document.createElement('input');

    form.method = 'POST';

    inputName.name = 'name';
    inputName.classList = 'input-name';
    inputName.placeholder = 'Name Name Name';
    inputName.id = 'jsInputName';
    
    
    const areaDescription = document.createElement('textarea');
    areaDescription.name = 'description';
    areaDescription.classList = 'area-desc';
    areaDescription.placeholder = 'desc desc desc';
    areaDescription.id = 'jsAreaDesc';

    areaDescription.oninput = () =>{
        areaDescription.style.height = '5px';
        areaDescription.style.height = (areaDescription.scrollHeight)+"px";
    }

    form.appendChild(inputName);
    inputName.after(areaDescription);
    return form
}



//Input-to-List
const createInputElement = inputId =>{

    const element = document.createElement('input');
    element.type = 'text';
    element.placeholder = 'type ingredient';
    element.classList = 'input-name'
    element.id = `${inputId}`;

    return parent =>  {
        const parentElement = document.getElementById(`${parent}`);
        parentElement.before(element);
    }
} 


// reading value from input and creating list-item
const addListItem = (jsInputId,jsUlList) => {
    
        const textVal = document.getElementById(`${jsInputId}`).value;

        if (textVal) {
            const ulList = document.getElementById(`${jsUlList}`),
            listItem = document.createElement('li'),
            txtNode = document.createTextNode(textVal);  

            listItem.classList = 'list-ing'; 
            listItem.appendChild(txtNode);
            ulList.appendChild(listItem);

            

        }
}



const buttonList = (jsInputId,jsUlList) => {
    const btnList =   document.createElement('button');
    btnList.classList = 'btn';
    btnList.id = 'jsBtnList';
    btnList.innerHTML = `<img src='/src/images/plus.svg'>`;
    btnList.onclick = () => {
    

        if (!btnList.classList.contains('btn-add')){

            const inputIng = createInputElement(`${jsInputId}`);
            inputIng(`${jsUlList}`)
            btnList.classList.add('btn-add');         
        } else {

           addListItem(`${jsInputId}`,`${jsUlList}`);
            document.getElementById(`${jsInputId}`).remove();
            btnList.classList.remove('btn-add');
        }
    }  
 return btnList
}





//input and list block  
const afterForm = () => {


    const block = createDiv('ingredients-block'),
    flexdiv = createDiv('ingredients-flex'),
    flexTitle = createDiv('ingredients-title'),
    flexbtn = createDiv('btn btn-add'),
    ulListBlock = createDiv('list-container'),
    ulList =  document.createElement('ul');
  
  
    ulList.classList = 'ulList';
    ulList.id = 'jsUlList';

 
    ///Flexbox - "flexdiv"
    flexTitle.innerHTML = `<h3>Ingredients</h3>`
    flexbtn.appendChild(buttonList('jsInputId','jsUlList'));
     

    ///block-->(flexdiv-->(flextitle(flexbtn))ulListBlock-->(ulList))
    block.appendChild(flexdiv);
        flexdiv.appendChild(flexTitle);
            flexTitle.after(flexbtn);
                flexdiv.after(ulListBlock);
                    ulListBlock.appendChild(ulList);  
                        ulListBlock.after(postButton());
    return block
}



const postButton = () => {
    const block1 = createDiv('post-block');
    const button = document.createElement('button');
    button.classList = 'btn btn-post';
    button.id = 'jsPostButton';
    button.innerHTML = `<img src='/src/images/post.svg'>`;

    // button.onclick = () => postDataFunction('jsInputName', 'jsAreaDesc', 'jsUlList');
    button.addEventListener('click', () =>  postDataFunction('jsInputName', 'jsAreaDesc', 'jsUlList'));
    block1.appendChild(button);
    
    return block1 ;
}


const postDataFunction = async (dataName,dataDesc,dataList) => {



    const dishObj = document.getElementById(`${dataName}`),
    descObj = document.getElementById(`${dataDesc}`),
    listObj = document.getElementById(`${dataList}`),
    arrayDataList = [...listObj.children].map(listItem => listItem.innerHTML);

    if (dishObj.value &&
        descObj.value &&
        arrayDataList.length > 0) {
            const dataObject = {
                dish: dishObj.value,
                description: descObj.value,
                ingredients: arrayDataList
            }
                    await fetch(jsonServer, {
                    method: 'Post',
                    headers: {
                    'Content-type': 'application/json',
                        },
                    body: JSON.stringify(dataObject)
                    })   

        dishObj.value = '';                                  
        descObj.value = '';
             if (listObj){
              while (listObj.firstChild){
                listObj.removeChild(listObj.firstChild)
                 }
             }            
    } 
}









export default addRecipeWindow