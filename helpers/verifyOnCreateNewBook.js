export function verifyOnCreateNewBook(book) {
    let successfulVerification = true;

    const {
        name,
        creator,
        genre
    } = book;

    if (!name || !creator || !genre) {
        successfulVerification = false;
    }

    return successfulVerification;
}
