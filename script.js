document.getElementById("load-products").addEventListener("click", function () {
  const button = this;
  button.disabled = true;
  button.childNodes[0].nodeValue = "";
  showLoadingDots(button);
  setTimeout(() => {
    window.location.href = "products.html";
  }, 1000);
});
function showLoadingDots(button) {
  const loadingDots = button.querySelector(".loading-dots");
  loadingDots.style.display = "inline-block";
  setTimeout(() => {
    loadingDots.style.display = "none";
  }, 1200); 
}
