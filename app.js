const groupInput = document.querySelector("#new-product-group");
const groupButton = document.querySelector("#add-group-btn");
const productInput = document.querySelector("#add-new-product");
const groupSelection = document.querySelector("#existed-groups");
const productButton = document.querySelector("#add-product-btn");
const productNumber = document.querySelector("#product-number");
const boardProducts = document.querySelector(".products");
const navbarListIcon = document.querySelectorAll(".nav-list-link")
// let deleteProduct = document.querySelectorAll(".delete-btn");


// console.log(groupSelection);
let groupNames = [];
let productNames = [];
let deleteBtn = [];
// groupInput.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// });
// add events----------------------------
// document.addEventListener("DOMContentLoaded", getLocalProducts);


// navbarListIcon.forEach((n) => {
//     n.addEventListener("mouseover", mouseOver);
// });
// navbarListIcon.forEach((n) => {
//     n.addEventListener("mouseout", mouseOut);
// });
// function mouseOver(){
//     navbarListIcon.style.fontSize = "2rem";
// }
// function mouseOut(){
//     navbarListIcon.style.fontSize = "1rem";
// }


groupButton.addEventListener("click", () => {
    let groupInputContext = groupInput.value;
    groupInput.value = "";
    groupNames.push(createGroup(groupInputContext,(groupNames.length+1)));
    console.log(groupNames);
    // console.log(productNames);
    addGroupSelection(groupNames);
});


productButton.addEventListener("click",() => {
    let productInputContext = productInput.value;
    productInput.value = "";
    productNames.push(createProduct(productInputContext,(productNames.length+1),productNumber.value,groupSelection.value));
    console.log(productNames);
    renderProducts(productNames);

});


// function removeProduct(){
//     const removeButton = [...document.querySelectorAll(".delete-btn")];
//     deleteBtn = removeButton;
//     removeButton.forEach((btn) => {
//         btn.addEventListener("click",(e) =>{
//         e.target.innerText = "Deleted";
//         e.target.disabled = true;
//         });
//     });
// }
// deleteProduct.addEventListener("click",()=>{});
// function deletedProduct(){
//     productNames.splice((productNames.id)-1,1);
// }
// show products on board----------------
function renderProducts(products){
    let renderedProducts = "";
    products.forEach((product) => {
        renderedProducts += `
        <div class="product">
            <p>   ${product.group}</p>
            <p>    ${product.productName}</p>
            <p>   ${product.quantity}</p>
            <button type="button" class="delete-btn" data-id="${product.id}">Delete</button>
        </div>`;
        });
        boardProducts.innerHTML = renderedProducts;
}
    // <p>id:      ${(product.id)}</p>
// show group in select tag
function addGroupSelection(groups){
    let selection = "";
    groups.forEach((group) => {
        selection += `<option>${group.groupName}</option>`;
    });
    groupSelection.innerHTML = selection;
}

// create object in arrays--------------
function createGroup(groupName,id){
    return {
        groupName,
        id,
    }
}

function createProduct(productName,id,quantity,group){
    return {
        productName,
        id,
        quantity,
        group,
    }
}

