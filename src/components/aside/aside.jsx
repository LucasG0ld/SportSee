import React from 'react';
import './aside.css'
import Althere from '../../assets/icone-althere.png'
import Meditation from '../../assets/icone-meditation.png'
import Nage from '../../assets/icone-nage.png'
import Velo from '../../assets/icone-velo.png'

/**
 * Component that displays the left menu.
 * 
 * @component
 * @example
 * return (
 *    <Aside />
 * )
 * @returns {JSX.Element}
 */

function Aside() {

  return (
    <aside className='sps-aside'>
        <nav>
            <img src={Meditation} alt="Icone méditation" />
            <img src={Nage} alt="Icone nage" />
            <img src={Velo} alt="Icone vélo" />
            <img src={Althere} alt="Icone althère" />
        </nav>
        <p>Copiryght, SportSee 2020</p>
    </aside>
  );
};

export default Aside;