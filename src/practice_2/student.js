class Student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }

    introduce(){
        var output=`I am a Student. I am at Class ${this.klass}.`;
        return output;
    }
}

export default Student;