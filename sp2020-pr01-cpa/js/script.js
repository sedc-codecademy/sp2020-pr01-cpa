let state = {
  data : []
}

state.user = new User();

homeSectionAllElements.loginBtn.addEventListener('click', () => {
  showLoginPage(); 
})

singInSectionAllElements.signIn.addEventListener('click', () => {
  state.user.getUsers();
});

selectOptionSectionAllElements.findRide.addEventListener('click', () => {
  showSearchPage()
})


searchForRideSectionAllElements.searchRides.addEventListener("click", () => {
  state.dateOfRide = searchForRideSectionAllElements.dateOfRide.value
  state.startPoint = searchForRideSectionAllElements.startPoint.value
  state.endPoint = searchForRideSectionAllElements.endPoint.value
  showRides(state.data);
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


profileBtn.addEventListener('click', () => {
  showProfilePage(state.foundUser)
})

sideNavFindRideBtn.addEventListener('click', () => {
  showSearchPage()
})

sideNavOfferRideBtn.addEventListener('click', () => {
  showOfferRideSection()
})


aboutAppBtn.addEventListener("click", () => {
  showAboutPage();
})


logOutBtn.addEventListener("click", () => {
  logOut();
})

largeScreenMenu.largeProfile.addEventListener("click", () => {
  showProfilePage(state.foundUser)
})

largeScreenMenu.largeFindRide.addEventListener("click", () => {
  showSearchPage()
})

largeScreenMenu.largeOfferRide.addEventListener("click", () => {
  showOfferRideSection()
})

largeScreenMenu.largeApp.addEventListener("click", () => {
  showAboutPage();
})

largeScreenMenu.largeLogout.addEventListener("click", () => {
  logOut();
})
