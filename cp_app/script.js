
let registerSection = document.querySelector(".register-section"); 
let offerRideSection = document.getElementById("section4");
let profileSection = document.getElementById("profile");

const backButtons = document.querySelectorAll(".back-btn")

const headerSectionAllElements = {
  headerSection : document.getElementById("header"),
  sideNavFindRide : document.getElementById("sideNavFindRide"),
  sideNavOfferRide : document.getElementById("sideNavOfferRide"),
  sideNavAboutAppBtn : document.getElementById("aboutAppBtn"),
  hamburgerMenu : document.querySelector('.newMenu')

}

const homeSectionAllElements = {
  homeSection : document.getElementById("homeSection"),
  loginBtn : document.getElementById("log-in-btn"),
  registerBtn : document.getElementById("register-btn"),
}

const singInSectionAllElements = {
  signInSection : document.querySelector(".signIn-section"),
  emailInput : document.getElementById("email"),
  passwordInput : document.getElementById("password"),
  signIn : document.getElementById("signIn"),
}

const selectOptionSectionAllElements = {
  selectOptionSection : document.getElementById("section1"),
  findRide : document.getElementById("find-ride"),
  offerRide : document.getElementById("offer-ride"),
}

const searchForRideSectionAllElements =  {
  searchForRideSection : document.getElementById("section2"),
  dateOfRide : document.getElementById("date"),
  startPoint : document.getElementById("start-point"),
  endPoint : document.getElementById("end-point"),
  searchRides : document.getElementById("searchRides")

}

const searchRideResultsSectionAllElements = {
  searchRideResultsSection : document.getElementById("section3"),
  availableRides : document.getElementById('availableRides')
}


let profileBtn = document.getElementById("profileBtn");
let aboutApp = document.getElementById("aboutApp");






let state = {}



homeSectionAllElements.loginBtn.addEventListener('click', () => {
  showLoginPage();
  state.pageNumber = 1;
})

const showLoginPage = () => {
  homeSectionAllElements.homeSection.style.display = 'none'
  singInSectionAllElements.signInSection.style.display = 'block'
  headerSectionAllElements.hamburgerMenu.style.display = 'block';
  headerSectionAllElements.headerSection.style.display = 'none'
}


singInSectionAllElements.signIn.addEventListener('click', () => {
  state.pageNumber = 2;
  getUsers();
});

const getUsers = async() => {
  let response = await fetch(`https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-nacevski/createdUsers.JSON`);
  state.userData = await response.json();
  findUser(state.userData)
  showSelectOptionPage(state.user)
}

const findUser = (data) => {
  state.user = data.filter(user => user.email === singInSectionAllElements.emailInput.value && user.password === singInSectionAllElements.passwordInput.value)
  console.log(state.user);
  
  if(state.user.length === 0){
    console.log(state.user);
    
    alert("NO user")
  }
}

const showSelectOptionPage = (user) => {
  console.log(user);
  if(user.length === 0){
  }
  else {
    homeSectionAllElements.homeSection.style.display = 'none'
    singInSectionAllElements.signInSection.style.display = 'none'
    headerSectionAllElements.headerSection.style.display = 'block'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
  }
}


selectOptionSectionAllElements.findRide.addEventListener('click', () => {
  state.pageNumber = 3;
  showSearchPage()

})

const showSearchPage = () => {
  selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
  searchForRideSectionAllElements.searchForRideSection.style.display = 'block'
}

const searchData = async() => {
// 

searchForRideSectionAllElements.searchForRideSection.style.display = 'none'

state.dateOfRide = searchForRideSectionAllElements.dateOfRide.value
state.startPoint = searchForRideSectionAllElements.startPoint.value
state.endPoint = searchForRideSectionAllElements.endPoint.value

let res = await fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-mitev/data.json')
state.data =  await res.json()
console.log(state.data);

showRides(state.data)
};


const showRides = (data) => {
    console.log(state.startPoint);
    section3.style.display = "block"
    searchRideResultsSectionAllElements.availableRides.innerHTML = ""
    for (const ride of data) //javuva error no raboti
    {  
      if(state.startPoint === ride.startLocation && state.endPoint === ride.endLocation && state.dateOfRide === ride.date){
        searchRideResultsSectionAllElements.availableRides.innerHTML += 
            ` <li>
                <div class="collapsible-header collection-item avatar"><img src="img/avatar (1).png" alt="" class="circle"
                    style="width: 40px;">
                  <p class="name">${ride.firstName} ${ride.lastName}</p> <br>
                </div>
                <div class="collapsible-body">
                  <ul>
                    <li class="collection-item">
                      <p>${ride.startLocation} - ${ride.endLocation} </br> ${ride.time}ч. </br> Слободни места: ${ride.freeSeats}</p></br>
                      <p>Има место за багаж, кола тип авант.</p>
                      <p>
                        <label>
                          <input type="checkbox" checked="checked" disabled="disabled" />
                          <span>Брзо возење</span>
                        </label>
                        <label>
                          <input type="checkbox" checked="checked" disabled="disabled" />
                          <span>Со пауза</span>
                        </label>
                        <label>
                          <input type="checkbox" checked="checked" disabled="disabled" />
                          <span>Климатизирано</span>
                        </label>
                      </p>
                      <a href="#" class="btn-small waves-effect waves-light light-blue accent-4">Резервирај</a>
                    </li>
                  </ul>
                </div>
            </li>`  
      }
  }
  //da se dodade innerHtml za koga nema da najde prevoz
}

searchForRideSectionAllElements.searchRides.addEventListener("click", () => {
    state.pageNumber = 5;
    searchData();
    showRides();

})

const back = () =>{
  if(state.pageNumber == 3 ){
   searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
   selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
   state.pageNumber = 2
  } else if(state.pageNumber == 4){
    offerRideSection.style.display  = 'none'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
    state.pageNumber = 2
  }else if(state.pageNumber == 5){
    searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
    searchForRideSectionAllElements.searchForRideSection.style.display = 'block'
      state.pageNumber = 3
  }
};

backButtons.forEach(button => {
  button.addEventListener('click', () => {
      back();
  });
});

selectOptionSectionAllElements.offerRide.addEventListener('click', () => {
  showOfferRideSection();
})

const showOfferRideSection = () => {
  state.pageNumber = 4
  offerRideSection.style.display = 'block'
  selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
}

homeSectionAllElements.registerBtn.addEventListener('click', () => {
  showRegisterPage();
})

const showRegisterPage = () => {
  homeSectionAllElements.homeSection.style.display = 'none'
  registerSection.style.display = 'block'
  headerSectionAllElements.hamburgerMenu.style.display = 'block';
  headerSectionAllElements.headerSection.style.display = 'none'
}