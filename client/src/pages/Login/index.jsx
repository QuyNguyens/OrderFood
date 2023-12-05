import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { useContext, useState } from "react";
import axios from "axios";
import google from '../../../public/google.png';
import { UserContext } from "../../UserContext";
const cx = classNames.bind(styles);
function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const {user,setUser} = useContext(UserContext);
    const LoginSubmit = (e) =>{
        e.preventDefault();
        axios.post('/auth/login',{email,password})
        .then(result =>{
            console.log('result: ', result);
            setUser(result.data.otherDetail);
        })
        .catch(err => console.log(err));
    }
    console.log('userlogin: ',user);
    return ( <div className={cx("wrapper")}>
        <div className={cx('form-center')}>
            <h1>Login</h1>
            <form onSubmit={LoginSubmit} >
                <input onChange={e => setEmail(e.target.value)}  type="email" placeholder="email" />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                <button>Login</button>
                <h2>or login with provider</h2>
                <div>
                    <img src={google} alt="" />
                    <span>Login with google
                    </span>
                </div>
            </form>
        </div>
    </div> );
}

export default Login;