import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchUserAverageAPI } from '../../utils/fetch';
import { UserActivity } from '../../classes/models';
import { useParams } from 'react-router-dom';
import { createChartData, createDynamicDays, CustomTooltip } from '../../utils/dailyHelpers'
import PropTypes from 'prop-types';

/**
 * Component that displays a bar chart representing the user's daily activity.
 * @component
 * @example
 * return (
 *    <Daily />
 * )
 * @returns {JSX.Element}
*/

function Daily() {

  const { id: currentUserId } = useParams();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUserAverageAPI(currentUserId).then(users => {
      const userData = users.data.userId === parseInt(currentUserId) ? users.data : null;
      if (!userData) {
        console.log('User not found')
      } else {
        const { userId, sessions, day, kilogram, calories } = userData;
        setUser(new UserActivity(userId, sessions, day, kilogram, calories));
      }
    });
  }, [currentUserId]);
  
  return (
    <div>
      <ResponsiveContainer width="100%" height={150}>
      <BarChart data={createChartData(user)} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine={{ stroke: '#DEDEDE' }} dataKey="dayIndex" tickFormatter={(value) => createDynamicDays(user)[value - 1]} tickLine={false} />
          <YAxis axisLine={{ stroke: 'transparent' }} dataKey="kilogram" ticks={[65, 75, 85]} domain={[65, 'dataMax']} yAxisId="right" orientation="right" tickLine={false} />
          <YAxis hide={true} axisLine={{ stroke: 'transparent' }} dataKey="calories" ticks={[130, 330, 530]} domain={[50, 'dataMax']} yAxisId="left" orientation="left" tickLine={false} />
          <Tooltip wrapperStyle={{ border: "none" }} content={<CustomTooltip />} offset={40} />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} />
      </BarChart>  
      </ResponsiveContainer> 
      </div>
  );
}

Daily.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ).isRequired,
    day: PropTypes.string.isRequired,
    kilogram: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  })
};

export default Daily;