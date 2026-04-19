import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import Preferences from './components/Preferences';
import ProtectedRoute from './components/ProtectedRoute';
import useToken from './components/useToken';

function App() {
    const { token, setToken } = useToken();

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute token={token}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/preferences"
                        element={
                            <ProtectedRoute token={token}>
                                <Preferences />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;