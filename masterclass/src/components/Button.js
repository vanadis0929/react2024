import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
  type: props.type,
  placeholder: props.ph,
}))`
  display: inline-flex;
  place-items: center;
  place-content: center;
  border: 1px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: ${(props) => props.radius};
`;

export const ButtonCircle = styled(Button)`
  border-radius: 100%;
`;

// exports default: 한가지의 모듈만 내보낼 수 있음
// export const ..식으로 내보내면 2개이상도 export가 가능
// attr로 props로 내보낼 수있음

// 궁금한것?  버튼에 기본으로 type="button"을 추가하고 필요시 커스터마이징가능하게
