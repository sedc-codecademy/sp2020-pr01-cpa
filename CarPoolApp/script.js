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
    loader : document.querySelector(".loader"),
    availableRidesInfo: document.querySelector("#name-time-free-seats")
}




const state = {
    gradovi : [["Велес", "Veles"], ["Демир Капија", "Demir Kapija"],["Кавадарци", "Kavadarci"], ["Неготино", "Negotino"],["Свети Николе", "Sveti Nikole"], ["Берово", "Berovo"],["Виница", "Vinica"], ["Кочани", "Kochani"],["М. Каменица", "M. Kamenica"], ["Пехчево", "Pehchevo"],["Пробиштип", "Probishtip"], ["Штип", "Shtip"],["Дебар", "Debar"], ["Кичево", "Kichevo"],[ "Македонски Брод", "Makedonski Brod"], ["Охрид", "Ohrid"],["Струга", "Struga"], ["Богданци", "Bogdanci"],["Валандово", "Valandovo"], ["Гевгелија", "Gevgelija"], ["Дојран", "Dojran"], ["Радовиш", "Radovish"], ["Струмица", "Strumica"],["Битола", "Bitola"],[ "Демир Хисар", "Demir Hisar"],["Крушево", "Krushevo"], ["Прилеп", "Prilep"],["Ресен", "Resen"], ["Гостивар", "Gostivar"],["Тетово", "Tetovo"], ["Кратово", "Kratovo"],["Крива Паланка", "Kriva Palanka"], ["Куманово", "Kumanovo"], ["Mаврово", "Mavrovo"], ["Скопје", "Skopje"]],
};


//Functions

//Baram prevoz

//Driver CartBtn logic

const showDriverCart = (rideId) => {
    console.log(ride);
    
    DOMElements.section4.style.display = 'none'
    DOMElements.section5.style.display = 'block'
    state.sectionNumber = 5
}

const showRides = (data) => {
    DOMElements.availableRidesInfo.innerHTML =""
    for (const ride of data) {  
      if(state.startCity === ride.startLocation && state.endCity=== ride.endLocation){
          console.log(state.startCity);
          console.log(state.endCity);
          
           DOMElements.availableRidesInfo.innerHTML += 
           `<div class="available-rides-info" onclick="showDriverCart(${ride.id})">
                <button class="btn available-rides-name available-rides">${ride.firstName} ${ride.lastName}</button>
                <button class="btn available-rides-time available-rides">${ride.time}</button>
                <button class="btn available-rides-free-seats available-rides">${ride.freeSeats}</button>
            </div>`
      }else {
          console.log('err');  
      }
  }
    DOMElements.availableRidesInfo.innerHTML += ` 
        <div class="available-rides-next-prev">
            <button class="btn next-prev next"><i class='fa fa-angle-double-left'
                style='font-size:26px'></i></button>
            <button class="btn next-prev prev"><i class='fa fa-angle-double-right'
                 style='font-size:26px'></i></button>
        </div>
        <div class="available-rides-back">
            <button class="btn back-btn" id="backBtnSection4" onclick="back()"><i class='fas fa-caret-left' style='font-size:70px'></i></button>
        </div>`
}

const searchData = async() => {
    state.sectionNumber = 4
    DOMElements.section2.style.display = "none";
    DOMElements.section4.style.display = "block";
    DOMElements.loader.style.display = "block"
    let res = await fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-mitev/data.json')
    state.data =  await res.json()
    showRides(state.data)
    console.log(state.data);
    
    DOMElements.loader.style.display = "none"
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
 

DOMElements.doneButton.addEventListener('click', () => {
    done();
});

DOMElements.baramPrevoz.addEventListener("click", () => {
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