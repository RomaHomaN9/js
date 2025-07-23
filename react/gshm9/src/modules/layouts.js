import { NavLink, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.js';
import ToDoList from './pages/toDoList.js';
import EditToDoList from './pages/editToDoList.js';
import AboutPage from './pages/about.js';
import NotFoundPage from './pages/notFound.js';

function Layouts() {
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
                            Home
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
                            Туду ліст
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
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todo-list" element={<ToDoList id="all" />} />
                    <Route path="/todo-list/:id" element={<EditToDoList />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
}

export default Layouts;
