import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section className={css.container}>
      <ul className={css.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
