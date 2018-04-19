function kass(args) {
    var arr = [1,2,3,4];
    //alert(arr +'\n' + args);
    //document.write('this:'+this);
    
    var yas = new Person('Yasmin', 40);
    document.write('<br>'+yas.getName() + ' is ' + yas.getAge());
    
    //document.write('<br>'+Student.getName() + ' is ' + Student.getAge());
    var country = "US_ILD";
    var cpuntyShort = country.substring(0,1);
    
    alert(country +'\n' + country);
 
    
    
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.agePlus = function(pluse) {
        return age+pluse;
    }
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getAge = function(){
    return this.age;
}

Person.sayGreeting = function(greeting){
    return greeting;
}