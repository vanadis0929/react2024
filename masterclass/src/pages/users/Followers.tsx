import { useOutletContext } from 'react-router-dom';

interface FollowersProps {
  nameOfMyUser: string;
}

const Followers = () => {
  const userName = useOutletContext<FollowersProps>();
  console.log(userName);
  return <h1>{userName.nameOfMyUser}의 팔로워목록 </h1>;
};

export default Followers;
