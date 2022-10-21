import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const isOnline = {
  backgroundColor: 'green',
};
const isOffline = {
  backgroundColor: 'red',
};

function FriendList({ friends }) {
  return (
    <section className={css.container}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <span
              className={css.status}
              style={friend.isOnline !== true ? isOffline : isOnline}
            ></span>
            <img
              src={friend.avatar}
              className={css.img}
              alt="User avatar"
              width="58"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
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
