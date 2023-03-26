import React from 'react';
import ActivityResume from '../activityResume/activityResume';
import Score from '../score/score';
import Daily from '../daily/daily';
import Average from '../average/average';
import './activity.css'

/**
 * Component that displays all the charts by import they from there own components.
 * 
 * @component
 * @example
 * return (
 *    <Activity />
 * )
 * @returns {JSX.Element}
 */

function Activity() {

  return (
    <div className='sps-activity'>
        <article className='sps-activity-daily'>
            <div className='sps-activity-daily-text'>
                <p>Activité quotidienne</p>
                <div>
                    <p><span className='sps-activity-daily-round-black'></span>Poids (kg)</p>
                    <p><span className='sps-activity-daily-round-red'></span>Calories brûlées (kCal)</p>
                </div>
            </div>
            <Daily/>
        </article>
        <div className='sps-activity-trio'>
            <article className='sps-activity-time'>
                <p>Durée moyennne des sessions</p>
                <Average/>
            </article>
            <article className='sps-activity-resume'>
                <ActivityResume/>
            </article>
            <article className='sps-activity-score'>
                <p>Score</p>
                <Score/>
            </article>
        </div>
        
    </div>
  );
};

export default Activity;