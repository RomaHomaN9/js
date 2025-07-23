import { useEffect, useState } from 'react';
import { Link, useNavigate, navigate } from 'react-router-dom';
import axios from 'axios';

function SigninPage() {
    const [inputValue, setInputValue] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();

    const createAccount = () => {
        if (inputValue.length <= 5) {
            setReason("Логін моє мати більше п'яти символів");
            return;
        }
        axios
            .post('http://localhost:3030/account/', {
                id: inputValue,
                tasks: []
            })
            .catch(() => navigate('/error-page', { replace: true }));
    };

    return (
        <div>
            <input
                type="text"
                style={{ color: '#000' }}
                minLength={5}
                onChange={item => setInputValue(item.target.value)}
            />
            <br />
            <Link onClick={createAccount} to="/login">
                Зареєструватися
            </Link>
            <p style={{ color: '#f00' }}>{reason}</p>
        </div>
    );
}

export default SigninPage;
