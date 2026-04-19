import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import Preferences from './components/Preferences';
import ProtectedRoute from './components/ProtectedRoute';
import {AuthProvider} from "./contexts/AuthContext";
import useToken from "./components/useToken";

function App() {
    const { setToken } = useToken();

    return (
        <AuthProvider>
            <div className="wrapper">
                <h1>Application</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login setToken={setToken}/>} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/preferences"
                            element={
                                <ProtectedRoute>
                                    <Preferences />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;