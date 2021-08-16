import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultImage from './default.jpg';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <span className={isOnline ? s.online : s.offline}></span>
          <img className={s.avatar} src={avatar} alt='Аватар пользователя' width='48' />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
