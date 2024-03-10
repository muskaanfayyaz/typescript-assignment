let places: string[] = ["saudia arabia", "paris", "switzerland", "turkey", "america"];
//original order
console.log("Original order:", places);
// Alphabetical order
console.log("Alphabetical order:", [...places].sort());
//original order
console.log("Original order after sorting:", places);
// Reverse alphabetical order
console.log("Reverse alphabetical order:", [...places].sort().reverse());
 //original order
console.log("Original order after reverse sorting:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Original order after double reverse:", places);
// Sort the list alphabetically
places.sort();
console.log("Sorted alphabetically:", places);
// Reverse the sorted array to get reverse alphabetical order
places.reverse();
console.log("Sorted in reverse alphabetical order:", places);
