import React from 'react';
import './App.css';
import {BookListPage} from './pages/BookListPage/BookListPage';
import {Route, Switch} from "react-router";
import {EditBookPage} from "./pages/EditBookPage/EditBookPage";
import {AddBookPage} from "./pages/AddBookPage/AddBookPage";
import {LoginBar} from "./components/LoginBar/LoginBar";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {PageWrapper} from "./components/PageWrapper/PageWrapper";
import {UnauthorizedPage} from "./pages/UnauthorizedPage/UnauthorizedPage";


function App() {

    return (
        <>
            <LoginBar/>
            <PageWrapper>
                <Switch>
                    <Route exact path="/" component={BookListPage}/>
                    <Route exact path="/book-list" component={BookListPage}/>
                    <Route exact path="/unauthorized" component={UnauthorizedPage}/>
                    <PrivateRoute exact path="/edit-detail/:id" component={EditBookPage}/>
                    <PrivateRoute exact path="/add" component={AddBookPage}/>
                </Switch>
            </PageWrapper>
        </>
    );
}

export default App;
