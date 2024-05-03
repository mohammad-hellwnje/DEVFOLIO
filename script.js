var typed = new Typed(".type", {
  strings: ["Photographer", "DeveLoper", "FreeLancer", "Designer"],
  typeSpeed: 300,
  backSpeed: 250,
  loop: true,
});

let nums = document.querySelectorAll(".counters .count");
let section = document.querySelector(".counters");
let section1 = document.querySelectorAll("section");
let navLink = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  section1.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active1");
        document.querySelector("nav ul li a[href*=" + id + "]")? document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active1") : ""
      });
    }
  });

  if (isElementInViewport(section) && !started) {
    nums.forEach((num1) => startCount(num1));
    started = true;
  }
};

// ################################# //

let started = false;

window.onscroll = function() {
  if(window.scrollY >= section.offsetTop - 150) {
    console.log("hello")
    if(!started) {
      nums.forEach((num) => startCount(num))
    }
    started = true
  }
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// ################################# //

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
