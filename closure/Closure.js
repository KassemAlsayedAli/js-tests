var KassModule = (function() {
    "use strict";
    
    // private
    //------------------------------
    var count = 0;
    var incCount = function() {
        return  count++;
    };

    //public interface
    // ---------------------------
    return {
        incCount: incCount
    };
})(); // singleton
