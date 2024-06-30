let loader = document.querySelector(".loader");

window.onload = ()=> {
  loader.style.display = "none"
}
// document.onreadystatechange = () => {
//   if (document.readyState !== "complete") {
//     document.querySelector(".page").style.display = "none";
//     loader.style.display = "block";
//   } else {
//     loader.style.display = "none";
//     document.querySelector(".page").style.display = "block";
//   }
// };


// let myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.querySelector(".loader").style.display = "none";
//   document.querySelector(".page").style.display = "block";
// }