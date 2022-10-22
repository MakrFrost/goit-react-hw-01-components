import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const isOnlineStat = {
  backgroundColor: 'green',
};
const isOffline = {
  backgroundColor: 'red',
};

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={isOnline !== true ? isOffline : isOnlineStat}
      ></span>
      <img src={avatar} className={css.img} alt="User avatar" width="58" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
