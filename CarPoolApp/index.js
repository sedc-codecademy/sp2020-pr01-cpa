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


const state = {
    sectionNumber: 5,
};


//Functions
//Back button logic
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
}

//Done Button logic
const done = () => {
    DOMElements.section6.style.display = 'none'
    DOMElements.section1.style.display = 'block'
    state.sectionNumber = 1
}

//Driver CartBtn logic
/*Ovaa fnkcija treba da bide async. Sega samo go krie section5
i go pokazuva section6*/
const showDriverCart = () => {
    DOMElements.section4.style.display = 'none'
    DOMElements.section5.style.display = 'block'
    state.sectionNumber = 5
}



// Event Listeners
DOMElements.backButtons.forEach(button => {
    button.addEventListener('click', () => {
        back();
    });
});

DOMElements.availableRidesButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hi")
        showDriverCart();
    })
})

DOMElements.doneButton.addEventListener('click', () => {
    done();
})



