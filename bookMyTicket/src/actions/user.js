import { USER } from "../utils/user";

export function confirmBooking({
    name,
    genre,
    time,
    cinema,
    seats,
    price,
    id,
}) {

    return async (dispatch) => {

        var newBooking = {
            name: '',
            genre: '',
            showTime: '',
            cinema: '',
            seatNumber: [],
            price: '',
            id: '',
        };

        newBooking.name = name
        newBooking.genre = genre
        newBooking.showTime = time
        newBooking.cinema = cinema
        newBooking.seatNumber = seats
        newBooking.price = price
        newBooking.id = id

        // console.log(newBooking)

        dispatch({
            type: USER.confirmBooking,
            data: newBooking,
        });
        return {
            success: true
        }
    };
}

export function cancelBooking({
    id,
}) {

    return async (dispatch) => {

        dispatch({
            type: USER.cancelBooking,
            data: id,
        });
        return {
            success: true
        }
    };
}

// export function getOrder(orderId) {
//     return async (dispatch) => {
//         const result = await order.getOrder(orderId);
//         // for type: 'not-verified',
//         if (!result.success) {
//             return {
//                 error: result.message,
//             };
//         }
//         dispatch({
//             type: USER.getOrder,
//             data: result.result,
//         });
//         return result;
//     };
// }