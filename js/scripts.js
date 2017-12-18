/*BACK END LOGIC*/
var petList = [];
var selectPet;

function Pet(name, breed, age, color, sex, personality, picture) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.sex = sex;
  this.personality = personality;
  this.picture = picture;
  this.adoptionStatus = false;
  petList.push(this);
  this.id = petList.length; //maybe useful?
}

Pet.prototype.adoptionUpdate = function () {
  if (this.adoptionStatus === true) {
    this.adoptionStatus = false;
  } else if (this.adoptionStatus === false) {
    this.adoptionStatus = true;
  } else {
    return "Error! You broke the internet! (and the adoption status was NOT updated)"
  }
};

/*FRONT END LOGIC*/
$(document).ready(function(){
  var dog = new Pet ("Felipe", ["Dog", "Terrier Mix"], "5 months", ["black", "white"], "male", "energetic", "<img src='img/felipe.jpg' />");
  var cat = new Pet ("Alice", ["Cat", "American Short-Hair"], "4 years", ["calico"], "female", "affectionate", "<img src='img/alice.jpg' />");
  var fish = new Pet ("Zero", ["Fish", "Betta"], "1 year", ["blue", "red"], "male", "energetic", "<img src='img/zero.jpg' />");

  for (var i = 0; i<petList.length;i++){
    $("#pets").append("<li class='pets' id=" + petList[i].id + ">"+ petList[i].picture +"</li>")
  }


  // Adoption status toggle.
  $("#edit-adoption-status").last().click(function() {
    petList[selectPet - 1].adoptionUpdate();
    $("#adoptionStatus").text(petList[selectPet - 1].adoptionStatus);
  }); // End of the 'adoption status' toggle.

  $(".adoptFilter").change(function(){
    var select = $(".adoptFilter").val();

    $(".pets li").removeClass("hide");
    for (var i = 0; i<petList.length;i++){
      var animal = petList[i];
      if(select === "all"){
        // $("#pets").append("<li class='pets' id=" + petList[i].id + ">"+ petList[i].picture +"</li>")
      } else if ((animal.adoptionStatus === false)){
        if (select === "adopted"){
          $("#"+animal.id).addClass("hide");
          //do nothing
        } else if (select === "notAdopted"){
          continue;
          // $("#pets").append("<li class='pets' id=" + petList[i].id + ">"+ petList[i].picture +"</li>")
          //post
        }
      } else if ((animal.adoptionStatus === true)) {
        if (select === "adopted"){
          continue;
          // $("#pets").append("<li class='pets' id=" + petList[i].id + ">"+ petList[i].picture +"</li>")
          //post
        } else if (select === "notAdopted"){
          $("#"+animal.id).addClass("hide");          //do nothing
        }
      }else {
        console.log("Something Broke!");
      }
    }
  });

  $(".pets").click(function() {
    selectPet = this.id;
    console.log(selectPet);
    $("#picture").empty();
    $("#name").text(petList[selectPet - 1].name);
    $("#breed").text(petList[selectPet - 1].breed);
    $("#age").text(petList[selectPet - 1].age);
    $("#color").text(petList[selectPet - 1].color);
    $("#sex").text(petList[selectPet - 1].sex);
    $("#personality").text(petList[selectPet - 1].personality);
    $("#adoptionStatus").text(petList[selectPet - 1].adoptionStatus);
  }); // End of '.pets' click event.
}); // End of the document 'ready' listener.
