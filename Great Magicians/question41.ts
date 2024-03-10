function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["magician1", "magician2", "magician3", "magician4"];

// Calling make_great() to modify magician's names
magicians = make_great(magicians);

// Calling the function to show modified magician's names
show_magicians(magicians);
