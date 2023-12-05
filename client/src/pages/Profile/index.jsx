import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import {Cookies} from "react-cookie";
function Profile() {
    const {user,setUser} = useContext(UserContext);
    const cookie = new Cookies();
    const navigate = useNavigate();
    const handleLogout = () =>{
        setUser(null);
        cookie.remove('access_token');
        navigate('/');
    }
    return ( <div>
        <div onClick={handleLogout}>Logout</div>
    </div> );
}

export default Profile;