
import Person from "./person";

class Teacher extends Person{
    constructor(name,age,klass=-1){
        super(name,age);
        this.klass=klass;

    }

    introduce(){
        var output=``;
        if(this.klass>=0){
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`;
        }else{
            output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
        }
        
        return output;
    }
}

export default Teacher;

