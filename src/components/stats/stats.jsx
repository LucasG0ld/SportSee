import React, { useState, useEffect } from 'react';
import './stats.css'
import Calories from '../../assets/calories-icon.png'
import Carbs from '../../assets/carbs-icon.png'
import Fat from '../../assets/fat-icon.png'
import Protein from '../../assets/protein-icon.png'
import { fetchUsersAPI } from '../../utils/fetch';
import { UserMainData } from '../../classes/models';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Composant Stats affichant les statistiques nutritionnelles d'un utilisateur.
 * @component
 * @example
 * 
 * return (
 *    <Stats />
 * )
 * 
 * @returns {JSX.Element}
 */

function Stats() {
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

    /**
    * Utilisateur ayant les informations de nutrition.
    * @typedef {Object} UserWithNutrition
    * @property {Object} keyData - Les données de nutrition de l'utilisateur.
    * @property {number} keyData.calorieCount - Le nombre de calories consommées par l'utilisateur.
    * @property {number} keyData.proteinCount - Le nombre de grammes de protéines consommés par l'utilisateur.
    * @property {number} keyData.carbohydrateCount - Le nombre de grammes de glucides consommés par l'utilisateur.
    * @property {number} keyData.lipidCount - Le nombre de grammes de lipides consommés par l'utilisateur.
    */

    /**
    * Les propriétés du composant Stats.
    * @typedef {Object} StatsProps
    * @property {UserWithNutrition} user - Utilisateur ayant les informations de nutrition.
    */
    
    if (!user) {
      return null;
    }

  return (
    <aside className='sps-stats'>
        <article className='sps-stats-calories'>
            <img src={Calories} alt="Icone calories" />
            <div>
                <h3>{user.keyData.calorieCount}kCal</h3>
                <p>Calories</p>
            </div>
            
        </article>
        <article className='sps-stats-protein'>
            <img src={Protein} alt="Icone proteines" />
            <div>
                <h3>{user.keyData.proteinCount}</h3>
                <p>Proteines</p>
            </div>
        </article>
        <article className='sps-stats-carbohydrates'>
            <img src={Carbs} alt="Icone glucides" />
            <div>
                <h3>{user.keyData.carbohydrateCount}g</h3>
                <p>Glucides</p>
            </div>
        </article>
        <article className='sps-stats-lipids'>
            <img src={Fat} alt="Icone lipides" />
            <div>
                <h3>{user.keyData.lipidCount}g</h3>
                <p>Lipides</p>
            </div>
        </article>
    </aside>
  );
};

Stats.propTypes = {
  user: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Stats;