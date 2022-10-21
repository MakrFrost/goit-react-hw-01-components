// import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section className={css.container}>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <span
              className={friends.isOnline !== true ? 'isOffline' : 'isOnline'}
            >
              {/* className={`status ${
                  obj.online ? 'text-success' : 'text-secondary'
            
                className={props.name !== '' ? 'deff  metal' : ' deff  energ'} */}
              {friend.isOnline}qweqwe
            </span>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {};

export default FriendList;
