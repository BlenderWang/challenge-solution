export default function reducer(state, { type, payload }) {
    switch (type) {
        case "FILTER_LOCATION":
            return {
                ...state,
                currentLocation: payload,
            };
        case "UPDATE_ITEMS":
            return {
                ...state,
                items: payload,
            };
        default:
            return state;
    }
}
