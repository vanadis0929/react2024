import { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [counter, setValue] = useState(0);

  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  console.log('매번실행됨');

  // useEffect를 사용해서 실행이 되는 시점을 정의할 수 있다 (매번 렌더링 되지 않아야하는 기능이 있을 때)

  //리액트 18버전부터는 개발환경에서는 콘솔이 두번 실행됨 (개발시에만)
  useEffect(() => {
    console.log('딱한번만');
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <Button onclick={onClick} color="#f0f" text="나는 버튼" />
    </div>
  );
}

export default App;
