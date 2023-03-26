/**
 * Calculates the percentage of today's score for a given user.
 * @param {Object} user - The user object to calculate the percentage for.
 * @param {number} user.todayScore - The user's score for today.
 * @returns {number} The percentage of today's score as a rounded integer.
 */

export const calculatePercentage = (user) => {
    if (!user) {
      return 0;
    }
    return Math.round(user.todayScore * 100);    
  };
  
export const getData = (user) => {
    return [
      { name: 'Progress', value: user?.todayScore || 0, fill: '#E60000'},
      { name: 'Remaining', value: 1 - (user?.todayScore || 0), fill: 'transparent', stroke: 'none'},
    ];
};

export const renderCustomizedLabel = (user) => {
    const fontSizeText = 16;
    const fontSizePercentage = 26;
    const margin = 23;
    const percentage = calculatePercentage(user);
    return (
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan x="50%" dy={`-${fontSizePercentage / 2}px`} fontSize={fontSizePercentage} fill="#282D30" fontWeight="bold">{`${percentage}%`}</tspan>
          <tspan x="50%" dy={`${margin}px`} fontSize={fontSizeText} fill="#74798C">{`de votre`}</tspan>
          <tspan x="50%" dy={`${margin}px`} fontSize={fontSizeText} fill="#74798C">{`objectif`}</tspan>
        </text>
    );
};
