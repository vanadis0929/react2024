import { useState, useEffect, useRef } from 'react';
import Button from './components/Button';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    switch (todo === '') {
      default:
      case true:
        alert('내용을 입력하세요.');
        return;

      case false:
        // todoList를 전개연산자로 뒤로 추가, 새로입력한 todo는 todolist에 들어감. (직접적으로 배열에 푸시를 할 수 없음.)
        // onSubmit 함수 내에서는 리렌더링되기 전 시점이기때문에 첫 항목 추가때는 아무것도 잡히지 않음.
        setTodoList((current) => {
          //새로 추가한 값과, 기존에 들어갔던 항목들을 전개연산자로 나열.
          return [todo, ...current];
        });

        // 이 안에서 새로운 배열을 반환하면 정상출력
        /*
        setTodoList((current) => {
          const newArr = [todo, ...current];
          return newArr; 
        });
        */

        setTodo('');
        console.log(todoList);
        break;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" value={todo} onChange={onChange} placeholder="할일 입력 .... " />
        <div>
          <Button type="submit" text="할일 추가" />
        </div>
      </form>
      <dl>
        <dt>할일목록 ({todoList.length})</dt>
        {todoList.map((current, index) => {
          return (
            <dd key={index}>
              {index + 1}:: {current}
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default App;
