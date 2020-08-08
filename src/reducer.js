export default function reducer(state, { type, payload }) {
    switch (type) {
        case "FILTER_LOCATION":
            console.log(state);
            console.log(payload);
            return {
                ...state,
                currentLocation: payload,
            };
        default:
            return state;
    }
}
