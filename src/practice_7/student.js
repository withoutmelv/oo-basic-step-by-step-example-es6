import Person from "./person";

class Student extends Person{
    constructor(name,age,klass=null){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        var output=``;
        if(this.klass!=null){
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass.number}.`;
        }
        return output;
    }
}

export default Student;



