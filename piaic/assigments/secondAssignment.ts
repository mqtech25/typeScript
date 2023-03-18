let arry: any[] = [2, 3, 5, 6, 7];
// arry.splice(1,2)
// arry.splice(1)
// console.log(arry,"test")
spliceFuc(arry, 1, 2);

function spliceFuc(
  arr: any[],
  index1?: number,
  index2?: number,
  ...restPara: any
) {
  // console.log(arr,index1,index2,typeof(restPara[0]))
  if (typeof arr == "undefined" && typeof restPara == "undefined") {
    return;
  } else if (arr && index1 && typeof index2 == "undefined" && restPara == "") {
    console.log("Test1");
    let x: any[] = [];
    for (let i = 0; i < index1; i++) {
      if (arr[i] != undefined) {
        x.push(arr[i]);
      }
    }
    console.log(x);
  } else if (arr && index1 && index2) {
    console.log("Test2", index1, index2);

    let x: any[] = [];
    let newArr: any[] = [];
    for (let i = index1; i <= index2; i++) {
      if (arr[i] != undefined) {
        x.push(arr[i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      var match = false;
      for (let j = 0; j < x.length; j++) {
        //  if(x[j]!=arr[i]){
        //     newArr.push(arr[i])
        // }
        if (x[j] == arr[i]) {
          match = true;
          break;
        }
      }
      if (!match) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  }
}
