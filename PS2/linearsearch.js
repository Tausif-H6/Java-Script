


let linearSearch = (arr, x) => {
    const length= arr.length;
    for (let i = 0; i < length; i++) {

        if (arr[i] === x) {
            return i;
        }

    }

    return "Not found";
}



console.log(linearSearch(['a','b','c'],'z'));