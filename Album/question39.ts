function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Album2 with 12 tracks
const album3 = make_album("Artist3", "Album3");

// Printing each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);
