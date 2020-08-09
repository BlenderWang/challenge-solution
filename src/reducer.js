export default function reducer(state, { type, payload }) {
    switch (type) {
        case "FILTER_LOCATION":
            return {
                ...state,
                currentLocation: payload,
            };
        default:
            return state;
    }
}
