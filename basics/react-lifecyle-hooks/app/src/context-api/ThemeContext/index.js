import React, {createContext} from "react";

// 这里的默认值,需要显式在Provider的value上提供具体值 ..
// 是如果一个组件消费给定上下文,但是没有找到对应的Provider,那么使用默认值
// 也就是说这个组件不是给定上下文Provider的后代元素 ..

export default createContext("light")