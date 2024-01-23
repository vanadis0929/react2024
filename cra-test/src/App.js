import { useState, useEffect } from 'react';

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((current) => !current);
  };

  const Hello = () => {
    //useEffect 내부 에서 return 된 함수는 컴포넌트가 제거될때 실행된다, (컴포넌트가 제거되는 시점에 무언가 하고 싶은경우에 )
    useEffect(() => {
      console.log('hi :p ');
      return () => console.log('bye :D ');
    }, []);
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
