const showRides = (data) => {
    searchForRideSectionAllElements.searchForRideSection.style.display = 'none'
      console.log(state.startPoint);
      section3.style.display = "block"
      searchRideResultsSectionAllElements.availableRides.innerHTML = ""
      for (const ride of data) //javuva error no raboti
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
                        <p>${ride.startLocation} - ${ride.endLocation} </br> ${ride.time}ч. </br> Слободни места: ${ride.freeSeats}</p></br>
                        <p>Има место за багаж, кола тип авант.</p>
                        <p>
                          <label>
                            <input type="checkbox" checked="checked" disabled="disabled" />
                            <span>Брзо возење</span>
                          </label>
                          <label>
                            <input type="checkbox" checked="checked" disabled="disabled" />
                            <span>Со пауза</span>
                          </label>
                          <label>
                            <input type="checkbox" checked="checked" disabled="disabled" />
                            <span>Климатизирано</span>
                          </label>
                        </p>
                        <a class="btn-small waves-effect waves-light light-blue accent-4">Резервирај</a>
                      </li>
                    </ul>
                  </div>
              </li>`  
        }
    }
    //da se dodade innerHtml za koga nema da najde prevoz
  }