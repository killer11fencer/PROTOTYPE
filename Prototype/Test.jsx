// write a function that combines two strings and whatever string is longer adds it to the end of the string.
// every other letter
function combine (a,b) {
    let arr1 = a.split('')
    let arr2 = b.split('')
    let arr3 = arr1.map((letter,i)=>{
        if(i < arr2.length) {
        return arr1[i] + arr2[i]}
    })
    if(arr2.length > arr1.length) {
      let arr4 = arr2.slice(arr1.length,arr2.length)
      return arr3.concat(arr4).join('')
     } else if (arr1.length > arr2.length) {
       let arr4 = arr1.slice(arr2.length,arr1.length)
       return arr3.concat(arr4).join('')
     }
     return arr3.join('')
    
    }
     
function double () {

}
// write a function that removes double letters and arranges how many changes to make a string saleable

//