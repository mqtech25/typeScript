let str:string="usman is a beautifull boy";
console.log(str.slice(0,10));
console.log(str.slice(10,26));

let arry:string[]=["f","b","c"];
console.log([...arry].sort((a,b)=>(a.localeCompare(b))));
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
  
  var numbers = ["x","y","u"];
  bubbleSort(numbers);
  console.log(numbers);