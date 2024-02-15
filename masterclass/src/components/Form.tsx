import React, { useState } from 'react';
import { styled, createGlobalStyle } from 'styled-components';

import { Button } from './Button';

const Global = createGlobalStyle`
	form { 
		display: flex; gap: 20px; 

		input { padding-inline: 10px; align-self: center; }

		input {

			background-color: ${(props) => props.theme.bgColor} ;
			color: ${(props) => props.theme.textColor} ;
			border-color: ${(props) => props.theme.textColor} ;
			} 

	}

`;

const Form = () => {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //비구조화할당.. 깊은 객체의 값을 꺼냄. event.currentTarget.value의 값을 가져옴
    // const {
    //   currentTarget: { value },
    // } = event;

    const { value } = event.currentTarget;

    // console.log(value);
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('result:::', value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Global />
      <input type="text" onChange={onChange} placeholder="ddd" />
      <Button type="sumbit">로그인</Button>
    </form>
  );
};

export default Form;
