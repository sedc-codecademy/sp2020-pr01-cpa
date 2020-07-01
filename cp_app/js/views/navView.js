const showLoginPage = () => {
    state.page = "login";
    console.log(state.page);
    homeSectionAllElements.homeSection.style.display = 'none'
    singInSectionAllElements.signInSection.style.display = 'block'
    headerSectionAllElements.hamburgerMenu.style.display = 'block';
    headerSectionAllElements.headerSection.style.display = 'none'
  }

const showSelectOptionPage = () => {
      state.page = "options";
      homeSectionAllElements.homeSection.style.display = 'none'
      registerSectionAllElements.registerSection.style.display = 'none'
      singInSectionAllElements.signInSection.style.display = 'none'
      headerSectionAllElements.headerSection.style.display = 'block'
      selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
    
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
};

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

const showProfilePage = () => {
  state.page = "profile"
  profileSection.style.display = 'block'
  offerRideSection.style.display = 'none'
  searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
  selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
  searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
}