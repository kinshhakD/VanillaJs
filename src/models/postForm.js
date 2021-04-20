const postForm = (after) => {
    const form = document.createElement('form');
   
    form.innerHTML = `
    <input type='text'>
    <input type='text'>
    `
    return form
    // return document.querySelector(`${after}`).appendChild(form)
}



export default postForm