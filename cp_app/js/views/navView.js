const showLoginPage = () => {
    homeSectionAllElements.homeSection.style.display = 'none'
    singInSectionAllElements.signInSection.style.display = 'block'
    headerSectionAllElements.hamburgerMenu.style.display = 'block';
    headerSectionAllElements.headerSection.style.display = 'none'
  }

const showSelectOptionPage = (user) => {
    console.log(user);
    if(user.length === 0){
      alert("Wrong username or password")
    }
    else {
      homeSectionAllElements.homeSection.style.display = 'none'
      registerSectionAllElements.registerSection.style.display = 'none'
      singInSectionAllElements.signInSection.style.display = 'none'
      headerSectionAllElements.headerSection.style.display = 'block'
      selectOptionSectionAllElements.selectOptionSection.style.display = 'block'
    }
  }

const showSearchPage = () => {
selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
searchForRideSectionAllElements.searchForRideSection.style.display = 'block'
}

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

const showOfferRideSection = () => {
    state.pageNumber = 4
    offerRideSection.style.display = 'block'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
}

const showRegisterPage = () => {
homeSectionAllElements.homeSection.style.display = 'none'
registerSectionAllElements.registerSection.style.display = 'block'
headerSectionAllElements.hamburgerMenu.style.display = 'block';
headerSectionAllElements.headerSection.style.display = 'none'
}

const showHomepage = () => {
  if (state.user.firstName == "" || state.user.lastName == "" || state.user.password == ""|| state.user.phone == ""|| state.user.email == "") {
    alert("All fields are mandatory ")
  } else {
    headerSectionAllElements.headerSection.style.display = 'block'
    homeSectionAllElements.homeSection.style.display = 'block'
    registerSectionAllElements.registerSection.style.display = 'none'
  }

}