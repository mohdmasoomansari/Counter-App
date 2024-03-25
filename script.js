const countValue = document.querySelector('#counter');
const decreament = () =>{
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
};

const increment = () =>{
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};