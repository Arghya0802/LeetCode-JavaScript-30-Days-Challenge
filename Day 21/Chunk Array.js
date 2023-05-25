/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) 
{
    var chunkedArray = [] ;

    var ind = 0 ;
    var subArray = [] ;

    while(ind < arr.length) 
    {
        subArray.push(arr[ind]) ;
        ind++ ;
        
        if(ind % size == 0)  
        {
            chunkedArray.push(subArray) ;

            subArray = [] ;
        }
    }   

    if(subArray.length > 0)  chunkedArray.push(subArray) ;

    return chunkedArray ;
};

// Time Complexity:  O(N)
// Space Complexity: O(N)
