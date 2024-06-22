// document.addEventListener("DOMContentLoaded", function() {
//     const products = JSON.parse(localStorage.getItem('products')) || [
//         { id: 1, name: 'csharp', description: 'Desktop and web Prog Lang', category: 'programming', price: 180.00 },
//         { id: 2, name: 'html', description: 'web Markup Lang', category: 'web', price: 250.00 },
//         { id: 3, name: 'sql', description: 'Data base struc Lang', category: 'DataBase', price: 300.00 },
//         { id: 4, name: 'arduino', description: 'Machine Lang', category: 'Machine', price: 200.00 },
//         { id: 5, name: 'css', description: 'web style Lang', category: 'web', price: 100.00 },
//         { id: 6, name: 'java', description: 'web Lang', category: 'programming', price: 240.00 }
//     ];

//     const productList = document.getElementById('product-list');
//     const modal = document.getElementById('product-modal');
//     const modalTitle = document.getElementById('modal-title');
//     const productForm = document.getElementById('product-form');
//     const productIdField = document.getElementById('product-id');
//     const productNameField = document.getElementById('product-name');
//     const productCategoryField = document.getElementById('product-category');
//     const productDescriptionField = document.getElementById('product-description');
//     const productPriceField = document.getElementById('product-price');
//     const productImageField = document.getElementById('product-image');
//     const closeBtn = document.querySelector('.close-btn');
//     let currentProduct = null;

//     function renderProducts() {
//         productList.innerHTML = '';
//         products.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add("product-card");
//             productCard.innerHTML = `
//                 <img style="width: 150px; height: 150px;" src="../srcs/${product.name}.jpg" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <h4>${product.category}</h4>
//                 <p>${product.price.toFixed(2)} LE</p>
//                 <button data-id="${product.id}" class="edit-btn">Edit</button>
//                 <button data-id="${product.id}" class="delete-btn">Delete</button>
//             `;
//             productList.appendChild(productCard);
//         });
//     }

//     productList.addEventListener('click', function(event) {
//         if (event.target.classList.contains('edit-btn')) {
//             const productId = event.target.getAttribute('data-id');
//             currentProduct = products.find(product => product.id == productId);
//             if (currentProduct) {
//                 modalTitle.textContent = 'Edit Product';
//                 productIdField.value = currentProduct.id;
//                 productNameField.value = currentProduct.name;
//                 productCategoryField.value = currentProduct.category;
//                 productDescriptionField.value = currentProduct.description;
//                 productPriceField.value = currentProduct.price;
//                 modal.style.display = 'flex';
//             }
//         } else if (event.target.classList.contains('delete-btn')) {
//             const productId = event.target.getAttribute('data-id');
//             const productIndex = products.findIndex(product => product.id == productId);
//             if (productIndex > -1) {
//                 products.splice(productIndex, 1);
//                 localStorage.setItem('products', JSON.stringify(products));
//                 renderProducts();
//             }
//         }
//     });

//     document.getElementById('add-product-btn').addEventListener('click', function() {
//         modalTitle.textContent = 'Add Product';
//         productForm.reset();
//         productIdField.value = '';
//         modal.style.display = 'flex';
//     });

//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     productForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const id = productIdField.value;
//         const name = productNameField.value;
//         const category = productCategoryField.value;
//         const description = productDescriptionField.value;
//         const price = parseFloat(productPriceField.value);
//         const image = productImageField.files[0];
//         const imageUrl = `../srcs/${name}.jpg`;

//         if (id) {
//             const product = products.find(product => product.id == id);
//             if (product) {
//                 product.name = name;
//                 product.category = category;
//                 product.description = description;
//                 product.price = price;
//                 product.image = imageUrl;
//             }
//         } else {
//             const newProduct = {
//                 id: products.length ? products[products.length - 1].id + 1 : 1,
//                 name,
//                 category,
//                 description,
//                 price,
//                 image: imageUrl
//             };
//             products.push(newProduct);
//         }

