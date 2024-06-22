document.addEventListener("DOMContentLoaded", function () {
    let categories = JSON.parse(localStorage.getItem('categories')) || [];

    const categoryForm = document.getElementById('category-form');
    const modalTitle = document.getElementById('modal-title');
    const modal = document.getElementById('category-modal');
    const categoryNameInput = document.getElementById('category-name');
    const categoryIdInput = document.getElementById('category-id');
    const categoryList = document.getElementById('categories-list');
    const closeBtn = document.querySelector('.close-btn');

    function loadCategories() {
        categoryList.innerHTML = '';

        categories.forEach(category => {
            const CatCard = document.createElement('div');
            CatCard.classList.add("category-card");
            CatCard.innerHTML = `
                <h3>${category.name}</h3>
                <button data-id="${category.id}" class="edit-btn">Edit</button>
                <button data-id="${category.id}" class="delete-btn">Delete</button>
            `;
            categoryList.appendChild(CatCard);
        });
    }

    document.getElementById('add-cat-btn').addEventListener('click', function () {
        modalTitle.textContent = 'Add Category';
        categoryForm.reset();
        categoryIdInput.value = '';
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    categoryList.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const id = event.target.getAttribute('data-id');
            const category = categories.find(cat => cat.id == id);
            if (category) {
                categoryNameInput.value = category.name;
                categoryIdInput.value = category.id;
                modalTitle.textContent = 'Edit Category';
                modal.style.display = 'flex';
            }
        } else if (event.target.classList.contains('delete-btn')) {
            const id = event.target.getAttribute('data-id');
            categories = categories.filter(cat => cat.id != id);
            localStorage.setItem('categories', JSON.stringify(categories));
            loadCategories();
        }
    });

    categoryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const id = categoryIdInput.value;
        const name = categoryNameInput.value;
        if (name) {
            if (id) {
                const category = categories.find(cat => cat.id == id);
                if (category) {
                    category.name = name;
                }
            } else {
                const newCategory = { id: Date.now(), name: name };
                categories.push(newCategory);
            }
            localStorage.setItem('categories', JSON.stringify(categories));
            modal.style.display = 'none';
            loadCategories();
        }
    });

    loadCategories();
});

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/LoginPage.html';
}