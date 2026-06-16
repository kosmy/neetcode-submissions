class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        const result = [];

        nums.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));

        const buckets = Array(nums.length + 1)
            .fill(0)
            .map(() => []);

        Array.from(map).forEach(([number, count]) => {
            buckets[count] = [...buckets[count], number];
        });

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
