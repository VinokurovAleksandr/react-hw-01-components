import PropTypes from 'prop-types';
import ProfileCss from '../Profile/Profile.module.css';
import defaultImage from '../Profile/defaultImage.jpg'

export default function Profile({
    avatar = defaultImage,
    username,
    tag,
    location,
    followers,
    views,
    likes,
}){
    return (
        <div className={ProfileCss.profile}>
        <div className={ProfileCss.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={ProfileCss.avatar}
                />
                <p className={ProfileCss.name}>{username}</p>
                <p className={ProfileCss.tag}>@{tag}</p>
                <p className={ProfileCss.location}>{ location}</p>
            </div>

            <ul className={ProfileCss.stats}>
                <li>
                    <span className={ProfileCss.label}>Followers</span>
                    <span className={ProfileCss.quantity}>{followers }</span>
                </li>
                <li>
                    <span className={ProfileCss.label}>Views</span>
                    <span className={ProfileCss.quantity}>{views}</span>
                </li>
                <li>
                    <span className={ProfileCss.label}>Likes</span>
                    <span className={ProfileCss.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

// Profile.propTypes = {
//      username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
   
//     stats: PropTypes.arrayOf( PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//     })),
   
// }

Profile.propTypes = {
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
stats: PropTypes.objectOf(PropTypes.number),
}

