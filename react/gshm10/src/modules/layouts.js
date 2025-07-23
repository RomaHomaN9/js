import { useState, lazy, Suspense, useEffect } from 'react';
import {
    NavLink,
    Routes,
    Route,
    useNavigate,
    useLocation,
    Navigate
} from 'react-router-dom';
import axios from 'axios';

const SigninPage = lazy(() => import('./pages/signin.js'));
const LoginPage = lazy(() => import('./pages/login.js'));

const HomePage = lazy(() => import('./pages/home.js'));
const AboutPage = lazy(() => import('./pages/about.js'));

const ToDoList = lazy(() => import('./pages/toDoList.js'));
const EditToDoList = lazy(() => import('./pages/editToDoList.js'));

const NotFoundPage = lazy(() => import('./pages/notFound.js'));
const ErrorPage = lazy(() => import('./pages/error.js'));

function Layouts() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let exit = false;
        switch (location.pathname) {
            case '/signin':
                exit = true;
                break;
            case '/':
                exit = true;
                break;
            case '/about':
                exit = true;
                break;
        }
        if (exit) return;
        axios
            .get(
                `http://localhost:3030/account/${localStorage.getItem(
                    'password'
                )}`
            )
            .catch(() => navigate('/login'));
    }, [location.pathname]);

    return (
        <div>
            <header className="header">
                <ul className="header-list">
                    <li className="header-list-obj">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'header-list-nav-active'
                                    : 'header-list-nav'
                            }
                        >
                            Головна
                        </NavLink>
                    </li>
                    <li className="header-list-obj">
                        <NavLink
                            to="/todo-list"
                            className={({ isActive }) =>
                                isActive
                                    ? 'header-list-nav-active'
                                    : 'header-list-nav'
                            }
                        >
                            Ту ду ліст
                        </NavLink>
                    </li>
                    <li className="header-list-obj">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'header-list-nav-active'
                                    : 'header-list-nav'
                            }
                        >
                            Про застосунок
                        </NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Suspense fallback={<div>Завантаження...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signin" element={<SigninPage />} />
                        <Route path="/todo-list" element={<ToDoList />} />
                        <Route
                            path="/todo-list/:id"
                            element={<EditToDoList />}
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/error-page" element={<ErrorPage />} />
                        <Route path="*" element={<Navigate to="/404" />} />
                        <Route path="/404" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
            <footer></footer>
        </div>
    );
}

export default Layouts;
