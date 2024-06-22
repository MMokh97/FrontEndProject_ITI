document.addEventListener("DOMContentLoaded", function () {
    const ordersContainer = document.getElementById('orders-container');

    function loadPendingOrders() {
        const pendingOrders = JSON.parse(localStorage.getItem('pending_orders')) || [];
        ordersContainer.innerHTML = '';

        pendingOrders.forEach(order => {
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
                <div class="order-actions">
                    <button class="confirm-button" data-id="${order.id}">Confirm</button>
                    <button class="reject-button" data-id="${order.id}">Reject</button>
                </div>
            `;
            ordersContainer.appendChild(orderElement);
        });
    }

    ordersContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('confirm-button') || event.target.classList.contains('reject-button')) {
            const orderId = parseInt(event.target.getAttribute('data-id'));
            let pendingOrders = JSON.parse(localStorage.getItem('pending_orders')) || [];
            let confirmedOrders = JSON.parse(localStorage.getItem('confirmed_orders')) || [];
            let rejectedOrders = JSON.parse(localStorage.getItem('rejected_orders')) || [];
            const orderIndex = pendingOrders.findIndex(order => order.id === orderId);

            if (orderIndex > -1) {
                const order = pendingOrders[orderIndex];

                if (event.target.classList.contains('confirm-button')) {
                    confirmedOrders.push(order);
                    localStorage.setItem('confirmed_orders', JSON.stringify(confirmedOrders));
                    alert(`Order ID ${order.id} has been confirmed.`);
                } else if (event.target.classList.contains('reject-button')) {
                    rejectedOrders.push(order);
                    localStorage.setItem('rejected_orders', JSON.stringify(rejectedOrders));
                    alert(`Order ID ${order.id} has been rejected.`);
                }

                pendingOrders.splice(orderIndex, 1);
                localStorage.setItem('pending_orders', JSON.stringify(pendingOrders));
                loadPendingOrders();
            }
        }
    });

    loadPendingOrders();
});
