class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let isZeroPresent = false;

        const product = nums.reduce((acc, curr) => {
            console.log("acc", acc);
            console.log("curr", curr);

            if (curr === 0) {
                console.log("isZeroPresent", isZeroPresent);

                if (isZeroPresent) {
                    return 0;
                }
                isZeroPresent = true;
                return acc * 1;
            }
            return acc * curr;
        }, 1);

        console.log("product", product);

        return nums.map((num) =>
            product === 0 ? 0 : isZeroPresent ? (num === 0 ? product : 0) : product / num,
        );
    }
}
