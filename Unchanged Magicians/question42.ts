function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array 
const originalMagicians: string[] = ["magician1", "magician2", "magician3", "magician4"];

//  copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Calling make_great() with a copy of the array
const greatMagicians: string[] = make_great(copiedMagicians);


console.log("Original Magicians:");
show_magicians(originalMagicians);


console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
