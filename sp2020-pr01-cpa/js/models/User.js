class User {
  constructor( ){ }
 
  getUsers = async() => {
    let response = await fetch(`https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr01-cpa/ivan-mitev/cp_app/data.json`);
     
    state.data = await response.json();

    state.foundUser = state.data.filter(user => user.email === singInSectionAllElements.emailInput.value && user.password == singInSectionAllElements.passwordInput.value)
    if(state.foundUser.length === 0){
      alert("Wrong username or password")
    }else{

      showSelectOptionPage(state.foundUser)
    }
  }

  registerUser = () => {
    this.firstName = registerSectionAllElements.registerFirstName.value;
    this.lastName = registerSectionAllElements.registerLastName.value;
    this.password = registerSectionAllElements.registerPassword.value;
    this.phone = registerSectionAllElements.registerPhone.value;
    this.email = registerSectionAllElements.registerEmail.value;   
    
    if (state.user.firstName == "" || state.user.lastName == "" || state.user.password == ""|| state.user.phone == ""|| state.user.email == "") {
      alert("All fields are mandatory ")
    } else{

      showHomepage();
      state.page = "home"
    }
    
  }

}



