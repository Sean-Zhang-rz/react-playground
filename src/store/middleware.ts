/* 打印中间件 */
/* 第一层在 compose 中被执行 */
function logMiddleware(){
    /* 第二层在reduce中被执行 */ 
    return (next: (arg0: { type: any }) => any) => {
      /* 返回增强后的dispatch */
      return (action: { type: any })=>{
        const { type } = action
        console.log('发生一次action:', type )
        return next(action)
      }
    }
}

export {
  logMiddleware
}