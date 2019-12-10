
import Person from "./person";

class Teacher extends Person{
    constructor(jud,name,age,klass=null){
        super(jud,name,age);
        this.klass=klass;

    }

    introduce(){
        var output=``;
        if(this.klass!=null){
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass.number}.`;
        }else{
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
        }
        return output;
    }
}

export default Teacher;


