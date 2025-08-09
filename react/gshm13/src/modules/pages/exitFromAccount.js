import { useNavigate } from 'react-router-dom';

function Layouts() {
    const navigate = useNavigate();

    const exit = () => {
        localStorage.setItem('password', null);
        navigate('/login');
    };

    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Ви впевненні?</h2>
            <div className="buttons">
                <button className="button-add" onClick={exit}>
                    Так
                </button>
                <button className="button-clear" onClick={back}>
                    Ні
                </button>
            </div>
        </div>
    );
}

export default Layouts;
