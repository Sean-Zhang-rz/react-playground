import { Component, FC, useEffect } from 'react';
import React from './assets/react.svg';
import './App.css';
import HOC from './utils/HOC/waitRender';
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
// function App() {
//   const list = [{ name: '图片1' }, { name: '图片2' }, { name: '图片3' }];
//   return (
//     <div>
//       {list.map((i) => (
//         <Item name={i.name} key={i.name}></Item>
//       ))}
//     </div>
//   );
// }
class App extends Component {
  state: {
    count: number
  }

  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }
  click = () => {
    console.log('111');
  }
  render() {
    return <div onClick={this.click}>点击我</div>
  }
}
App.prototype.click = () => {
  console.log(22222);

}
export default App;
