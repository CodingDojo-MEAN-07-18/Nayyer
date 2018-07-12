//Private variables are scoped to the constructor with the 'var' keyword
function Ninja(name) {
    if (!(this instanceof Ninja)) {
        console.log('I am a not ninja', name);
        return new Ninja(name);
      }
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
        console.log('my name is',this.name);
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

Ninja.prototype.punch = function(target){
    if ((!target) || (target===this))
    { throw new Error ("I am not going to punch in the air or myself")}
   target.health -= 10;
   console.log (this.name,'punched',target.name,'and his health is reduced to',target.health)
   return this;
    }


Ninja.prototype.kick = function(target){
    if  ((!target) || (target===this))
    { throw new Error ("I am not going to kick in the air")}
   target.health -= 15;
   console.log (this.name,'kicked',target.name,'and his health is reduced to',target.health)
   return this;
 
    }   

var turtle = new Ninja('Dell');
var turtle1 = new Ninja('Gates');
turtle1.drinkSake().showStats();
turtle.punch(turtle1).punch(turtle1).kick(turtle1);
turtle.punch(turtle1);

// How can i chain the methods, punch().kick()?  never mind got it! ( by returning this )