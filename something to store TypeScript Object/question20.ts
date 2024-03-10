// Define objects representing different Urdu novels
const urduNovels: { title: string; author: string; genre: string; year: number }[] = [
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
urduNovels.forEach(novel => {
    console.log(`${novel.title} by ${novel.author} (${novel.year}), Genre: ${novel.genre}`);
});
