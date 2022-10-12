// solution 1
// e.g. arr =[5,6,3,8,1], a=3, b=8
// the function should return "True" since 3 and 8 are consecutive in the array

function consecutive(arr, a, b) {
    let opst = [a + "" + b, b + "" + a]; //join a and b into a string, i.e. opst = ["38","83"]
    let result; //initialize a variable called "result"

    // in a loop, starting from the first element till the second last element of the input arr
    for (let i = 0; i < arr.length - 1; i++) {
        const win = [arr[i], arr[i+1]].join(""); // join the current and subsequent elements into a string, e.g the first iteration would produce win = "56"
        const match = opst.indexOf(win) !== -1; // check the index of win in opst, if win does not exist, then its index will be -1. Return match = true if the index exists

        if (match) {
            result = match;  //if there is a match, break out of the loop and return true   
            break; 
        } else {
            if (result !== true) {
                result = match; //if there is no match, the current result is false, continue with the next iteration of the loop
            }
        }
    }
    return result; // return the result: true or false
}



// solution 2

// if a and b are consecutive, that means the absolute difference between their index is 1
// e.g. arr =[5,6,3,8,1], a=3, b=8
// a=3 has index 2 in arr while b=8 has index 3 in arr, so absolute value of (2-3) = 1
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a)-arr.indexOf(b)) == 1;
}