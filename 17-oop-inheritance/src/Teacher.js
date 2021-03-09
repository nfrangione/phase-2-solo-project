class Teacher extends Person{
    constructor(firstName, lastName, age, height, phase){
        super(firstName, lastName, age, height) 
        this.phase = phase
     }
     switchPhase(phase){
         this.phase = phase
     }
}