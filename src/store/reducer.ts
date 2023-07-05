/* number Reducer */
function numberReducer(state=1, action: { type: any }){
  switch (action.type){
    case 'ADD':
      return state + 1
    case 'DEL':
      return state - 1
    default:
      return state
  } 
}
/* 用户信息reducer */
function InfoReducer(state={}, action: { type?: any; payload?: any }){
  const { payload = {} } = action
   switch (action.type){
     case 'SET':
       return {
         ...state,
         ...payload
       }
     default:
       return state
   }
}

export {
  numberReducer,
  InfoReducer
}