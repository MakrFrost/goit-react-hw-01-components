// 1 завдання "Профіль соціальної мережі"
import { Profile } from './Profile/Profile';
import user from '../user.json';
// 2 завдання "Секція статистики"

// 3 завдання "Список друзів"

// 4 завдання "Історія транзакцій"

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
