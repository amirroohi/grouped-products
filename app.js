const groupInput = document.querySelector("#new-product-group");
const groupButton = document.querySelector("#add-group-btn");
const productInput = document.querySelector("#add-new-product");
const groupSelection = document.querySelector("#existed-groups");
const productButton = document.querySelector("#add-product-btn");
const productNumber = document.querySelector("#product-number");
const boardProducts = document.querySelector(".products");

// console.log(groupSelection.value);
let groupNames = [];
let productNames = [];
// groupInput.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// });

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
function renderProducts(products){
    let renderedProducts = "";
    products.forEach((product) => {
        renderedProducts += `
        <div class="product">
            <p>name:    ${product.productName}</p>
            <p>quantity:${product.quantity}</p>
            <p>group:   ${product.group}</p>
            <p>id:      ${(product.id)}</p>
        </div>`;
    });
    boardProducts.innerHTML = renderedProducts;
}
function addGroupSelection(groups){
    let selection = "";
    groups.forEach((group) => {
        selection += `<option>${group.groupName}</option>`;
    });
    groupSelection.innerHTML = selection;
}

// factory
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
