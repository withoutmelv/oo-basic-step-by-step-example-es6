class Class{
    constructor(number,leader=null){
        this.number=number;
        this.leader=leader;
    }

    getDisplayName(){
        var output=`Class ${this.number}`;
        return output;
    }

    assignLeader(object){
        if(this.number==object.klass.number){
            this.leader=object;
        }
        
    }
}

export default Class;