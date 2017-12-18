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
var dog = new Pet("Felipe", ["Dog", "Terrier Mix"], "5 months", ["black", "white"], "male", "energetic", "'<img src='img/felipe.jpg></img>'");

var cat = new Pet("Alice", ["Cat", "American Short-Hair"], "4 years", ["calico"], "female", "affectionate", "'<img src='img/alice.jpg></img>'");

var fish = new Pet("Zero", ["Fish", "Betta"], "1 year", ["blue", "red"], "male", "energetic", "'<img src='img/zero.jpg></img>'");
