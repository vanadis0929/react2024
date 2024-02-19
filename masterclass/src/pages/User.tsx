import { useParams } from 'react-router-dom';
import { users } from '../db';

const User = () => {
  /* 별도의 타입을 체크하지 않아도됨 */
  const { userId } = useParams();

  return (
    //Number(userId)를하여 타입을 정확히 지정함 useParams에서는 string]undefined였지만 계산을 해야하기에 숫자형으로 바꿈.
    <div>
      회원정보: {userId}:: {users[Number(userId) - 1].name}
    </div>
  );
};
export default User;
