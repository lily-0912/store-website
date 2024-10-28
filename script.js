// common
const navIds = document.querySelectorAll("a[href^='#']");

// スムーススクロール

navIds.forEach (navId =>{
  navId.addEventListener("click" , function(e){
    e.preventDefault();

    const target = document.querySelector(navId.hash),
          offsetTop = window.pageYOffset + target.getBoundingClientRect().top;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
  })
})

// ハンバーガーメニュー

function toggleNav(){
  const body = document.body,
        hamburger = document.getElementById("js-hamburger"),
        blackBackground = document.getElementById("js-black_background");

  hamburger.addEventListener("click", function(){
    body.classList.toggle("nav-open");
  })

  navIds.forEach((navId) => {
    navId.addEventListener("click", function(){
      body.classList.remove("nav-open");
    })
  })

  blackBackground.addEventListener("click",function(){
    body.classList.remove("nav-open");
  })
}

  toggleNav();
