import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import './App.css';
const useObj = {};
function App() {
  const [_, setFlag] = useState<boolean>(false);
  const a = Math.random();
  const getNowData = useMemo(() => Math.random(), []);

  return (
    <div className="App">
      <div>正常的函数： {getNowData}</div>
      {/* <div>useCreation包裹后的： {nowData}</div> */}
      <button
        color="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {' '}
        渲染
      </button>
    </div>
  );
}

const Child: FC<{ title: string }> = (props) => {
  console.log(props.title);

  return <div>{props.title}</div>;
};
export default App;
