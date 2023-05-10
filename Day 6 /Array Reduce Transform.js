/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) 
{
    if(nums.length == 0)  return init ;

    for(const i in nums)
    {
        const tempAns = fn(init , nums[i]) ;

        init = tempAns ;
    }    

    return init ;
};

// Time Complexity:  O(N)
// Space Complexity: O(1)
