
// WENNY'S MENU FUNCTIONALITY

// CATEGORY FILTERING
const categoryButtons = document.querySelectorAll(".category-btn");
const foodCards = document.querySelectorAll(".food-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        foodCards.forEach(card => {
            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// SHOPPING CART
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        let cart = JSON.parse(localStorage.getItem("wennyCart")) || [];

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        localStorage.setItem("wennyCart", JSON.stringify(cart));

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add +";
        }, 1000);
    });
});
