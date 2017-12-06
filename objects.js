var cars = {
   type: [{

         model: "Choose",
         available: "",
         booked: "",
         price: "",
      },
      {

         model: "Economy",
         available: 30,
         booked: 0,
         price: "$60",
      },

      {
         model: "Midsize",
         available: 20,
         booked: 0,
         price: "$80",
      },

      {
         model: "Luxury",
         available: 10,
         booked: 0,
         price: "$120",
      }
   ]
};

for (var i = 0; i < cars.type.length; i++) {
   var options = document.createElement("OPTION");
   options.innerHTML = cars.type[i].model;
   document.getElementById("optionTags").appendChild(options);

   options.setAttribute("value", i);
   document.getElementById("available").innerHTML = cars.type[0].available;
   document.getElementById("price").innerHTML = cars.type[0].price;
}


document.getElementById("optionTags").onchange = function() {
   var val = document.getElementById("optionTags").value
   val = parseInt(val)
   document.getElementById("available").innerHTML = cars.type[val].available;
   document.getElementById("price").innerHTML = cars.type[val].price;

}

// function rent() {
//    var renterName = document.getElementById("fname").value;
//    var typeCar = document.getElementById("optionTags") cars.type[].;

// }

document.getElementById("rentCar").onsubmit = function(event) {
   // console.log ("submit")
   event.preventDefault();

}
