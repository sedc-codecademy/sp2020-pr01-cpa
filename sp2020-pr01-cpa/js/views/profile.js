const showProfilePage = (data) => {
    state.page = "profile"
    profileSection.style.display = 'block'
    offerRideSection.style.display = 'none'
    searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
    selectOptionSectionAllElements.selectOptionSection.style.display = 'none'
    searchRideResultsSectionAllElements.searchRideResultsSection.style.display = 'none'
    headerSectionAllElements.headerSection.style.display = "none";
  
    profileForm.innerHTML = "";
    for (const user of data) {
      profileForm.innerHTML += ` 
    <div class="input-field" >
      <i class="material-icons prefix">account_box</i>
      <input type="text" id="name" value="${user.firstName}">
      <label class="active" for="name">Име</label>
    </div>
    <div class="input-field">
      <i class="material-icons prefix">account_box</i>
      <input type="text" id="lastName" value="${user.lastName}">
      <label class="active" for="lastName">Презиме</label>
    </div>
    <div class="input-field">
      <i class="material-icons prefix">smartphone</i>
      <input type="text" id="mobile" value="${user.phone}">
      <label class="active" for="mobile">Телефонски број</label>
    </div>
    <div class="input-field">
      <i class="material-icons prefix">email</i>
      <input type="email" id="e-mail" value="${user.email}">
      <label class="active" for="e-mail">Е-пошта</label>
    </div>
    <div class="input-field center submit-btns">
      <button class="btn light-blue accent-4 back-btn" id="signIn">Зачувај измени</button>
    </div>`
    }
  
  
  }
  
  