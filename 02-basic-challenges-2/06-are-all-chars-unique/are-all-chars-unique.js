function areAllCharactersUnique(arr) {
    let counter;
    let isUnique = true;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.charAt(i));
        if(arr.includes(arr[i])) {
            counter ++;
        }
        if (counter > 1) {
            isUnique = false;
        }
    }
    return isUnique;
}

module.exports = areAllCharactersUnique;