//         localStorage.setItem('products', JSON.stringify(products));
//         modal.style.display = 'none';
//         renderProducts();
//     });

//     renderProducts();
// });

// function logoutUser() {
//     localStorage.removeItem('loggedInUser');
//     window.location.href = '../html/LoginPage.html';
// }
document.addEventListener("DOMContentLoaded", function() {
    const products = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: 'csharp', description: 'Desktop and web Prog Lang', category: 'programming', price: 180.00 },
        { id: 2, name: 'html', description: 'web Markup Lang', category: 'web', price: 250.00 },
        { id: 3, name: 'sql', description: 'Data base struc Lang', category: 'DataBase', price: 300.00 },
        { id: 4, name: 'arduino', description: 'Machine Lang', category: 'Machine', price: 200.00 },
        { id: 5, name: 'css', description: 'web style Lang', category: 'web', price: 100.00 },
        { id: 6, name: 'java', description: 'web Lang', category: 'programming', price: 240.00 }
    ];

    const productList = document.getElementById('product-list');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const productForm = document.getElementById('product-form');
    const productIdField = document.getElementById('product-id');
    const productNameField = document.getElementById('product-name');
    const productCategorySelect = document.getElementById('product-category');
    const productDescriptionField = document.getElementById('product-description');
    const productPriceField = document.getElementById('product-price');
    const productImageField = document.getElementById('product-image');
    const closeBtn = document.querySelector('.close-btn');
    let currentProduct = null;

    function renderProducts() {
        productCategorySelect.innerHTML = '<option value="">Select Category</option>';
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img style="width: 150px; height: 150px;" src="../srcs/${product.name}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <h4>${product.category}</h4>
                <p>${product.price.toFixed(2)} LE</p>
                <button data-id="${product.id}" class="edit-btn">Edit</button>
                <button data-id="${product.id}" class="delete-btn">Delete</button>
            `;
            productList.appendChild(productCard);
        });
    }

    productList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const productId = event.target.getAttribute('data-id');
            currentProduct = products.find(product => product.id == productId);
            if (currentProduct) {
                modalTitle.textContent = 'Edit Product';
                productIdField.value = currentProduct.id;
                productNameField.value = currentProduct.name;
                productCategorySelect.value = currentProduct.category;
                productDescriptionField.value = currentProduct.description;
                productPriceField.value = currentProduct.price;
                modal.style.display = 'flex';
            }
        } else if (event.target.classList.contains('delete-btn')) {
            const productId = event.target.getAttribute('data-id');
            const productIndex = products.findIndex(product => product.id == productId);
            if (productIndex > -1) {
                products.splice(productIndex, 1);
                localStorage.setItem('products', JSON.stringify(products));
                renderProducts();
            }
        }
    });

    document.getElementById('add-product-btn').addEventListener('click', function() {
        modalTitle.textContent = 'Add Product';
        productForm.reset();
        productIdField.value = '';
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const id = productIdField.value;
        const name = productNameField.value;
        const category = productCategorySelect.value;
        const description = productDescriptionField.value;
        const price = parseFloat(productPriceField.value);
        const image = productImageField.files[0];
        const imageUrl = `../srcs/${name}.jpg`;

        if (id) {
            const product = products.find(product => product.id == id);
            if (product) {
                product.name = name;
                product.category = category;
                product.description = description;
                product.price = price;
                product.image = imageUrl;
            }
        } else {
            const newProduct = {
                id: products.length ? products[products.length - 1].id + 1 : 1,
                name,
                category,
                description,
                price,
                image: imageUrl
            };
            products.push(newProduct);
        }

        localStorage.setItem('products', JSON.stringify(products));
        modal.style.display = 'none';
        renderProducts();
    });

    renderProducts();
});

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/LoginPage.html';
}




//function to fill the categories dropdown list in the edit or add product from local storage
document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById('product-category');
    const categories = JSON.parse(localStorage.getItem('categories')) || [];

    function populateDropdown() {
        categoryDropdown.innerHTML = '';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categoryDropdown.appendChild(option);
        });
    }

    populateDropdown();
});