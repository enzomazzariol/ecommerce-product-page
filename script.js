const navLinks = document.querySelectorAll(".nav-link");
const thumbnails = document.querySelectorAll(".thumbnail-wrapper");
const mainImage = document.querySelector(".main-image");
const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => {
      l.classList.remove("selected");
    });
    link.classList.add("selected");
  });
});

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

cartIcon.addEventListener("mouseenter", () => {
  cartContainer.classList.add("show");
});

cartIcon.addEventListener("mouseleave", () => {
  cartContainer.classList.remove("show");
});
