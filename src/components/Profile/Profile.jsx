import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (<div className={s.profile}>
        <div className={s.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.avatar}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.statsItem} key='followers'>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.statsItem} key='views'>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
            </li>
            <li className={s.statsItem} key='likes'>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.defaultProps = {
    avatar: defaultImage,
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,

}

export default Profile;