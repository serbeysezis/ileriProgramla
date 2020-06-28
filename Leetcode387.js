var firstUniqChar = function(s) {
    let seen = {};
    let ignore = {};
    for (let i = 0; i < s.length; i++) {
        if (!ignore.hasOwnProperty(s[i])) {
            if (seen.hasOwnProperty(s[i])) {
                delete seen[s[i]]
                ignore[s[i]] = true;
            } else {
                seen[s[i]] = [i];
            }
        }
    }

    for (let key in seen) {
        return seen[key][0];
    }

    return -1;
};
