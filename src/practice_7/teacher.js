
import Person from "./person";

class Teacher extends Person{
    constructor(name,age,klass=null){
        super(name,age);
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

    introduceWith(object){
        var output=``;
        if(this.klass!=null){
            if(this.klass.number==object.klass.number){
                output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${object.name}.`;
            }else{
                output=`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${object.name}.`;
            }
        }
        return output;
        
    }
}

export default Teacher;


