export function verifyOnCreateNewUser(user) {
    let successfulVerification = true;

    const {
        full_name,
        address,
        phone_number,
        category
    } = user;

    if (!full_name || !address || !phone_number || !category) {
        successfulVerification = false;
    }

    return successfulVerification;
}