
import Person from "./person";

class Worker extends Person{
    constructor(name,age){
        super(name,age);

    }

    introduce(){
        var output=`My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
        return output;
    }
}

export default Worker;
