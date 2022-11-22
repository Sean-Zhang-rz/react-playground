import { ComponentType, FC, useEffect, useState } from 'react';

const waitList: (() => void)[] = []; // 等待队列，放的是一个一个激活渲染的方法
let isRender: boolean = false; // 控制渲染条件
const waitRender = () => {
  const res = waitList.shift();
  if (!res) return;
  setTimeout(() => {
    res(); // 设置组件渲染条件为true
  }, 300);
};
const HOC =
  <P, R>(Component: ComponentType<P>): FC<P & R> =>
  (props) => {
    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
      waitList.push(() => setShow(true));
      if (!isRender) {
        waitRender();
        isRender = true;
      }
    }, []);
    return show ? <Component waitRender={waitRender} {...(props as P & R)} /> : <div>加载中</div>;
  };
export default HOC;
