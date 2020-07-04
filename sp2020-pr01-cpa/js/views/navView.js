const showLoginPage = () => {
    state.page = "login";
    homeSectionAllElements.homeSection.style.display = 'none'
    singInSectionAllElements.signInSection.style.display = 'block'
    headerSectionAllElements.hamburgerMenu.style.display = 'block';
    headerSectionAllElements.headerSection.style.display = 'none'
    lScrenLogo.classList.remove("center");
  }

const showSelectOptionPage = () => {
      state.page = "options";
      homeSectionAllElements.homeSection.style.display = 'none'
      registerSectionAllElements.registerSection.style.display = 'none'
      singInSectionAllElements.signInSection.style.display = 'none'
      headerSectionAllElements.headerSection.style.display = 'block'
      selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
      largeMenu.style.display = "block";
    
  }

const showSearchPage = () => {
state.page = "ride-search";
selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
searchForRideSectionAllElements.searchForRideSection.style.display = 'block'
profileSection.style.display = 'none'
offerRideSection.style.display = 'none'
searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
}

const showOfferRideSection = () => {
  state.page = "offer-ride"
  offerRideSection.style.display = 'block'
  selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
  selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
  searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
  profileSection.style.display = 'none'
  searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
}

const back = () =>{
 if(state.page == "login") {
  homeSectionAllElements.homeSection.style.display = 'block'
  singInSectionAllElements.signInSection.style.display = 'none'
  headerSectionAllElements.hamburgerMenu.style.display = 'none';
  headerSectionAllElements.headerSection.style.display = 'block'
  lScrenLogo.classList.add("center");
  state.page = "home"
   }
  else if(state.page == "ride-search" ){
    searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
    state.page = "options"
}  else if(state.page == "offer-ride"){
    offerRideSection.style.display  = 'none'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
    state.page = "options"
} else if(state.page == "ride-result"){
    searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
    searchForRideSectionAllElements.searchForRideSection.style.display = 'block'
    state.page = "ride-search"
    }
  else if(state.page == "register"){
    homeSectionAllElements.homeSection.style.display = 'block'
    registerSectionAllElements.registerSection.style.display = 'none'
    headerSectionAllElements.hamburgerMenu.style.display = 'none';
    headerSectionAllElements.headerSection.style.display = 'block'
    state.page = "home"
  }
  else if (state.page == "profile"){
    headerSectionAllElements.headerSection.style.display = "block";
    selectOptionSectionAllElements.selectOptionSection.style.display = "block";
    profile.style.display = "none";
    state.page = "options"
  }
  else if (state.page == "about"){
    headerSectionAllElements.headerSection.style.display = "block";
    selectOptionSectionAllElements.selectOptionSection.style.display = "block";
    aboutAppSection.style.display = "none";
    state.page = "options"
  }
};

const logOut = () => {
  
  headerSectionAllElements.headerSection.style.display = "block";
  selectOptionSectionAllElements.selectOptionSection.style.display = "none";
  headerSectionAllElements.hamburgerMenu.style.display = 'none';
  aboutAppSection.style.display = "none";
  searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
  searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
  offerRideSection.style.display  = 'none'
  homeSectionAllElements.homeSection.style.display = 'block'
  largeMenu.style.display = "none";
  singInSectionAllElements.emailInput.value = "";
  singInSectionAllElements.passwordInput.value ="";
  lScrenLogo.classList.add("center");
  searchForRideSectionAllElements.dateOfRide.value = "";
  searchForRideSectionAllElements.startPoint.value = "";
  searchForRideSectionAllElements.endPoint.value = "";
} 

const showRegisterPage = () => {
  state.page = "register"
  homeSectionAllElements.homeSection.style.display = 'none'
  registerSectionAllElements.registerSection.style.display = 'block'
  headerSectionAllElements.hamburgerMenu.style.display = 'block';
  headerSectionAllElements.headerSection.style.display = 'none'
}

const showHomepage = () => {
  state.page = "home"
    headerSectionAllElements.headerSection.style.display = 'block'
    homeSectionAllElements.homeSection.style.display = 'block'
    registerSectionAllElements.registerSection.style.display = 'none'
}

const showAboutPage = () => {
  state.page = "about"
  headerSectionAllElements.headerSection.style.display = "none";
  selectOptionSectionAllElements.selectOptionSection.style.display = "none";
  aboutAppSection.style.display = "block";
  searchForRideSectionAllElements.searchForRideSection.style.display = "none";
  offerRideSection.style.display = "none";
}

