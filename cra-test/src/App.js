import { useState, useEffect, useRef } from 'react';
import Button from './components/Button';

import todoStyle from './css/Todo.module.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = (event) => {
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
          return [...current, todo];
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

  const todoRemove = (event) => {
    // 태그 삭제
    event.target.parentElement.remove();
    // 삭제한 태그의 값을 제거 (filter로 ?) 이 예제에서는 휘발성이기에 굳이 필요 없음

    // setTodoList((current) => {
    //   const currentDeleteValue = [...event.target.parentElement.childNodes][2];

    //   const result = [...current].filter((item) => {
    //     return item !== currentDeleteValue;
    //   });

    //   console.log(...current);
    // });
  };

  return (
    <div>
      <form onSubmit={addTodo} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" value={todo} onChange={onChange} placeholder="할일 입력 .... " />
        <div>
          <Button type="submit" text="할일 추가" />
        </div>
      </form>
      <dl className={todoStyle.bl_todo}>
        {/* <dt>할일목록 ({todoList.length})</dt> */}

        {/* 배열의 값을 뿌릴때. map을 사용. 리턴되는 key는 필수로 지정되어야 하고 key는 화면상에는 출력되지 않음. */}
        {todoList.map((current, index) => {
          return (
            <dd key={index}>
              {current}
              <Button color="red" onclick={todoRemove} text="삭제" />
            </dd>
          );
        })}
      </dl>
    </div>
  );
}

export default App;
