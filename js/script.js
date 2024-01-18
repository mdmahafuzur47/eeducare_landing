const mainContainer = document.querySelector(".mainContainer");
const imgChange = document.querySelector("#changeImg");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  document.body.scrollTop;
  console.log("hello");
});

window.addEventListener("load", function () {
  setTimeout(function () {
    mainContainer.classList.remove("displayLoader");
  }, 4000);
});

const imgArray = [
  "accets/image/1 (1).webp",
  "accets/image/1 (2).webp",
  "accets/image/1 (3).webp",
  "accets/image/1 (4).webp",
  "accets/image/1 (5).webp",
  "accets/image/1 (6).webp",
];

function changeImg() {
  const randomNumber = Math.floor(Math.random() * imgArray.length);
  imgChange.src = imgArray[randomNumber];
}

changeImg();
