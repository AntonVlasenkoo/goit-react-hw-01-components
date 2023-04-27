import { Friendlist } from 'components/FriendList/FriendList';
import { Profile } from 'components/Profile/Profile';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from 'components/App/App.styled';
import transactions from '../../data/transactions.json';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
