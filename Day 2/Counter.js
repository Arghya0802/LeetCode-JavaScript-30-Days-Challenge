
/**
 * @param {number} n
 * @return {Function} counter
 */

// var noOfCalls = 0 ;
var createCounter = function(n) {

    return function() {
        return n++ ;
    };

    // noOfCalls++ ;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Time Complexity:  O(1)
// Space Complexity: O(1)
