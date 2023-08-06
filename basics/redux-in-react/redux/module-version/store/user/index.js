const userState = {
    message: null
}
module.exports = {
    userState,
    userReducer: function (state = userState, {type}) {
        switch (type) {
            case 'begin':
                return {
                    message: "begin"
                }
            case 'starting':
                return {
                    message: "starting"
                }

            case 'end':
                return {
                    message: "end"
                }
            default: {
                return state
            }
        }
    }
}