import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [attem, setAttem] = useState(false);

    useEffect(() => {
        localStorage.setItem('password', null);
    }, []);

    const savePassword = () => {
        localStorage.setItem('password', password);
        navigate('/');
        axios
            .get(`http://localhost:3030/account/${password}`)
            .then(() => {})
            .catch(() => navigate('/login', { replace: true }));
        setAttem(true);
    };

    return (
        <div>
            <h1>Увійдіть в акаунт</h1>
            <br />
            <br />
            <input
                type="password"
                style={{ color: '#000' }}
                onChange={item => setPassword(item.target.value)}
            ></input>
            <br />
            <br />
            <button
                type="button"
                to="/"
                style={{ color: '#000' }}
                onClick={savePassword}
            >
                Вхід
            </button>
            <p>
                не маєте акаунт - <Link to="/signin">зареєструйтеся</Link>
            </p>
            {attem ? <p style={{ color: '#f00' }}>Невірний логін</p> : <></>}
        </div>
    );
}

export default LoginPage;
