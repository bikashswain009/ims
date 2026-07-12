import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./dashboard.css";

function DashboardLayout() {
    return (
        <div className="d-flex">

            <Sidebar />

            <div className="main-content">

                <Header />

                <div className="container-fluid mt-4">

                    <Outlet />

                </div>

            </div>

        </div>
    );
}

export default DashboardLayout;