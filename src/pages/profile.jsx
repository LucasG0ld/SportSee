import Navbar from "../components/navbar/navbar";
import Aside from "../components/aside/aside";
import Welcome from "../components/welcome/welcome";
import Activity from "../components/activity/activity";
import Stats from "../components/stats/stats";
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const validIds = [12, 18];

function Profile() {

    const { id } = useParams();
    const userId = parseInt(id);
    const navigate = useNavigate();
    
    const controller = new AbortController();

    useEffect(() => {
        if (!validIds.includes(userId)) {
            navigate('/404');
        }
        return () => {
            controller.abort();
        };
    }, [userId, navigate, controller]);

    if (!validIds.includes(userId)) {
        return null;
    }

    return(
        <main>
            <Navbar/>
            <Aside/>
            <div className='sps-home-content-container'>
                <Welcome/>
                <div className="sps-home-content-flex">
                    <Activity/>
                    <Stats/>
                </div>
            </div>
            
        </main>
    )
}

export default Profile;