let searchCarBtn = document.getElementById("serach-car-btn");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");
let filterBtn = document.getElementById("btn filter-btn")
let acceptBtn = document.getElementById("acceptBtn");


//-------  search-Button-------------------------
searchCarBtn.addEventListener("click", () => {
    section1.style.display = "none";
    section2.style.display ="block";

}
)
//--------list of options- Button---------------------------
filterBtn.addEventListener("click", () => {
    section2.style.display = "none";
    section3.style.display ="block";

})
//-------  confirm -Button-------------------------
acceptBtn.addEventListener("click", () => {
    section5.style.display = "none";
    section6.style.display ="block";

}
)

