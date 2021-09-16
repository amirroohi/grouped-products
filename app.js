const groupInput = document.querySelector("#new-product-group");
const groupButton = document.querySelector("#add-group-btn");
const productInput = document.querySelector("#add-new-product");
const groupSelection = document.querySelector("#existed-groups");
const productButton = document.querySelector("#add-product-btn");
const productNumber = document.querySelector("#product-number");
const boardProducts = document.querySelector(".products");
let deleteProduct = document.querySelectorAll(".delete-btn");

// console.log(groupSelection);
let groupNames = [];
let productNames = [];
let deleteBtn = [];
// groupInput.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// });
// add events----------------------------
// document.addEventListener("DOMContentLoaded", getLocalProducts);
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
    // saveLocalProducts(productNames);

});
function removeProduct(productNames){
    const removeButton = [...document.querySelectorAll(".delete-btn")];
    deleteBtn = removeButton;
    removeButton.forEach((btn) => {
        const id =btn.dataset.id;
        const
    })
}
// deleteProduct.addEventListener("click",()=>{});
// function deletedProduct(){
//     productNames.splice((productNames.id)-1,1);
// }
// show products on board----------------
function renderProducts(products){
    // const productDiv = document.createElement("div");
    // productDiv.classList.add("product");
    // const addNewProduct = `
    //          <p>name:    ${products.productName}</p>
    //          <p>quantity:${products.quantity}</p>
    //          <p>group:   ${products.group}</p>
    //          <p>id:      ${(products.id)}</p>
    //          <button type="button" id="delete-btn">delete</button>`;
    // productDiv.innerHTML = addNewProduct;
    // boardProducts.innerHTML = productDiv;
    
    let renderedProducts = "";
    products.forEach((product) => {
        renderedProducts += `
        <div class="product">
            <p>Product:    ${product.productName}</p>
            <p>Quantity:   ${product.quantity}</p>
            <p>Group:   ${product.group}</p>
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
// local storage-----------------------
// function saveLocalProducts(productsList){
//     let savedProducts = localStorage.getItem("products")
//       ? JSON.parse(localStorage.getItem("products"))
//       : [];
//     savedProducts.push(productsList);
//     localStorage.setItem("products", JSON.stringify(savedProducts));
// }
// function getLocalProducts(){
//     let savedProducts = localStorage.getItem("products")
//       ? JSON.parse(localStorage.getItem("products"))
//       : [];
//       savedProducts.forEach((product) => {

//       });

// }