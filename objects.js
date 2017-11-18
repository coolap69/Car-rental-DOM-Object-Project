var rental = {
name: "Enterprise Rent A Car",
allCars: 270,
allCarsBooked: 0,
economyCars: 90,
economyCarsBooked: 0,
midsizeCars: 180,
midsizeCarsBooked: 0,
// carClass: ["Economy", "Midsize"],
rentMid: function() {
   document.getElementById("midszAvail").innerHTML = --this.midsizeCars;
},
bookedMid: function() {
   document.getElementById("econAvail").innerHTML = ++this.midsizeCarsBooked;
},

rentEcon: function() {
   document.getElementById("econAvail").innerHTML = --this.economyCars;
},

rentAll: function() {
   document.getElementById("allca").innerHTML = --this.allCars;
},

bookedAll: function() {
   document.getElementById("allca").innerHTML = ++this.allCars;
}
};

function updateAvail() {
   document.getElementById("midszAvail").innerHTML = rental.midsizeCars;
   document.getElementById("econAvail").innerHTML = rental.economyCars;
   document.getElementById("allca").innerHTML = rental.allCars;
   // document.getElementById("allca").innerHTML = rental.allCars;

}

function staticValues() {
   document.getElementById("name").innerHTML = rental.name;
   document.getElementById("econ").innerHTML = rental.carClass[0];
   document.getElementById("midsz").innerHTML = rental.carClass[1];
   document.getElementById("allca").innerHTML = rental.allCars;
}

function typesOfCars() {
   document.getElementById("Accent").innerHTML = "#10, $50 per day";
}

document.getElementById("Accent").onclick = function(){typesOfCars()};


// function myFunction() {
//     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
