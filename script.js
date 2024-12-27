// FOR CAROUSEL 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// LIST OF PRODUCT CATALOG
const products = [
    {
        id: 1,
        title: "Akko Capybara Keycap Set MAO Profile 142 Keys",
        description: "An original design by Akko team, inspired by the spirit and graceful manner of the Capybara.",
        price: 2495.00,
        image: "images/1.png"
    },
    {
        id: 2,
        title: "Akko Racoon Mao Keycap Set 142-Keys",
        description: "MAO Profile Dye-sublimation Keycaps; Design inspired by Raccoon.",
        price: 2295.00,
        image: "images/2.png"
    },
    {
        id: 3,
        title: "Akko Colorful Cats Keycap Set MAO Profile 142 Keys",
        description: "Colorful Cats keycap Set (142-key) Akko Original Colorful Cats theme keycaps.",
        price: 2395.00,
        image: "images/3.png"
    },
    {
        id: 4,
        title: "Akko Panda Mao Keycap Set 142 Keys",
        description: "MAO Profile Dye-sublimation Keycaps; Design inspired by Pandas.",
        price: 2295.00,
        image: "images/4.png"
    },
    {
        id: 5,
        title: "Akko Butterfly Fantasy Keycap Set MOA Profile 140 Keys",
        description: "Compatible with major-sizes keyboards including but not limited to 60%, 64-key, 65%, TKL, 75%, 96%, 1800 compact, and full-size keyboards..",
        price: 2495.00,
        image: "images/5.png"
    },
    {
        id: 6,
        title: "Akko Capybara Pudding Keycap Set MOA Profile 140 Keys",
        description: "Capybara, known for its self-soothing and caring nature",
        price: 2495.00,
        image: "images/6.png"
    },
    {
        id: 7,
        title: "Akko Swan Sonata Pudding Keycap Set MOA Profile 140 Keys",
        description: "Akko Swan Sonata Keycap Set blends graceful swans, musical notations, and purple hues for an elegant design.",
        price: 2350.00,
        image: "images/7.png"
    },
    {
        id: 8,
        title: "Akko Rainbow Candy Keycap Set MOA Profile 140 Keys",
        description: "Akko Original Rainbow Candy keycap set blends bright rainbow colors, bubble candy fonts, and hip-hop elements for a stylish and youthful look.",
        price: 2150.00,
        image: "images/8.png"
    }
    
];

// CART SECTION
const cart = [];

const renderProducts = () => {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'pricing-plan';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}" style="width:100%">
            <div class="plan-title">${product.title}</div>
            <p>${product.description}</p>
            <div class="plan-price">₱${product.price.toLocaleString()}</div>
            <button class="plan-button" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
};

// ADD TO CART SECTION
const addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCartCount(); // Update the cart
        showNotification(); // Show the notification
    }
};

// Function to show the notification when item has successfully added
const showNotification = () => {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';  // Make the notification visible
    notification.classList.add('show');   // Apply the animation class

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show'); // Remove the animation class
        setTimeout(() => {
            notification.style.display = 'none';  // Hide it completely after animation
        }, 500); // Wait for the fade-out animation to finish
    }, 3000); // 3000=3 seconds
};

const updateCartCount = () => {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
};

// modal
const openCart = () => {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `
        <div>
            <strong>${item.title}</strong> - ₱${item.price.toLocaleString()}
        </div>
    `).join('');
    cartModal.style.display = 'flex';
};

const closeCart = () => {
    document.getElementById('cartModal').style.display = 'none';
};

const checkout = () => {
    alert('Checkout not implemented yet! Please refresh the page to browse again💜');
    closeCart();
};

// Initialize product rendering
renderProducts();


