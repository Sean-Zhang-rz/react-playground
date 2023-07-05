import { Component, FC, useEffect, useRef, useState } from 'react';
import React from './assets/react.svg';
import './App.css';
import HOC from './utils/HOC/waitRender';
import Store from './store';
interface ChildProps {
  name: string;
  waitRender: () => void;
}
const Child: FC<ChildProps> = ({ name, waitRender }) => {
  useEffect(() => {
    waitRender();
  }, []);

  return (
    <div>
      <img src={React} alt="" width={160} height={120} /> {name}
    </div>
  );
};
const Item = HOC<ChildProps, { name: string }>(Child);
function App() {
  const [state, changeState] = useState(Store.getState())
  if (true) {
    const [a, changeA] = useState(0)
  }
  // changeA(1)
  useEffect(() => {
    // /* 订阅state */
    // const unSubscribe = Store.subscribe(() => {
    //   changeState(Store.getState())
    // })
    // /* 解除订阅 */
    // return () => unSubscribe()
    // changeA((a) => a + 1)
  }, [])
  return <div>
    {/* {a} */}
    <p>  {state.info.name ? `hello, my name is ${state.info.name}` : 'what is your name'} ,
      {state.info.mes ? state.info.mes : ' what do you say? '} </p>
    《React进阶实践指南》 {state.number} 👍 <br />
    <button onClick={() => { Store.dispatch({ type: 'ADD' }) }} >点赞</button>
    <button onClick={() => { Store.dispatch({ type: 'SET', payload: { name: 'alien', mes: 'let us learn React!' } }) }} >修改标题</button>
  </div>
}
// class App extends Component {
//   state: {
//     count: number
//   }

//   constructor(props: any) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   click = (e: Event) => {
//     console.log(e.target);
//     setTimeout(() => {
//       console.log(e.target);
//     }, 0)
//   }
//   render() {
//     this.setState({
//       count: 1
//     })
//     return <div onClick={(e) => this.click.bind(this)}>点击我</div>
//   }
// }
// App.prototype.click = () => {
//   console.log(22222);

// }
export default App;
