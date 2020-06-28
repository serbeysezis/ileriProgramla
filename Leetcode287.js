var findDuplicate = function(nums) {
    let low = 1
    let high = nums.length - 1
    
    while (low < high){
        let count = 0
        const mid = low + (high-low) / 2
        for (let num of nums){
            if (num<=mid){
                count++
            }
        }
        if (count <= mid){
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return Math.floor(low)

};
