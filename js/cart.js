// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const totalAmountElement = document.getElementById('total-amount');
  
//     function loadCart() {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cartItemsContainer.innerHTML = '';
//         let totalAmount = 0;
        
//         cart.forEach(item => {
//             totalAmount += item.price;

//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <img style="width: 150px; height: 150px;" src="../srcs/${item.name}.jpg" alt="${item.name}">
//                     <div class="item-details">
//                         <h3>${item.name}</h3>
//                         <h4>${item.category}
//                         <p>Price: ${item.price.toFixed(2)} LE</p>
//                         <label for="quantity1">Quantity:</label>
//                         <input type="number" id="quantity1" name="quantity1" value="1" min="1">
//                     </div>
//                 <button class="remove-item" data-id="${item.id}">Remove</button>
           
//             <hr>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         totalAmountElement.textContent = `Total Amount: ${totalAmount.toFixed(2)} LE`;
//     }

//     //remove prod func
//     cartItemsContainer.addEventListener('click', function (event) {
//         if (event.target.tagName === 'BUTTON') {
//             const productId = event.target.getAttribute('data-id');
//             let cart = JSON.parse(localStorage.getItem('cart')) || [];
//             cart = cart.filter(item => item.id != productId);
//             localStorage.setItem('cart', JSON.stringify(cart));
//             loadCart();
//         }
//     });

//     loadCart();
// });
// function logoutUser() {
//     localStorage.removeItem('loggedInUser');
//     window.location.href = '../html/LoginPage.html';
// }

document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const applyOrderButton = document.getElementById('apply-order-button');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cart.forEach(item => {
            totalAmount += item.price;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img style="width: 150px; height: 150px;" src="../srcs/${item.name}.jpg" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <h4>${item.category}</h4>
                    <p>Price: ${item.price.toFixed(2)} LE</p>
                    <label for="quantity-${item.id}">Quantity:</label>
                    <input type="number" id="quantity-${item.id}" name="quantity" value="${item.quantity || 1}" min="1">
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
                <hr>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotalAmount();
    }

    function updateTotalAmount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalAmount = 0;
        cart.forEach(item => {
            const quantity = item.quantity || 1;
            totalAmount += item.price * quantity;
        });
        totalAmountElement.textContent = `Total Amount: ${totalAmount.toFixed(2)} LE`;
    }

    // Event listener for quantity change
    cartItemsContainer.addEventListener('input', function (event) {
        if (event.target.name === 'quantity') {
            const productId = event.target.id.split('-')[1];
            const newQuantity = parseInt(event.target.value);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productIndex = cart.findIndex(item => item.id == productId);

            if (productIndex > -1 && newQuantity > 0) {
                cart[productIndex].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateTotalAmount();
            }
        }
    });

    // Event listener for remove button
    cartItemsContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id != productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    });

    loadCart();

    applyOrderButton.addEventListener('click', function () {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }

        let pendingOrders = JSON.parse(localStorage.getItem('pending_orders')) || [];
        const order = {
            id: Date.now(),
            items: cart,
            totalAmount: totalAmountElement.textContent,
            date: new Date().toLocaleString()
        };

        pendingOrders.push(order);
        localStorage.setItem('pending_orders', JSON.stringify(pendingOrders));

        alert('Order has been placed successfully!');
        localStorage.removeItem('cart');
        loadCart();
        updateTotalAmount();
    });

    loadCart();
});


    




function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/LoginPage.html';
}

