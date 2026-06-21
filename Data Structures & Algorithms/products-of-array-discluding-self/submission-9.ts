class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let isZeroPresent = false;

        const product = nums.reduce((acc, curr) => {

            if (curr === 0) {

                if (isZeroPresent) {
                    return 0;
                }
                isZeroPresent = true;
                return acc * 1;
            }
            return acc * curr;
        }, 1);

        return nums.map((num) =>
            product === 0 ? 0 : isZeroPresent ? (num === 0 ? product : 0) : product / num,
        );
    }
}
