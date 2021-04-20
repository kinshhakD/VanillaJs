const createDiv = () => document.createElement('div');










const renderWrapper = (data) => {
  
    const wrapper = createDiv();
    wrapper.classList ='item-dish';
    wrapper.innerHTML = `${data}`;
    return wrapper;
  };
  

export default renderWrapper;
