var KASS = (function(){
    // x is private
    var x = 1;
    return {
        getX: function() {
            return x++;
        },
        getHi: function() {
            return 'Hi';
        },
        y: 'y is public member'

    };
    

});
window.KASSEM = KASS();