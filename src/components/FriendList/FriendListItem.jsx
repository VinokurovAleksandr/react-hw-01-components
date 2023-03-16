import PropTypes from 'prop-types';
import FriendSyle from './FriendSyle.module.css'

export default function FriendListItem({
    avatar,
    name,
    isOnline,
    id,
}) {
    return (
        <li  className={FriendSyle.item} key={id}>
        <span className={isOnline ? FriendSyle.active : FriendSyle.status}></span>
        <img className={FriendSyle.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={FriendSyle.name}>{name}</p>
        </li>
    )
};