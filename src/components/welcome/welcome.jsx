import React, { useState, useEffect } from 'react';
import { fetchUsersAPI } from '../../utils/fetch';
import { UserMainData } from '../../classes/models';
import './welcome.css';
import { useParams } from 'react-router-dom';

/**
 * Component that display the welcome message to the user.
 * @component
 * @example
 * 
 * return (
 *    <Welcome />
 * )
 * 
 * @returns {JSX.Element}
 */

function Welcome() {
  const { id: currentUserId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsersAPI(currentUserId).then(users => {
      const userData = users.data.id === parseInt(currentUserId) ? users.data : null;
      if (!userData) {
        console.log('User not found')
      } else {
        const { id, userInfos, todayScore, keyData } = userData;
        setUser(new UserMainData(id, userInfos.firstName, userInfos.lastName, userInfos.age, todayScore, keyData.calorieCount, keyData.proteinCount, keyData.carbohydrateCount, keyData.lipidCount));
      }
    }).catch(error => console.error(error));
  }, [currentUserId]);

  if (!user) {
    return null;
  }

  return (
    <div className='sps-welcome'>
      <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
};

export default Welcome;