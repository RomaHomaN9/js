import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <p>
                Виникла помилка при Завантаженні, будь ласка перейдіть на{' '}
                <Link to="/">головну сторінку</Link>
            </p>
        </div>
    );
}

export default ErrorPage;
