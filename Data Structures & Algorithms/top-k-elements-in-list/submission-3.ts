class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map;

        nums.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));

        return Array.from(map)
            .map((value) => ({ num: value[0], count: value[1] }))
            .sort((a, b) => b.count - a.count)
            .slice(0, k)
            .map((item) => item.num);
    }
}
