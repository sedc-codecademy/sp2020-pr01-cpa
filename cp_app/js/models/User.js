class User {
  constructor( ){ }
 
  getUsers = async() => {
    let response = await fetch(`https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-mitev/cp_app/data.json`);
     
    state.data = await response.json();

    state.foundUser = state.data.filter(user => user.email === singInSectionAllElements.emailInput.value && user.password == singInSectionAllElements.passwordInput.value)

    showSelectOptionPage(state.foundUser)
  }

  registerUser = () => {
    this.firstName = registerSectionAllElements.registerFirstName.value;
    this.lastName = registerSectionAllElements.registerLastName.value;
    this.password = registerSectionAllElements.registerPassword.value;
    this.phone = registerSectionAllElements.registerPhone.value;
    this.email = registerSectionAllElements.registerEmail.value;   
      
    showHomepage();
    
  }

}



