import Navbar from "../components/navbar/navbar";
import Aside from "../components/aside/aside";
import Welcome from "../components/welcome/welcome";
import Activity from "../components/activity/activity";
import Stats from "../components/stats/stats";

function Profile() {
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