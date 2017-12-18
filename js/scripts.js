/*BACK END LOGIC*/
function Pet(name, breed, age, color, sex, personality, picture) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.sex = sex;
  this.personality = personality;
  this.picture = picture;
  this.adoptionStatus = false;
}



/*FRONT END LOGIC*/

$(document).ready(function(){
  var dog = new Pet("Felipe", ["Dog", "Terrier Mix"], "5 months", ["black", "white"], "male", "energetic", "<img src='img/felipe.jpg' />");
  var cat = new Pet("Alice", ["Cat", "American Short-Hair"], "4 years", ["calico"], "female", "affectionate", "<img src='img/alice.jpg' />");
  var fish = new Pet("Zero", ["Fish", "Betta"], "1 year", ["blue", "red"], "male", "energetic", "<img src='img/zero.jpg' />");

  var petList = [dog, cat, fish];

  for (var i = 0; i<petList.length;i++){
    $(".pets").append("<li>"+ petList[i].picture +"</li>")
  }

  $("#petBar").last().click(function(){
    $(".info").empty();
    $(".info").append($("#petBar").last().name)
  });
});
