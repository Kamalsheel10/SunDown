let pageFourAnimation = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  console.log(elems);
  elems.forEach((val) => {
    val.addEventListener("mouseenter", () => {
      var image = val.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
};

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

let menuAnimation = () => {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navImg = document.querySelector("nav img");
    var flag = 0;
  
    menu.addEventListener("click", () => {
      if (flag == 0) {
        full.style.top = 0;
        navImg.style.opacity = 0;
        flag = 1;
      } else {
        full.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
      }
    });
  };
  
swiperAnimation();
pageFourAnimation();
menuAnimation();

let loader=document.querySelector("#loader")
setTimeout(()=>{
    loader.style.top="-100%";
},4200)

