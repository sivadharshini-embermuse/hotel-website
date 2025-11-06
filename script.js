

function scrollLeft() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("cardContainer");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
  
    leftBtn.addEventListener("click", function () {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });
  
    rightBtn.addEventListener("click", function () {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
  
