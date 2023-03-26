/**
 * Creates chart data from user sessions.
 * @param {Object} user - The user object to retrieve session data from.
 * @param {Array.<{day: string, kilogram: number, calories: number}>} user.sessions - The user's session data.
 * @returns {Array.<{dayIndex: number, day: string, kilogram: number, calories: number}>} An array of session data objects with dayIndex, day, kilogram, and calories properties.
 */

export const createChartData = (user) => {
    if (!user) return [];
    return user.sessions.map((session, index) => ({ dayIndex: index + 1, day: session.day, kilogram: session.kilogram, calories: session.calories }));
}
  
export const createDays = (user) => {
    if (!user) return [];
    return user.sessions.map(session => session.day);
}
  
export const createDynamicDays = (user) => {
    if (!user) return [];
    return Array.from({ length: createDays(user).length }, (_, i) => i + 1);
}

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="sps-activity-daily-custom-tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
}