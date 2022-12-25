import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./component/UsersPage";
import TodosPage from "./component/TodosPage";
import UserItemPage from "./component/UserItemPage";
import TodoItemPage from "./component/TodoItemPage";


const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to={'/users'}>Пользователи</Link>
                    <Link to={'/todos'}>Список дел</Link>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/todos/:id'} element={<TodoItemPage/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;