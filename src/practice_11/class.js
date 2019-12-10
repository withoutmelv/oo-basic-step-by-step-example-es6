import Teacher from "./teacher";
class Class{
    constructor(number,leader=null,master=null){
        this.number=number;
        this.leader=leader;
        this.master=new Teacher();
        this.looker=new Teacher();
    }

    getDisplayName(){
        var output=`Class ${this.number}`;
        return output;
    }

    assignLeader(object){
        if(this.number==object.klass.number){
            this.leader=object;
            console.log(`I am ${this.master.name}. I know ${object.name} become Leader of Class ${object.klass.number}.`);
        }else{
            console.log('It is not one of us.');
        }   
    }

    appendMember(object){
        object.klass=this;
        console.log(`I am ${this.looker.name}. I know ${object.name} has joined Class ${object.klass.number}.`);
    }

    registerAssignLeaderListener(object){
        if(object.klasses[0].number==this.number||
            object.klasses[1].number==this.number){
                this.master=object;
            }
    }

    registerJoinListener(object){
        if(object.klasses[0].number==this.number||
            object.klasses[1].number==this.number){
                this.looker=object;
            }
    }
}

export default Class;