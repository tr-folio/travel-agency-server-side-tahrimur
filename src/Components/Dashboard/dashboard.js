import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Shared/Header";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1>Dashboard</h1>
                <hr/>
            </Container>
            {localStorage.getItem("useradmin") && <AdminDashboard></AdminDashboard>}
            {!localStorage.getItem("useradmin") && <UserDashboard></UserDashboard>}
        </div>
    );
};

export default Dashboard;