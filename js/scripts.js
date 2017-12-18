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

  $(".pets").click(function() {
    selectPet = this.id;
    $("#pets li").removeClass("border");
    $("#petBar").find("#" + this.id).addClass("border");
    $("#picture").empty();
    $("#name").text(petList[selectPet - 1].name);
    $("#breed").text(petList[selectPet - 1].breed.join(": "));
    $("#age").text(petList[selectPet - 1].age);
    $("#color").text(petList[selectPet - 1].color.join(", "));
    $("#sex").text(petList[selectPet - 1].sex);
    $("#personality").text(petList[selectPet - 1].personality);
    $("#adoptionStatus").text(petList[selectPet - 1].adoptionStatus);
  }); // End of '.pets' click event.

  // Adoption status toggle.
  //ONLY FUNCTIONAL FOR SINGLE ANIMAL, NEEDS TO BE APPLICABLE TO ANY ANIMAL 'CLICKED' ON.
  $("#edit-adoption-status").last().click(function() {
    petList[selectPet - 1].adoptionUpdate();
    $("#adoptionStatus").text(petList[selectPet - 1].adoptionStatus);
  });

  $("#new-pet").click(function(){
    $("#new-pet-form").show();
  })

  $("#new-pet-form").submit(function(event){
    event.preventDefault();
    var name = $("input#new-name").val();
    var breed = $("input#new-breed").val().split(" ");
    var age = $("input#new-age").val();
    var color = $("input#new-color").val().split(" ");
    var sex = $("input#new-sex").val();
    var personality = $("input#new-personality").val();
    var picture = $("input#new-picture").val().replace("C:\\fakepath\\", "<img src=img/") + ">";
    var newPet = new Pet(name, breed, age, color, sex, personality, picture);
    $("#pets").append("<li class='pets' id=" + petList[petList.length - 1].id + ">" + petList[petList.length - 1].picture + "</li>")
    $("#new-pet-form").hide();
    $(".pets").click(function() {
      selectPet = this.id;
      $("#pets li").removeClass("border");
      $("#petBar").find("#" + this.id).addClass("border");
      $("#picture").empty();
      $("#name").text(petList[selectPet - 1].name);
      $("#breed").text(petList[selectPet - 1].breed);
      $("#age").text(petList[selectPet - 1].age);
      $("#color").text(petList[selectPet - 1].color);
      $("#sex").text(petList[selectPet - 1].sex);
      $("#personality").text(petList[selectPet - 1].personality);
      $("#adoptionStatus").text(petList[selectPet - 1].adoptionStatus);
    });
  })
   // End of the 'adoption status' toggle.
}); // End of the document 'ready' listener.
