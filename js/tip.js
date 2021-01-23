
// //Calculation function
// function calculation() {
//   //declaration
//   var mybill = document.getElementById("mybill").value;
//   var serviceQuality = document.getElementById("ServiceQuality").value;
//   var people = document.getElementById("people").value;
  

//   //validate bill amount
//   if (mybill === "" || serviceQuality === 0 || mybill<=0) {
//       alert("Please enter correct values");
      
//     };

//   //number of people
//   if (people === "" || people <= 0) {
//       alert("please enter NUMBER OF PEOPLE")
//       return;
      
//     }
  
  
//   //total tip
//   var total = (mybill / people ) *serviceQuality ;
//   document.getElementById("result").innerHTML = total;
// }

// //calling the Calculation function
// document.getElementById("claculate").onclick = function() {
//   calculation();
// };

//Using OOP

var mybill = document.getElementById("mybill");
var serviceQuality = document.getElementById("ServiceQuality");
var people = document.getElementById("people");
class Tip{
  //constructor function
  constructor(mybill,serviceQuality,people){
    this.mybill=mybill;
    this.serviceQuality=serviceQuality;
    this.people=people;
  }
  //calculation function
  calculation(){
    //validate bill amount
    if(this.mybill === "" || this.mybill<=0){
      alert("Please enter correct values");
    };
    //number of people
    if(this.people === "" || this.people<=0){
      alert("please enter NUMBER OF PEOPLE")
      return;
    };
    //  total tip
    var total=((this.mybill/this.people)*this.serviceQuality)
    document.getElementById("result").innerHTML=total;

  }
}
var tip = new Tip(mybill.value,serviceQuality.value,people.vlaue);
document.getElementById("claculate").onclick = function() {
   tip.calculation();
  };
