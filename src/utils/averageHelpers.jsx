/**
 * Transforms an object of user sessions to an array of session objects.
 * @param {Object.<string, {day: number, sessionLength: number}>} userSessions - The object of user sessions to be transformed.
 * @returns {Array.<{day: string, sessionLength: number}>} An array of session objects with day and sessionLength properties.
 */

export function transformData(userSessions) {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  
    const sessionValues = Object.values(userSessions);
  
    return sessionValues.map((session) => ({
      day: daysOfWeek[session.day - 1],
      sessionLength: session.sessionLength,
    }));
}
  
export function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div className="sps-activity-average-custom-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
}