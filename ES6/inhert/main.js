class Person {
    // only methods can be defined in class
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    
    getName(){
        return this.name;  
    }
    
    setName(aName){
        this.name = aName;
    }
}

class Child extends Person {
    constructor(name, age, isQuiet){
        super(name, age);
        this.isQuiet = isQuiet;
    }
}

let kass = new Person('Kassen', 47);

kass.setName('kassem ali');
console.log(kass.getName());