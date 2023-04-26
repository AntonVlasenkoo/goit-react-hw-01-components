import PropTypes from 'prop-types';
import { FriendList, Chip, FriendItem } from './FriendList.Styled';
export const Friendlist = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Chip isOnline={isOnline}></Chip>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </FriendItem>
      ))}
    </FriendList>
  );
};
Friendlist.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
