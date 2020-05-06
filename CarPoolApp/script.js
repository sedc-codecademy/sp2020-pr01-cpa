/*Site DOM elementi na edno mesto*/ 
const DOMElements = {
    backButtons: document.querySelectorAll(".back-btn"),
    section1: document.querySelector(".section1"),
    section2: document.querySelector(".section2"),
    section3: document.querySelector(".section3"),
    section4: document.querySelector(".section4"),
    section5: document.querySelector(".section5"),
    section6: document.querySelector(".section6"),
    doneButton: document.querySelector("#done"),
    availableRidesButton: document.querySelectorAll(".available-rides-info")
}
//back buttons
let backButtonSection2 = document.getElementById("backBtnSection2");
let backButtonSection4 = document.getElementById("backBtnSection4");
let backButtonSection5 = document.getElementById("backBtnSection5");
//
let baramPrevoz = document.getElementById("baramPrevoz");
let searchBtn = document.getElementById("searchBtn");
let confirmButton = document.getElementById("confirmBtn");
//
let citydiv = document.getElementById("citiesDiv");
let startCity = document.getElementById("start");
let endCity = document.getElementById("finish");

baramPrevoz.addEventListener("click", () => {
        DOMElements.section1.style.display = "none";
        DOMElements.section2.style.display = "block";
        startCity.innerText = "Град на тргнување";
        endCity.innerText = "Град на пристигнување";
});

backButtonSection2.addEventListener("click", () => {
    DOMElements.section1.style.display = "block";
    DOMElements.section2.style.display = "none";
});

searchBtn.addEventListener("click", () => {
    DOMElements.section2.style.display = "none";
    DOMElements.section4.style.display = "block";

});

backButtonSection4.addEventListener("click", () => {
    DOMElements.section4.style.display = "none";
    DOMElements.section2.style.display = "block";
});

backButtonSection5.addEventListener("click", () => {
    DOMElements.section5.style.display = "none";
    DOMElements.section4.style.display = "block";
});

confirmButton.addEventListener("click", () => {
    DOMElements.section5.style.display = "none";
    DOMElements.section6.style.display = "block";
});

// citydiv.style.display = "none";
let gradovi = ["Велес", "Демир Капија","Кавадарци", "Неготино","Свети Николе", "Берово","Виница", "Кочани","М. Каменица", "Пехчево","Пробиштип", "Штип","Дебар", "Кичево", "Македонски Брод", "Охрид","Струга", "Богданци","Валандово", "Гевгелија", "Дојран", "Радовиш", "Струмица","Битола", "Демир Хисар","Крушево", "Прилеп","Ресен", "Гостивар","Тетово", "Кратово","Крива Паланка", "Куманово", "Mаврово", "Скопје"];

let i = 0;
let j = 0;

// grad na trgnuvanje
function cityList() {
    for (const item of gradovi) {
        i++;
        citydiv.innerHTML += `<button class="btn cityBtn" onclick="showCity('${item}')" id="${i}">${item}</button>`;
    }
};

startCity.addEventListener("click" , () => {
    citydiv.innerHTML = ""
    DOMElements.section2.style.display = "none";
    DOMElements.section3.style.display = "block";
    cityList();
});

function showCity(item) {

  startCity.innerText = item;
  DOMElements.section2.style.display = "block";
  DOMElements.section3.style.display = "none";
};

// grad na pristignuvanje
function cityList2() {
    for (const item of gradovi) {
        j++;
        citydiv.innerHTML += `<button class="btn cityBtn" onclick="showCity2('${item}')" id="${j}">${item}</button>`;
    }
};

endCity.addEventListener("click" , () => {
    citydiv.innerHTML = ""
    DOMElements.section2.style.display = "none";
    DOMElements.section3.style.display = "block";
    cityList2();
});

function showCity2(item) {
    endCity.innerText = item;
    DOMElements.section2.style.display = 'block';
    DOMElements.section3.style.display = 'none';
};

// const state = {
//     sectionNumber: 5,
// };

//Done Button logic
const done = () => {
    DOMElements.section6.style.display = 'none'
    DOMElements.section1.style.display = 'block'
    //state.sectionNumber = 1
};

//Driver CartBtn logic
/*Ovaa fnkcija treba da bide async. Sega samo go krie section5
i go pokazuva section6*/
const showDriverCart = () => {
    DOMElements.section4.style.display = 'none'
    DOMElements.section5.style.display = 'block'
    //state.sectionNumber = 5
};

// Event Listeners
// DOMElements.backButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         back();
//     });
// });

DOMElements.availableRidesButton.forEach(button => {
    button.addEventListener('click', () => {
        showDriverCart();
    })
})

DOMElements.doneButton.addEventListener('click', () => {
    done();
});