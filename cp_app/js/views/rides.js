const showRides = (data) => {
    searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
      console.log(state.startPoint);
      section3.style.display = "block"
      searchRideResultsSectionAllElements.availableRides.innerHTML = ""
      for (const ride of data) 
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
                        <p>Дестинација: ${ride.startLocation} - ${ride.endLocation} </br> ${ride.time}ч. </br> Контакт Телефон: ${ride.phone}</p></br>
                        <p>${ride.description}</p>
                      </li>
                    </ul>
                  </div>
              </li>`  
        }
    }
    //da se dodade innerHtml za koga nema da najde prevoz
  }