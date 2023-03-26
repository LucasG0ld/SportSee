import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchUserActivityAPI } from '../../utils/fetch';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { transformData, CustomTooltip } from '../../utils/averageHelpers'; 

/**
 * Component that displays a graph of the average length sport session of the user.
 * 
 * @component
 * @example
 * return (
 *    <Average />
 * )
 * @returns {JSX.Element}
 */

function Average() {

  const { id: currentUserId } = useParams();
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    fetchUserActivityAPI(currentUserId).then(users => {
      const userData = users.data.userId === parseInt(currentUserId) ? users.data : null;
      if (!userData) {
        console.log('User not found')
      } else {
        const { sessions } = userData;
      setUserSessions(sessions);
      }
    });
  }, [currentUserId]);

  if (!userSessions.length) {
    return null;
  }

  const data = transformData(userSessions);

  return (
    <div>
      <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <XAxis axisLine={{ stroke: 'transparent' }} tickLine={false} dataKey="day" tick={{ fill: '#fff' }} tickMargin={15} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={3} dot={false} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Average.propTypes = {
  userSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default Average;