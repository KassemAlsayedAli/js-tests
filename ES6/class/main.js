class Person {
    // only methods can be defined in class
    constructor (name, age, count){
        this.name = name;
        this.age = age;
        this.count = count; // closure var
    }
    

    getName(){
        return this.name + " -> "+ this.count++; //closure fun    
    }
    
    setName(aName){
        this.name = aName;
    }
}

let kass = new Person('Kassen', '47', 0);

kass.setName('kassem ali');
console.log(kass.getName());