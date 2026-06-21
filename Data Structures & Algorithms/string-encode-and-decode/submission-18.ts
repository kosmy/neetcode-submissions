class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // console.log('str', str)
        const strs = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            
            while (str[j] !== '#') {
                j++
            }
                const length = Number(str.slice(i, j));
                const word = str.slice(j + 1, j + 1 + length)
                strs.push(word);
                i = j + 1 + length;
        }

        return strs
    }
}
