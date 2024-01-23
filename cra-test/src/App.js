import { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
    //console.log('입력하신 검색어는' + event.target.value);
  };

  // useEffect를 사용해서 실행이 되는 시점을 정의할 수 있다 (매번 렌더링 되지 않아야하는 기능이 있을 때)

  //리액트 18버전부터는 개발환경에서는 콘솔이 두번 실행됨 (개발시에만)
  useEffect(() => {
    console.log('딱한번만');
  }, []);

  //  useEffect 두번째 인자에 state를 명시하면 해당 state가 변화될때만 실행한다.
  useEffect(() => {
    console.log('입력하신 검색어는' + keyword);
  }, [keyword]);

  useEffect(() => {
    console.log('counter가 변화될때 실행');
  }, [counter]);

  return (
    <div>
      <input onChange={onChange} value={keyword} type="search" placeholder="검색" />
      <h2>{counter}</h2>

      <Button onclick={onClick} color="#f0f" text="나는 버튼" />
    </div>
  );
}

export default App;
