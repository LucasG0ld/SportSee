import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { fetchUserPerformanceAPI } from '../../utils/fetch';
import { UserPerformance } from '../../classes/models';
import { useParams } from 'react-router-dom';
import { sortData } from '../../utils/activityResumeHelpers';
import PropTypes from 'prop-types';

/**
 * Component that displays a radar chart of user performance data.
 *
 * @component
 * @example
 * return (
 *   <ActivityResume />
 * )
 *
 * @returns {JSX.Element}
 */

function ActivityResume() {

  const { id: currentUserId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserPerformanceAPI(currentUserId).then(users => {
      const userData = users.data.userId === parseInt(currentUserId) ? users.data : null;
      if (!userData) {
        console.log('User not found')
      } else {
        const { userId, kind, data } = userData;
        setUser(new UserPerformance(userId, kind, data));
      }
    });
  }, [currentUserId]);

  if (!user) {
    return null;
  }

  const data = sortData(user.data);

  return (
      <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="49%" cy="50%" outerRadius="65%" data={data}>
              <PolarGrid stroke="#fff" radialLines={false} />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#fff' }} />
              <Radar name="User Performance" dataKey="value"  fill="#FF0101" fillOpacity={0.7} radarDot={false} />
          </RadarChart>
      </ResponsiveContainer>         
  );
};
    
ActivityResume.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  })
};

export default ActivityResume;