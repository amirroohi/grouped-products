const groupInput = document.querySelector("#new-product-group");
const groupButton = document.querySelector("#add-group-btn");
const productInput = document.querySelector("#add-new-product")
let groupNames = [];
let productNames = [];
groupInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
});
groupButton.addEventListener("click", () => {
    let groupInputContext = groupInput.value;

    groupNames.push(groupInputContext);
    console.log(groupNames);
    
});