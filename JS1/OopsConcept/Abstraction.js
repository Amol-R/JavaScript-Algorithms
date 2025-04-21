
class car{
    #engineStatus = false

    Status(){
        this.#engineStatus = true
        console.log('Engine start')
    }
}

    const myCar = new car()

    myCar.Status()

    // console.log(myCar.#engineStatus)