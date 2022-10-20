import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={css.main_section}>
      <div className={css.main_wrap}>
        <img className={css.main_img} src={avatar} alt="User avatar" />
        <p className={css.main_username}>{username}</p>
        <p className={css.main_tag}>@{tag}</p>
        <p className={css.main_loc}>{location}</p>
      </div>

      <ul className={css.main_list}>
        <li className={css.main_item}>
          <span className={css.main_title}>Followers</span>
          <span className={css.main_stats}>{stats.followers}</span>
        </li>
        <li className={css.main_item}>
          <span className={css.main_title}>Views</span>
          <span className={css.main_stats}>{stats.views}</span>
        </li>
        <li className={css.main_item}>
          <span className={css.main_title}>Likes</span>
          <span className={css.main_stats}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    wievs: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
