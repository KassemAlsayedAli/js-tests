/**
 * js module  - cartTotaler is a global var
 * created at page load time
 *
 * kass - this is a singlton pattern
 *
 */
var cartTotaler = (function () {  
    var total = 0;
    var tax = 0.05;
    var items = [];
    
    function add(a, b) {
        return a + b;
    }
    
    // other code  
  
    return {  
      add : function (item) {items.push(item); },  
      remove : function (item) {return items.pop(); },  
      calculateTitle : function () { return items.reduce(add, 0); }  
    };  
}());


/**
 * js module  - cartTotaler1 is created by its client - can be many instances as needed
 *
 */
function cartTotaler1 () {  
    var total = 0;
    var tax = 0.05;
    var items = [];
    
    function add(a, b) {
        return a + b;
    }
    
    // other code  
  
    return {  
      add : function (item) {items.push(item); },  
      remove : function (item) {return items.pop(); },  
      calculateTitle : function () { return items.reduce(add, 0); }  
    };  
}; 