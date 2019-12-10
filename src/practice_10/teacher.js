
import Person from "./person";

class Teacher extends Person{
    constructor(jud,name,age,klasses=null){
        super(jud,name,age);
        this.klasses=klasses;

    }

    introduce(){
        var output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
        
        if(this.klasses!=null){
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klasses[0].number}, ${this.klasses[1].number}.`;
        }
        return output;
    }
}

export default Teacher;


