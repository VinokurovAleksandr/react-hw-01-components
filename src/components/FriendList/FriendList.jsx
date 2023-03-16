import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({
    friends }) {
   
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem 
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    
                />
            ))}
        </ul>
        
        
    )
};

