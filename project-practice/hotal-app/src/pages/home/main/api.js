import httpRequestClient from "../../../services/http-request-client";

const APIEndPoints = {
    // 获取产品价格
    fetchGoodsUrl: "/home/goodprice",
    // 获取折扣
    fetchDisCountsUrl: "/home/discount",
    // 获取高分
    fetchHighScoresUrl: '/home/highscore',
    // 获取推荐
    fetchRecommendsUrl: '/home/hotrecommenddest',
    // 获取plus 数据
    fetchPlusDataUrl: '/home/plus',
    // 长期?
    fetchLongForDataUrl: '/home/longfor'
}

const interfaces = {
    fetchGoods() {
        return httpRequestClient.get(APIEndPoints.fetchGoodsUrl)
    },
    fetchDisCounts() {
        return httpRequestClient.get(APIEndPoints.fetchDisCountsUrl)
    },
    fetchHighScores() {
        return httpRequestClient.get(APIEndPoints.fetchHighScoresUrl)
    },
    fetchPlusData() {
        return httpRequestClient.get(APIEndPoints.fetchPlusDataUrl)
    },
    fetchLongForData() {
        return httpRequestClient.get(APIEndPoints.fetchLongForDataUrl)
    },
    fetchRecommends() {
        return httpRequestClient.get(APIEndPoints.fetchRecommendsUrl)
    }
}
export default interfaces


