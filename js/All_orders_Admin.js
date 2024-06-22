document.addEventListener("DOMContentLoaded", function () {
    const pendingOrdersContainer = document.getElementById('pending-orders');
    const confirmedOrdersContainer = document.getElementById('confirmed-orders');
    const rejectedOrdersContainer = document.getElementById('rejected-orders');

    function loadOrders() {
        const pendingOrders = JSON.parse(localStorage.getItem('pending_orders')) || [];
        const confirmedOrders = JSON.parse(localStorage.getItem('confirmed_orders')) || [];
        const rejectedOrders = JSON.parse(localStorage.getItem('rejected_orders')) || [];

        displayOrders(pendingOrders, pendingOrdersContainer);
        displayOrders(confirmedOrders, confirmedOrdersContainer);
        displayOrders(rejectedOrders, rejectedOrdersContainer);
    }

    function displayOrders(orders, container) {
        container.innerHTML = '';
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order-container');
            orderElement.innerHTML = `
                <h3>Order ID: ${order.id}</h3>
                <p><strong>Date:</strong> ${order.date}</p>
                <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                <div class="order-items">
                    ${order.items.map(item => `
                        <p>${item.name} (${item.category}) - ${item.price.toFixed(2)} LE x ${item.quantity}</p>
                    `).join('')}
                </div>
            `;
            container.appendChild(orderElement);
        });
    }

    loadOrders();
});
