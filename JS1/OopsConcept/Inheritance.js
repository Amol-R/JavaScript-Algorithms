

class Animal{
    constructor(name){
        this.name = name
    }

    makeSound(){
        console.log('make some generic sound')
    }
}

class dog extends Animal{

    makesound(){
        console.log('Bhow! Bhow!')
    }
}

class cat extends Animal{
    makesound(){
        console.log("MAow! Maow!")
    }
}

 const mydog = new dog()
 const mycat = new cat()

 mydog.makesound()
 mycat.makesound()