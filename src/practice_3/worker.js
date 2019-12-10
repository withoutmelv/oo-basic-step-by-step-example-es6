import Person from "./person";

class Worker extends Person{
    constructor(name,age){
        super(name,age);

    }

    introduce(){
        var output=`I am a Worker. I have a job.`;
        return output;
    }
}

export default Worker;
