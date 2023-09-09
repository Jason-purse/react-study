import httpRequestClient from "../../services/http-request-client";

const APIEndpoints = {
    fetchEntireRoomsUrl: '/entire/list'
}
export default {
    fetchEntireRooms(page = 0, size = 20) {
        return httpRequestClient.get(
            APIEndpoints.fetchEntireRoomsUrl, {
                offset: page * size,
                size
            })
    }
}