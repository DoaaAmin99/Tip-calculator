
//Calculation function
function calculation() {
  //declaration
  var mybill = document.getElementById("mybill").value;
  var serviceQuality = document.getElementById("ServiceQuality").value;
  var people = document.getElementById("people").value;
  

  //validate bill amount
  if (mybill === "" || serviceQuality === 0 || mybill<=0) {
      alert("Please enter correct values");
      
    };

  //number of people
  if (people === "" || people <= 0) {
      alert("please enter NUMBER OF PEOPLE")
      return;
      
    }
  
  
  //total tip
  var total = (mybill / people ) *serviceQuality ;
  document.getElementById("result").innerHTML = total;
}

//calling the Calculation function
document.getElementById("claculate").onclick = function() {
  calculation();
};
