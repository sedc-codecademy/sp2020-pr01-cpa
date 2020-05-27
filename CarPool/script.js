let headerSection = document.getElementById("header")
let homeSection = document.getElementById("homeSection");
let signInSection = document.querySelector(".signIn-section");
let registerSection = document.querySelector(".register-section");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section6 = document.getElementById("section6");
let section7 = document.getElementById("profile");
let profileBtn = document.getElementById("profileBtn");
let aboutApp = document.getElementById("aboutApp");

let aboutAppBtn = document.getElementById("aboutAppBtn");


let newMenu = document.querySelector(".newMenu");

let loginBtn = document.getElementById("log-in-btn");
let registerBtn = document.getElementById("register-btn");
let signIn = document.getElementById("signIn");
let findRide = document.getElementById("find-ride");
let searchRides = document.getElementById("searchRides");
let offerRide = document.getElementById("offer-ride");
let sideNavFindRide = document.getElementById("sideNavFindRide");
let sideNavOfferRide = document.getElementById("sideNavOfferRide");
let dateOfRide = document.getElementById("date");
let startPoint = document.getElementById("start-point");
let endPoint = document.getElementById("end-point");

loginBtn.addEventListener("click", () => {
    headerSection.style.display = "none";
    homeSection.style.display = "none";
    registerSection.style.display = "none"
    newMenu.style.display = "none";
    signInSection.style.display = "block"
    newMenu.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";
        
});

registerBtn.addEventListener("click", () => {
    headerSection.style.display = "none";
    homeSection.style.display = "none";
    registerSection.style.display = "block"
    newMenu.style.display = "none";
    signInSection.style.display = "none"
    newMenu.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";
})

signIn.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";
});

findRide.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";
})

sideNavFindRide.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";
})

const searchData = async() => {
    state.sectionNumber = 4
    section2.style.display = "none";
    section4.style.display = "block";
    let res = await fetch('https://github.com/sedc-codecademy/sp2020-pr01-cpa/blob/ivan-mitev/data.json')
    let data =  await res.json()
    showRides(data)
    }
const showRides = (data) => {
    availableRidesInfo.innerHTML = ""
    for (const ride of data) {  
      if(startPoint === ride.startLocation && endPoint=== ride.endLocation && dateOfRide === ride.date){
          
           availableRidesInfo.innerHTML += 
           `<div class="col s12">
           <ul class="collapsible">
             <li>
               <div class="collapsible-header collection-item avatar"><img src= "${ride.picture}" alt="" class="circle"
                   style="width: 40px;">
                 <p class="name">${ride.firstName} ${ride.lastName}</p> <br>
               </div>
               <div class="collapsible-body">
                 <ul>
                   <li class="collection-item">
                     <p>"${ride.startLocation}" - "${ride.endLocation}" </br> "${ride.time}" </br> Слободни места: "${ride.freeSeats}"</p></br>
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
                     <a href="#" class="btn-small waves-effect waves-light light-blue accent-4">Резервирај</a>
                   </li>
                 </ul>
               </div>
             </li>`
      }else {
          console.log('err');  
      }
  }
findRide.addEventListener("click", searchData);
searchRides.addEventListener("click", showRides(data)); 

// searchRides.addEventListener("click",() => {
//     searchData();
//     DOMElements.availableRidesInfo.innerHTML = ""
//     for (const ride of data) {  
//       if(state.startCity === ride.startLocation && state.endCity=== ride.endLocation){
//           console.log(state.startCity);
//           console.log(state.endCity);
//            DOMElements.availableRidesInfo.innerHTML += 
//            `<div class="available-rides-info" onclick="showDriverCart(${ride.id})">
//                 <button class="btn available-rides-name available-rides">${ride.firstName} ${ride.lastName}</button>
//                 <button class="btn available-rides-time available-rides">${ride.time}</button>
//                 <button class="btn available-rides-free-seats available-rides">${ride.freeSeats}</button>
//             </div>`
//       }else {
//           console.log('err');  
//       }

    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "none";


})



offerRide.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "block";
    section7.style.display = "none";
    aboutApp.style.display = "none";
})

sideNavOfferRide.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "block";
    section7.style.display = "none";
    aboutApp.style.display = "none";
})

profileBtn.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "block";
    aboutApp.style.display = "none";
})


aboutAppBtn.addEventListener("click", () => {
    signInSection.style.display = "none";
    section1.style.display = "block";
    headerSection.style.display = "block";
    newMenu.style.display = "block";
    homeSection.style.display = "none";
    registerSection.style.display = "none";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    aboutApp.style.display = "block";
})

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.datepicker').datepicker({
        format: 'dd-m-yyyy'
    });
    $('input.autocomplete-start').autocomplete({
        data: {
            "Skopje": null, "Veles": null, "Demir Kapija": null, "Kavadarci": null, "Negotino": null, "Sveti Nikole": null, "Berovo": null, "Vinica": null, "Kochani": null, "M. Kamenica": null, "Pehchevo": null, "Probishtip": null, "Shtip": null, "Debar": null, "Kichevo": null, "Makedonski Brod": null, "Ohrid": null, "Struga": null, "Bogdanci": null, "Valandovo": null, "Gevgelija": null, "Dojran": null, "Radovish": null, "Strumica": null, "Bitola": null, "Demir Hisar": null, "Krushevo": null, "Prilep": null, "Resen": null, "Gostivar": null, "Tetovo": null, "Kratovo": null, "Kriva Palanka": null, "Kumanovo": null, "Mavrovo": null
        },
        limit: 5,
    });
    $('input.autocomplete-end').autocomplete({
        data: {
            "Skopje": null, "Veles": null, "Demir Kapija": null, "Kavadarci": null, "Negotino": null, "Sveti Nikole": null, "Berovo": null, "Vinica": null, "Kochani": null, "M. Kamenica": null, "Pehchevo": null, "Probishtip": null, "Shtip": null, "Debar": null, "Kichevo": null, "Makedonski Brod": null, "Ohrid": null, "Struga": null, "Bogdanci": null, "Valandovo": null, "Gevgelija": null, "Dojran": null, "Radovish": null, "Strumica": null, "Bitola": null, "Demir Hisar": null, "Krushevo": null, "Prilep": null, "Resen": null, "Gostivar": null, "Tetovo": null, "Kratovo": null, "Kriva Palanka": null, "Kumanovo": null, "Mavrovo": null,
        },
        limit: 5,
    });
    $('.tooltipped').tooltip();
});

//profie image

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
        

  //profile tabs
   //var thishref,thisdataTarget,thisdataTarget;

$(document).ready(function() {
      
    $('ul.tabs').tabs();
       
    var notdefault = '[href*=javascript], #anotherID a';
    var exclusion = ".tabs a, .anotherClass a"; // edit here your exclusion
    //$('a[href^=#]:not('+exclusion+')').on('click', function (e) {
    $('a[href^=#]:not(' + exclusion + ',' + notdefault + '),[data-mdtarget]').on('click', function(e) {
      //$('a[data-tab="tab"],a[data-tabs-to]').on('click', function(e) {
 
      if ($(this).is("a[href^=#]")) {
        thishref = $(this).attr('href').split('#')[1];
        thistarget = thishref;
      } else {
        thisdataTarget = $(this).attr('data-mdtarget');
        thistarget = thisdataTarget;
      }
 
      $('ul.tabs').tabs('select_tab', thistarget);
      console.log(thistarget);
 
    });
 
  });