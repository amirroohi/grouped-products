const groupInput = document.querySelector("#new-product-group");
const groupButton = document.querySelector("#add-group-btn");
const productInput = document.querySelector("#add-new-product");
const groupSelection = document.querySelector("#existed-groups");
const productButton = document.querySelector("#add-product-btn");
const productNumber = document.querySelector("#product-number");
const boardProducts = document.querySelector(".products");
const navbarListIcon = document.querySelectorAll(".nav-list-link")
let deleteProduct = document.querySelectorAll(".delete-btn");


let groupNames = [];
let productNames = [];

    // add events----------------------------
document.addEventListener("DOMContentLoaded", getGroupSelection);
document.addEventListener("DOMContentLoaded", getProductRendered);
    
groupButton.addEventListener("click", () => {
    let groupInputContext = groupInput.value;
    groupNames.push(createGroup(groupInputContext,(groupNames.length+1)));
    console.log(groupNames);
    console.log(productNames);
    addGroupSelection(groupNames);
    saveGroupSelection(groupInput.value);
    groupInput.value = "";
});

productButton.addEventListener("click",() => {
    let productInputContext = productInput.value;
    let productInformation = createProduct(productInputContext,(productNames.length+1),productNumber.value,groupSelection.value);
    productNames.push(productInformation);
    renderProducts(productNames);
    saveProductRendered(productInformation);
    getProductRendered();

    productInput.value = "";
});

boardProducts.addEventListener("click",removeProduct);

function renderProducts(products){
    let renderedProducts = "";
    products.forEach((product) => {
        renderedProducts += `
        <div class="product" >
            <p><span>${product.group}</span>  has
            <span>${product.quantity}</span> number of
            <span>${product.productName}</span>  product(s).
            </p>
            <button type="button" class="delete-btn" data-id="${product.id}">Delete</button>
        </div>`;
    });
    boardProducts.innerHTML = renderedProducts;
}
function removeProduct(deleteBtn){
    if(deleteBtn.target.textContent == "Delete"){
        const parentDeleteBtn = deleteBtn.target.parentElement;
        updatelocalproducts(parentDeleteBtn);
        parentDeleteBtn.remove();
    }
}
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
// local
// groups
function saveGroupSelection(group){
    let savedGroups = localStorage.getItem("groups") ? JSON.parse(localStorage.getItem("groups")) : [];
    savedGroups.push(group);
    localStorage.setItem("groups", JSON.stringify(savedGroups));
}

function getGroupSelection(){
    let savedGroups = localStorage.getItem("groups") ? JSON.parse(localStorage.getItem("groups")) : [];
    let selection = "";
    savedGroups.forEach((groups) => {
        selection += `<option>${groups}</option>`;
    groupSelection.innerHTML = selection;
    });
}

// products
function saveProductRendered(product){
    let savedProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    savedProducts.push(product);
    productNames = savedProducts;
    localStorage.setItem("products", JSON.stringify(savedProducts));
}
function getProductRendered(){
    let savedProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let renderedProducts = "";
        savedProducts.forEach((product) => { 
                renderedProducts += `
                <div class="product" >
                    <p><span>${product.group}</span> has <span>${product.quantity}</span> number of <span>${product.productName}</span> product(s).</p>
                    <button type="button" class="delete-btn" data-id="${product.id}">Delete</button>
                </div>`;
            });

    boardProducts.innerHTML = renderedProducts;
}
// remove product
function updatelocalproducts(product){
    const savedProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let productText = product.children[0].textContent;
    let productTextArray = productText.split(" ");
    let existedProducts = savedProducts.filter(p => p.productName !== productTextArray[5]);
    localStorage.setItem("products",JSON.stringify(existedProducts));
}