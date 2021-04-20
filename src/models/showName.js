// import database from './data';


const createDiv = () => document.createElement('div');








const showName = (text) => {
    const block = createDiv()
    block.classList = 'first-block';
    block.innerHTML = `
    <div class='window-title'>${text}</div>
    
    `
    const render  =   document.querySelector('.window-container').append(block)
    console.log(render);
 return render
}



export default showName