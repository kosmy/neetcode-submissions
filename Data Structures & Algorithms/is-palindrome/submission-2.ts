class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = "";

        for (let i = 0; i < s.length; i++) {
            if (s[i].match(/[A-Za-z0-9]/)) {
                str = `${str}${s[i].toLowerCase()}`;
            }
        }

        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
