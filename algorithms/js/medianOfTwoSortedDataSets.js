/**
 * Median of Two Sorted Arrays
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
 /* original leet code solution :
  
var findMedianSortedArrays = function(nums1, nums2) {
    let nums1Len = nums1.length;
    let nums2Len = nums2.length;
    let nums =[];
    let i=0,j=0,k=0;
    //As two arrays are sorted, get them into nums one by one
    while(i < nums1Len && j < nums2Len){
        if(nums1[i] < nums2[j]){
            nums[k]=nums1[i];
            i++;
        }
        else{
           nums[k]=nums2[j]; 
            j++;
        }
        k++;
    }
    // Get remaining numbers
    while(i < nums1.length){
        nums[k]=nums1[i];
        i++;
        k++;
    }
    while(j < nums2.length){
        nums[k]=nums2[j];
        j++;
        k++;
    }
    //Calculate median
    const halfLen = Math.ceil(nums.length/2);
    if(nums.length % 2 === 0){
        return (nums[halfLen-1]+nums[halfLen])/2;
    }
    else{
        return nums[halfLen-1];
    }
};

*/

// Custom comprehensive solutions for practice:

const set1 = [1,2,3,10,20,21];
const set1 = [1,4,6,7];

findMedian = (dataSet1, dataSet2) => {

/* declare the dataset length */
let dataSet1Len = dataSet.length;
let dataSet2Len = dataSet.length;

// TODO: Continue code here...
}



// test cases
console.log(findMedian(set1,set2));
