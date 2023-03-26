import React, { PureComponent, useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { fetchUsersAPI } from '../../utils/fetch';
import { UserMainData } from '../../classes/models';
import { useParams } from 'react-router-dom';
import { getData, renderCustomizedLabel } from '../../utils/scoreHelpers';
import PropTypes from 'prop-types';

/**
 * Component that displays a pie chart representing the user's progress towards their daily goal.
 * 
 * @component
 * @example
 * return (
 *   <Score />
 * )
 * 
 * @returns {JSX.Element}
 */

function Score() {

  const { id: currentUserId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsersAPI(currentUserId).then(users => {
      const userData = users.data.id === parseInt(currentUserId) ? users.data : null;
      if (!userData) {
        console.log('User not found')
      } else {
        const { id, userInfos, keyData } = userData;
        const score = userData.todayScore || userData.score || 0;
        setUser(new UserMainData(id, userInfos.firstName, userInfos.lastName, userInfos.age, score, keyData.calorieCount, keyData.proteinCount, keyData.carbohydrateCount, keyData.lipidCount));
      }
    }).catch(error => console.error(error));
  }, [currentUserId]);

  if (!user) {
    return null;
  }

  const data = getData(user);
  const customizedLabel = renderCustomizedLabel(user);

    return (
      <ResponsiveContainer width="100%" height="100%">
      <PieChart id='sps-activity-score-chart'>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" labelLine={false} type="line" innerRadius={70} outerRadius={80} startAngle={90} endAngle={450} cornerRadius={10}>
          <Cell fill="#E60000" />
          <Cell fill="transparent" stroke="none" />
        </Pie>
        {customizedLabel}
      </PieChart>
    </ResponsiveContainer>
    );
};

Score.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired,
    todayScore: PropTypes.number.isRequired,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
    
export default Score;