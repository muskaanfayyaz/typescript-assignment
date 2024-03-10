function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Creating large shirt with default message
make_shirt();

// Creating medium shirt with default message
make_shirt("Medium");

// Creating shirt of any size with a different message
make_shirt("Small", "Keep coding!");