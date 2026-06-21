class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let leftProduct = 1;
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i];
            console.log("result", result);
        }

        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
            console.log("result 2", result);

        return result;
    }
}
