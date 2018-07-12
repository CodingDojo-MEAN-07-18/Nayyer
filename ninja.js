
// Private variables are scoped to the constructor with the 'var' keyword
function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    
    // To make functions private, we scope them to the constructor
 
    this.showStrength = function(){
        return strength;

    }
    this.showSpeed = function(){
        return speed;
    }
    this.showStats = function() {
        //speed1 = 
        console.log('my speed is',this.showSpeed());
        console.log('my health is',this.health);
        console.log('my strength is ', this.showStrength());
      return this;
    }
}    
Ninja.prototype.drinkSake = function(){
       this.health += 10;
       return this;
   }


Ninja.prototype.sayName = function(){
    
        console.log('My name is ',this.name);
  


}
var turtle = new Ninja('turtle');
turtle.drinkSake().showStats();


