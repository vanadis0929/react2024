import { users } from '../db';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>id: {user.id}의 정보보기</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
