import Person from "./person";

class Student extends Person{
    constructor(jud,name,age,klass=null){
        super(jud,name,age);
        this.klass=klass;
    }

    introduce(){
        var output=``;
        
        if(this.klass!=null){
            if(this.klass.leader==this){
                output=`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${this.klass.number}.`;   
            }else{
                output=`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass.number}.`; 
            }
            
        }
        return output;
    }
}

export default Student;



