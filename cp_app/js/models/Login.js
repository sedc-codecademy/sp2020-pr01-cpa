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
      
      alert("Wrong username or password")
    }
  }

