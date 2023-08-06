const {BEGIN,STARTING,END} = require('./actionConstriant')
module.exports = {
    createStart() {
        return {
            type: BEGIN
        }
    },
    createStarting() {
        return {
            type: STARTING
        }
    },
    createEnd() {
        return {
            type: END
        }
    }
}