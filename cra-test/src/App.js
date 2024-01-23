import { useState, useEffect } from 'react';

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((current) => !current);
  };

  const Hello = () => {
    const hihi = () => {
      console.log('created :p ');
      return byebye;
    };
    const byebye = () => {
      console.log('destroyed :D ');
    };

    //useEffect 내부 에서 return 된 함수는 컴포넌트가 제거될때 실행된다
    useEffect(hihi, []);
    return <h1>hello !</h1>;
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button type="button" onClick={onClick}>
        {showing ? 'hide' : 'show'}
      </button>
    </div>
  );
}

export default App;
