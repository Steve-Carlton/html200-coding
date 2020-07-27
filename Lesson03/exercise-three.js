/*Create an array that has at least 5 strings:

Use a for loop to console log all of the elements plus the index and a comma
Example:

// 1,cats
// 2,dogs

*/

let arr = ['Now', 'this', 'is', 'a', 'story', 'all', 'about', 'how', 'my', 'life', 'got', 'flipped', 'turned', 'upside', 'down...']

for (i = 0; i < arr.length; i++) {
  console.log(i+1 + ',' + arr[i]);
}