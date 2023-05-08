/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) 
{
    const res = new Array(arr.length) ;

    for(const i in arr)
    {
        const num = Number(i) ;
        res[i] = fn(arr[i] , num) ;
    }    

    return res ;
};

// Time Complexity:  O(N)
// Space Complexity: O(1)
