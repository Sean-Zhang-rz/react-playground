import { applyMiddleware, combineReducers, createStore } from "redux"
import { logMiddleware } from "./middleware"
import { InfoReducer, numberReducer } from "./reducer"

/* 注册中间件  */
const rootMiddleware = applyMiddleware(logMiddleware)
/* 注册reducer */
const rootReducer = combineReducers({ number: numberReducer, info: InfoReducer })
/* 合成Store */
const Store = createStore(rootReducer,{ number:1 , info:{ name:null } }, rootMiddleware) 

export default Store