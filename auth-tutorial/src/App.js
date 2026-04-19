import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import Preferences from './components/Preferences';
import useToken from './components/useToken';

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;