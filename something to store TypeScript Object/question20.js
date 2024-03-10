// Define objects representing different Urdu novels
var urduNovels = [
    {
        title: "Peer-e-Kamil",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2004
    },
    {
        title: "Mushaf",
        author: "Nimra Ahmed",
        genre: "Romantic",
        year: 2011
    },
    {
        title: "Aab-e-Hayat",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2015
    }
];
// Print the list of Urdu novels
console.log("List of Urdu novels:");
urduNovels.forEach(function (novel) {
    console.log("".concat(novel.title, " by ").concat(novel.author, " (").concat(novel.year, "), Genre: ").concat(novel.genre));
});
