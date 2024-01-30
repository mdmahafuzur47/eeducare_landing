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
  "accets/image/1.jpg",
  "accets/image/2.jpg",
  "accets/image/3.jpg",
  "accets/image/4.jpg",
];

function changeImg() {
  const randomNumber = Math.floor(Math.random() * imgArray.length);
  imgChange.src = imgArray[randomNumber];
}

changeImg();
