
let state = {}


homeSectionAllElements.loginBtn.addEventListener('click', () => {
  showLoginPage();
  state.pageNumber = 1;
})



singInSectionAllElements.signIn.addEventListener('click', () => {
  state.pageNumber = 2;
  getUsers();
});


selectOptionSectionAllElements.findRide.addEventListener('click', () => {
  state.pageNumber = 3;
  showSearchPage()

})


searchForRideSectionAllElements.searchRides.addEventListener("click", () => {
  
  state.dateOfRide = searchForRideSectionAllElements.dateOfRide.value
  state.startPoint = searchForRideSectionAllElements.startPoint.value
  state.endPoint = searchForRideSectionAllElements.endPoint.value
  state.pageNumber = 5;
  getRides();
  showRides();

})

backButtons.forEach(button => {
  button.addEventListener('click', () => {
      back();
  });
});

selectOptionSectionAllElements.offerRide.addEventListener('click', () => {
  showOfferRideSection();
})



homeSectionAllElements.registerBtn.addEventListener('click', () => {
  showRegisterPage();
})

