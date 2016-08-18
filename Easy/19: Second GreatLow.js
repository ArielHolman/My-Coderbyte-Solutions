function SecondGreatLow(arr) { 
  
  //loop through array and push values not matching highest and lowest to answer array
  //sort again, return first and last items formatted
  
  // Sort array in ascending order
  var sorted = arr.sort(function(a,b) {return a - b;});
  
  // If length is 2, we simply reverse the two given values.
  if (arr.length === 2) {
      return sorted.reverse().join(' ');
  }
  
  // Store the largest and smallest values
  var highest = arr[arr.length - 1];
  var smallest = arr[0];
  
  // Create solution storage
  var answer = [];
  
  // Loop through array
  for (var i = 0; i < arr.length; i++) {
  
    // If value is not equal to highest or lowest, store in answer array
    if (arr[i] !== highest && arr[i] !== smallest) {
        answer.push(arr[i]);
    }  
  }
  
  // Sort new array without largest and smallest values in ascending order
  var newSort = answer.sort(function(a,b) { return a - b; });
  
  // Newly sorted array will have the second lowest and second greatest terms as first and last terms, respectively.
  return answer[0] + " " + answer[answer.length - 1];
}
