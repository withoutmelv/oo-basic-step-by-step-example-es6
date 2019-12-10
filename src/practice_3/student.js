import Person from "./person";

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        var output=`I am a Student. I am at Class ${this.klass}.`;
        return output;
    }
}

export default Student;
