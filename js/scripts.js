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
var dog = new Pet("Felipe", ["Dog", "Terrier Mix"], "5 months", ["black", "white"], "male", "energetic", "<img src='img/felipe.jpg' />");

var cat = new Pet("Alice", ["Cat", "American Short-Hair"], "4 years", ["calico"], "female", "affectionate", "<img src='img/alice.jpg' />");

var fish = new Pet("Zero", ["Fish", "Betta"], "1 year", ["blue", "red"], "male", "energetic", "<img src='img/zero.jpg' />");
