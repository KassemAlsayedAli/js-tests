'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
    // only methods can be defined in class

    function Person(name, age, count) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.count = count; // closure var
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            return this.name + " -> " + this.count++; //closure fun  
        }
    }, {
        key: 'setName',
        value: function setName(aName) {
            this.name = aName;
        }
    }]);

    return Person;
})();

var kass = new Person('Kassen', '47', 0);

kass.setName('kassem ali');
console.log(kass.getName());
