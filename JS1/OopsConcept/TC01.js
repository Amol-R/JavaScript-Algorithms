

   class Animal{
    constructor(name){
        this.name = name
    }
       makesound(){
        console.log('make some generic sound')
       }

   }

   class Dog extends Animal{
       makesound(){
        console.log('Bhow! Bhow!')
       }
   }

   class cat extends Animal{
    makesound(){
        console.log('Maow! Maow!')
       }
   }

   const mydog = new Dog()
   const mycat = new cat()

   mydog.makesound()
   mycat.makesound()