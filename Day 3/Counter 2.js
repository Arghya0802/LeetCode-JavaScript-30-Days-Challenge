var createCounter = function(init) 
{
    var cnt = init ;
    
    const increment = () => {
        cnt++ ;
        return cnt ;
    }    

    const decrement = () => {
        cnt-- ;
        return cnt ;
    }

    const reset = () => {
        cnt = init ;
        return cnt ;
    }

    return {increment , decrement , reset} ;
};

// Time Complexity:  O(1) 
// Space Complexity: O(1)
