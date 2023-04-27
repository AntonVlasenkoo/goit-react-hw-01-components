import PropTypes from 'prop-types';
import {
  Container,
  UserInfo,
  Text,
  Title,
  StatsList,
  SratsItem,
} from 'components/Profile/Profele.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <UserInfo>
        <img src={avatar} alt="User avatar" width="192" />
        <Title>{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </UserInfo>

      <StatsList>
        <SratsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </SratsItem>
        <SratsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </SratsItem>
        <SratsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </SratsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
