// 1 завдання "Профіль соціальної мережі"
import Profile from './Profile/Profile';
import user from '../user.json';

// 2 завдання "Секція статистики"
import Statistics from './Statistics/Statistics';
import data from '../data.json';

// 3 завдання "Список друзів"
import FriendList from './FriendList/FriendList';
// import FriendListItem from './FriendListItem/FriendListItem';
import friends from '../friends.json';

// 4 завдання "Історія транзакцій"
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};
