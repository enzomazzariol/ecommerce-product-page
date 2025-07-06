const navLinks = document.querySelectorAll(".nav-link");
const thumbnails = document.querySelectorAll(".thumbnail-wrapper");
const mainImage = document.querySelector(".main-image");
const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const decrementIcon = document.querySelector(".decrement-icon");
const incrementIcon = document.querySelector(".increment-icon");
const quantityNumber = document.querySelector(".quantity-number");
const addToCartButton = document.querySelector(".add-to-cart");
const cartMessage = document.querySelector(".cart-message");
const cartItem = document.querySelector(".cart-item");
const cartItemQuantity = document.querySelector(".cart-item-quantity");
const checkoutButton = document.querySelector(".checkout-button");
const cartItemTotal = document.querySelector(".cart-item-total");
const cartItemCount = document.querySelector(".cart-item-count");
const previousButtonImage = document.querySelector(".previous-button");
const nextButtonImage = document.querySelector(".next-button");
const menuButtonMobile = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButtonMobile = document.querySelector(".close-menu");
const mobileMenuOverlay = document.querySelector(".mobile-overlay");

// navbar interaction
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => {
      l.classList.remove("selected");
    });
    link.classList.add("selected");
  });
});

// thumbnail interaction
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((t) => {
      t.classList.remove("selected");
    });
    thumbnail.classList.add("selected");
    mainImage.src = thumbnail
      .querySelector("img")
      .src.replace("-thumbnail", "");
    mainImage.alt = thumbnail
      .querySelector("img")
      .alt.replace("Thumbnail", "Product Image");
  });
});

// image gallery interaction
const imagePaths = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentImageIndex = 0;

const updateMainImage = () => {
  mainImage.src = imagePaths[currentImageIndex];
  mainImage.alt = `Product Image ${currentImageIndex + 1}`;
};

previousButtonImage.addEventListener("click", () => {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = imagePaths.length - 1;
  }

  updateMainImage();
});

nextButtonImage.addEventListener("click", () => {
  currentImageIndex++;

  if (currentImageIndex >= imagePaths.length) {
    currentImageIndex = 0;
  }

  updateMainImage();
});

const incrementQuantity = () => {
  quantityNumber.textContent = parseInt(quantityNumber.textContent) + 1;
};

const decrementQuantity = () => {
  quantityNumber.textContent = Math.max(
    0,
    parseInt(quantityNumber.textContent) - 1
  );
};

const addToCart = () => {
  if (quantityNumber.textContent > 0) {
    // Mostramos el item del carrito y ocultamos el mensaje
    cartMessage.style.display = "none";
    cartItem.style.display = "flex";
    checkoutButton.style.display = "block";
    cartItemCount.style.display = "flex";

    // Actualizamos la cantidad y el total del item en el carrito
    cartItemQuantity.textContent =
      parseInt(cartItemQuantity.textContent) +
      parseInt(quantityNumber.textContent);
    cartItemTotal.textContent = `$${(
      parseInt(cartItemQuantity.textContent) * 125
    ).toFixed(2)}`;
    cartItemCount.textContent = cartItemQuantity.textContent;

    // Actualizamos a cero la cantidad del input
    quantityNumber.textContent = 0;
  } else {
    cartMessage.style.display = "block";
    cartItem.style.display = "none";
  }
};

decrementIcon.addEventListener("click", decrementQuantity);
incrementIcon.addEventListener("click", incrementQuantity);
addToCartButton.addEventListener("click", addToCart);

cartIcon.addEventListener("mouseenter", () => {
  cartContainer.classList.add("show");
});

cartIcon.addEventListener("mouseleave", () => {
  cartContainer.classList.remove("show");
});

// menu mobile interaction
menuButtonMobile.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeButtonMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

mobileMenuOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
