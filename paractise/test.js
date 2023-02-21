var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var str = "usman is a beautifull boy";
console.log(str.slice(0, 10));
console.log(str.slice(10, 26));
var arry = ["f", "b", "c"];
console.log(__spreadArray([], arry, true).sort(function (a, b) { return (a.localeCompare(b)); }));
function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
var numbers = ["x", "y", "u"];
bubbleSort(numbers);
console.log(numbers);
