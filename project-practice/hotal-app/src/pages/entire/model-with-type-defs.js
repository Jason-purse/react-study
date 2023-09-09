import {ComponentModel, useDataHook, useReduxHook} from "../../hooks/use-vue2-component-model";
import {useEffect} from "react";
import api from "./api";
import {changeHeaderConfigAction} from "../../store/layout";

export const useModel = () => {
    return useDataHook(Model, {}, [useReduxHook])
}

class Model extends ComponentModel {

    static label = "entire-rooms";

    static dataCreator() {
        return {
            entireRooms: {
                list: [],
                totalCount: 0
            },
            currentPage: 0
        }
    }

    useLogicHooks() {
        this.fetchEntireRooms()
    }


    fetchEntireRooms = () => {
        // 触发固定设置 ..
        useEffect(() => {
            this.dispatch(changeHeaderConfigAction({isFixed: true, isHome: false, isAlpha: false}))
        })
        useEffect(() => {
            api.fetchEntireRooms(this.data.currentPage).catch(() => Model.dataCreator().entireRooms)
                .then(this.setEntireRooms)
        }, [])
    }

    fetchEntireRoomsByPageChange = (page) => {
        // 触发 fetchEntireRooms 重新调用
        this.setCurrentPage(page - 1)
    }

}