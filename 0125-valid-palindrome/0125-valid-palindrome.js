/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let right = string.length - 1;
    let left = 0;
    while(left < right){
        if(string[left] !== string[right]){
            return false;
        } 
        left++;
        right--;
    }
    return true;
};