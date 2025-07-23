import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <p>
                Цієї сторінки не існує, перейдіть на
                <br />
                <Link to="/">головну сторінку</Link>
            </p>
        </div>
    );
}

export default NotFoundPage;
