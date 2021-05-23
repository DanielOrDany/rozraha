export function verifyOnCreateNewOrder(order) {
    let successfulVerification = true;

    const {
        pre_order_value,
        user_id,
        order_value,
        book_id,
        expired_at,
        returned_at
    } = order;

    if (!pre_order_value || !user_id || !order_value || !book_id || !expired_at || !returned_at) {
        successfulVerification = false;
    }

    return successfulVerification;
}
