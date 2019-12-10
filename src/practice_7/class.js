class Class{
    constructor(number){
        this.number=number;
    }

    getDisplayName(){
        var output=`Class ${this.number}`;
        return output;
    }
}

export default Class;