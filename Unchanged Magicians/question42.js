var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Original array 
var originalMagicians = ["magician1", "magician2", "magician3", "magician4"];
//  copy of the original array
var copiedMagicians = __spreadArray([], originalMagicians, true);
// Calling make_great() with a copy of the array
var greatMagicians = make_great(copiedMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
