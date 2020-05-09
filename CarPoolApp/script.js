/*Site DOM elementi na edno mesto*/ 
const DOMElements = {
    baramPrevoz : document.getElementById("baramPrevoz"),
    backButtons: document.querySelectorAll(".back-btn"),
    section1: document.querySelector(".section1"),
    section2: document.querySelector(".section2"),
    section3: document.querySelector(".section3"),
    section4: document.querySelector(".section4"),
    section5: document.querySelector(".section5"),
    section6: document.querySelector(".section6"),
    doneButton: document.querySelector("#done"),
    availableRidesButton: document.querySelectorAll(".available-rides-info"),
    searchBtn : document.getElementById("searchBtn"),
    confirmButton : document.getElementById("confirmBtn"),
    citydiv : document.getElementById("citiesDiv"),
    startCity : document.getElementById("start"),
    endCity : document.getElementById("finish"),
}




const state = {
    gradovi : [["Велес", "Veles"], ["Демир Капија", "Demir Kapija"],["Кавадарци", "Kavadarci"], ["Неготино", "Negotino"],["Свети Николе", "Sveti Nikole"], ["Берово", "Berovo"],["Виница", "Vinica"], ["Кочани", "Kochani"],["М. Каменица", "M. Kamenica"], ["Пехчево", "Pehchevo"],["Пробиштип", "Probishtip"], ["Штип", "Shtip"],["Дебар", "Debar"], ["Кичево", "Kichevo"],[ "Македонски Брод", "Makedonski Brod"], ["Охрид", "Ohrid"],["Струга", "Struga"], ["Богданци", "Bogdanci"],["Валандово", "Valandovo"], ["Гевгелија", "Gevgelija"], ["Дојран", "Dojran"], ["Радовиш", "Radovish"], ["Струмица", "Strumica"],["Битола", "Bitola"],[ "Демир Хисар", "Demir Hisar"],["Крушево", "Krushevo"], ["Прилеп", "Prilep"],["Ресен", "Resen"], ["Гостивар", "Gostivar"],["Тетово", "Tetovo"], ["Кратово", "Kratovo"],["Крива Паланка", "Kriva Palanka"], ["Куманово", "Kumanovo"], ["Mаврово", "Mavrovo"], ["Скопје", "Skopje"]]
};


//Functions

//Baram prevoz


const searchData = () => {
    state.sectionNumber = 4
    DOMElements.section2.style.display = "none";
    DOMElements.section4.style.display = "block";
}




//Driver CartBtn logic

const showDriverCart = () => {
    DOMElements.section4.style.display = 'none'
    DOMElements.section5.style.display = 'block'
    state.sectionNumber = 5
}





//Ovie funkcii se gotovi------------------------------------------------
// Izbiranje na Gradovi
const cityList = (city) =>{
    DOMElements.citydiv.innerHTML = ""
    DOMElements.section2.style.display = "none";
    DOMElements.section3.style.display = "block";
    for (const item of state.gradovi) {
        DOMElements.citydiv.innerHTML += `<button class="btn cityBtn" onclick="${city}('${item[0]}', '${item[1]}')">${item[0]}</button>`;
    }
};

const showCity = (item, item2)  => {
    state.sectionNumber = 2
    DOMElements.startCity.innerText = item;
    state.startCity = item2
    console.log(state.startCity);
    DOMElements.section2.style.display = "block";
    DOMElements.section3.style.display = "none";
};

const showCity2 = (item, item2) => {
    state.sectionNumber = 2
    DOMElements.endCity.innerText = item;
    state.endCity = item2
    console.log(state.endCity);
    
    DOMElements.section2.style.display = 'block';
    DOMElements.section3.style.display = 'none';
};

const displaySection2 = () => {
    state.sectionNumber = 2
    DOMElements.section1.style.display = "none";
    DOMElements.section2.style.display = "block";
};

const back = () =>{
    if(state.sectionNumber == 2 ){
        DOMElements.section1.style.display = 'block'
        DOMElements.section2.style.display = 'none'
        state.sectionNumber = 1
    } else if(state.sectionNumber == 4){
        DOMElements.section2.style.display = 'block'
        DOMElements.section4.style.display = 'none'
        state.sectionNumber = 2
    }else if(state.sectionNumber == 5){
        DOMElements.section4.style.display = 'block'
        DOMElements.section5.style.display = 'none'
        state.sectionNumber = 4
    }
};

const confirmTrip = () =>{
    DOMElements.section5.style.display = "none";
    DOMElements.section6.style.display = "block";
};

//Done Button logic
const done = () => {
    DOMElements.section6.style.display = 'none'
    DOMElements.section1.style.display = 'block'
    state.sectionNumber = 1
};
//-------------------------------------------------------------------

// Event Listeners
 DOMElements.backButtons.forEach(button => {
     button.addEventListener('click', () => {
         back();
     });
});

DOMElements.availableRidesButton.forEach(button => {
    button.addEventListener('click', () => {
        showDriverCart();
    })
})

DOMElements.doneButton.addEventListener('click', () => {
    done();
});

baramPrevoz.addEventListener("click", () => {
    displaySection2()
});

DOMElements.searchBtn.addEventListener("click", () => {
    searchData()
  });
  

DOMElements.endCity.addEventListener("click" , () => {
    cityList('showCity2');
});

DOMElements.startCity.addEventListener("click" , () => {
    cityList('showCity');
});

DOMElements.confirmButton.addEventListener("click", () => {
    confirmTrip()
});