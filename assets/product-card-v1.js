document.addEventListener("DOMContentLoaded", () => {
  const cartDrawer = document.querySelector("cart-drawer");

  document.querySelectorAll(".card-qatc-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const variantId = btn.dataset.variantId;
      if (!variantId) {
        console.error("No variant ID found for product:", btn.dataset.productHandle);
        return;
      }

      // Build payload manually
      const formData = new FormData();
      formData.append("id", variantId);
      formData.append("quantity", 1);

      if (cartDrawer) {
        formData.append(
          "sections",
          cartDrawer.getSectionsToRender().map((section) => section.id)
        );
        formData.append("sections_url", window.location.pathname);
        cartDrawer.setActiveElement(document.activeElement);
      }

      // Fetch request
      fetch(`${window.Shopify.routes.root}cart/add.js`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Added to cart:", data);

          if (cartDrawer) {
            cartDrawer.renderContents(data);
            cartDrawer.classList.remove("is-empty");
            // cartDrawer.open();
          }
        })
        .catch((err) => {
          console.error("Cart add error:", err);
        });
    });
  });
});

function setEqualHeight(selector){
    const divs = document.querySelectorAll(selector);
    const maxHeight = Math.max(...Array.from(divs, div => div.offsetHeight));
    divs.forEach(div => {
    div.style.height = `${maxHeight}px`;
    });
};
document.addEventListener('DOMContentLoaded', () => {
setEqualHeight('.card-info .top__wrap__');
});
