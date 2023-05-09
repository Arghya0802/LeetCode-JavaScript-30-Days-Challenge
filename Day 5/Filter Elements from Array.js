/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) 
{
    const res = [] ;

    for(const i in arr)
    {
        var num = Number(i) ;

        if(fn(arr[i] , num))  res.push(arr[i]) ;
    }   

    return res ;
};

// Time Complexity:  O(N) 
// Space Complexity: O(N)
