let citydiv = document.getElementById("citiesDiv");
let citydiv2 = document.getElementById("citiesDiv2");

let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3")

let startCity = document.getElementById("start");
let endCity = document.getElementById("finish");

// citydiv.style.display = "none";

let gradovi = ["Велес", "Демир Капија","Кавадарци", "Неготино","Свети Николе", "Берово","Виница", "Кочани","Македонска Каменица", "Пехчево","Пробиштип", "Штип","Дебар", "Кичево", "Македонски Брод", "Охрид","Струга", "Богданци","Валандово", "Гевгелија","Радовиш", "Струмица","Битола", "Демир Хисар","Крушево", "Прилеп","Ресен", "Гостивар","Тетово", "Кратово","Крива Паланка", "Куманово","Скопје"];
let gradovi2 = ["Велес", "Демир Капија","Кавадарци", "Неготино","Свети Николе", "Берово","Виница", "Кочани","Македонска Каменица", "Пехчево","Пробиштип", "Штип","Дебар", "Кичево", "Македонски Брод", "Охрид","Струга", "Богданци","Валандово", "Гевгелија","Радовиш", "Струмица","Битола", "Демир Хисар","Крушево", "Прилеп","Ресен", "Гостивар","Тетово", "Кратово","Крива Паланка", "Куманово","Скопје"];

let i = 0;
let j = 0;

// grad na trgnuvanje

function cityList() {
    for (const item of gradovi) {
        i++;
        citydiv.innerHTML += `<button class="btn cityBtn" onclick="showCity('${item}')" id="${i}">${item}</button>`;
    }
}


startCity.addEventListener("click" , () => {
    citydiv.innerHTML = ""
    section2.style.display = "none";
    section3.style.display = "block";

    cityList();

});


function showCity(item) {

  startCity.innerText = item;
  section2.style.display = 'block';
  section3.style.display = 'none';
}

// grad na pristignuvanje

function cityList2() {
    for (const item of gradovi2) {
        j++;
        citydiv.innerHTML += `<button class="btn cityBtn" onclick="showCity2('${item}')" id="${j}">${item}</button>`;
    }
}

endCity.addEventListener("click" , () => {
    citydiv.innerHTML = ""
    section2.style.display = "none";
    section3.style.display = "block";

    cityList2();

});

function showCity2(item) {

    endCity.innerText = item;
    section2.style.display = 'block';
    section3.style.display = 'none';
  }