import Profile from './Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import css from '../../src/index.css';
import user from './Profile/user.json';
import dataStat from '../Statistics/statistics.json';
// import { useEffect } from 'react';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

        <Statistics 
          id={dataStat.label}
          label={dataStat.dataStat}
          percentage={dataStat.percentage}
        />
    </div>
  )
}


// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <Profile
//   />);