export default function (state = {many: [], one: null}, {type, payload}) {
    console.log(type + "---" + payload)
    switch (type) {
        case 'MANY-REAL':
            return {
                ...state,
                many: [...state.many, payload]
            }
        case 'ONE-REAL':
            return {...state, one: payload};
        default:
            return state;
    }
}