
class Person{
    constructor(jud,name,age){
        this.jud=jud;
        this.name=name;
        this.age=age;
    }

    introduce(){
        var output=`My name is ${this.name}. I am ${this.age} years old.`
        return output;
    }
}

export default Person;

