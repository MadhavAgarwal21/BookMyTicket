import { USER } from "../utils/user";

const initialState = {
    name: "User",
    email: "",
    bookingHistory: [],
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case USER.login:
            return {
                ...state,
            };

        case USER.signUp:
            return {
                ...state,
            };

        case USER.confirmBooking:
            return {
                ...state,
                bookingHistory: [...state.bookingHistory, action.data]
            };

        case USER.cancelBooking:

            const filterHistory = state.bookingHistory.filter((ticket) => ticket.id != action.data)
            return {
                ...state,
                bookingHistory: filterHistory
            };

        case USER.getHistory:
            return {
                ...state,
            };

        default:
            return state;
    }
}