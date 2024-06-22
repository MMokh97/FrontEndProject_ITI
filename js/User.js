// //create an array of products when the page loaded event
// document.addEventListener("DOMContentLoaded", function() {
//     const products = [
//         { id: 1, name: 'csharp', description: 'Desktop and web Prog Lang', category: 'programming', price: 180.00 },
//         { id: 2, name: 'html', description: 'web Markup Lang', category: 'web', price: 250.00 },
//         { id: 3, name: 'sql', description: 'Data base struc Lang', category: 'DataBase', price: 300.00 },
//         { id: 4, name: 'arduino', description: 'Machine Lang', category: 'Machine', price: 200.00 },
//         { id: 5, name: 'css', description: 'web style Lang', category: 'web', price: 100.00 },
//         { id: 6, name: 'java', description: 'web Lang', category: 'programming', price: 240.00 }
//     ];

//     //getting the ampty html tags by its id to put values in it 

//     //the section which we will print the products in
//     const productList = document.getElementById('product-list');

//     //the card for viewing product details
//     const modal = document.getElementById('product-modal');
//     const modalProductName = document.getElementById('modal-product-name');
//     const modalProductcategory = document.getElementById('modal-product-category');
//     const modalProductDescription = document.getElementById('modal-product-description');
//     const modalProductPrice = document.getElementById('modal-product-price');

//     //the button for adding the product to the card
//     const addToCartBtn = document.getElementById('add-to-cart-btn');

//     //close button
//     const closeBtn = document.querySelector('.close-btn');
//     let currentProduct = null;

//     //loop for printing all prods in the arr
//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.classList.add("product-card");
//         productCard.innerHTML = `
//             <img style="width: 150px; height: 150px;" src="../srcs/${product.name}.jpg" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <h4>${product.category}</h4>
//             <p>${product.price.toFixed(2)} LE</p>
//             <button data-id="${product.id}">View Details</button>
//         `;
//         productList.appendChild(productCard);
//     });

//     //showing prod details 
//     productList.addEventListener('click', function(event) {
//         if (event.target.tagName === 'BUTTON') {
//             const productId = event.target.getAttribute('data-id');
//             currentProduct = products.find(product => product.id == productId);
//             if (currentProduct) {
//                 modalProductName.textContent = currentProduct.name;
//                 modalProductcategory.textContent = currentProduct.category;
//                 modalProductDescription.textContent = currentProduct.description;
//                 modalProductPrice.textContent = `${currentProduct.price.toFixed(2)} LE`;
//                 modal.style.display = 'flex';
//             }
//         }
//     });

//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     addToCartBtn.addEventListener('click', function() {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(currentProduct);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         modal.style.display = 'none';
//     });
// });
// function logoutUser() {
//     localStorage.removeItem('loggedInUser');
//     window.location.href = '../html/LoginPage.html';
// }
document.addEventListener("DOMContentLoaded", function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const productList = document.getElementById('product-list');
    const modal = document.getElementById('product-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductcategory = document.getElementById('modal-product-category');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductPrice = document.getElementById('modal-product-price');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const closeBtn = document.querySelector('.close-btn');
    let currentProduct = null;

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img style="width: 150px; height: 150px;" src="../srcs/${product.name}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <h4>${product.category}</h4>
                <p>${product.price.toFixed(2)} LE</p>
                <button data-id="${product.id}">View Details</button>
            `;
            productList.appendChild(productCard);
        });
    }

    productList.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.getAttribute('data-id');
            currentProduct = products.find(product => product.id == productId);
            if (currentProduct) {
                modalProductName.textContent = currentProduct.name;
                modalProductcategory.textContent = currentProduct.category;
                modalProductDescription.textContent = currentProduct.description;
                modalProductPrice.textContent = `${currentProduct.price.toFixed(2)} LE`;
                modal.style.display = 'flex';
            }
        }
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    addToCartBtn.addEventListener('click', function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = cart.some(item => item.id === currentProduct.id);

        if (isProductInCart) {
            alert('This product is already in your cart.');
        }
        else {
            cart.push(currentProduct);
            localStorage.setItem('cart', JSON.stringify(cart));
            modal.style.display = 'none';
        }
    });

    renderProducts();
});

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/LoginPage.html';
}
