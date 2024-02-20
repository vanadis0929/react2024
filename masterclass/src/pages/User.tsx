import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../db';

const User = () => {
  /* 별도의 타입을 체크하지 않아도됨 */
  const { userId } = useParams();

  return (
    //Number(userId)를하여 타입을 정확히 지정함 useParams에서는 string]undefined였지만 계산을 해야하기에 숫자형으로 바꿈.
    <div>
      <h1>
        회원정보: {userId}:: {users[Number(userId) - 1].name}
      </h1>
      <Link to="followers">팔로워 보기</Link>
      <hr />
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
      {/* followers 컴포넌트를 user의 자식으로 outlet을 사용하여 렌더링. */}
    </div>
  );
};
export default User;
