import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";

import Dashboard from "../views/dashboard/Dashboard";
import Category from "../views/category";

function AppRoutes() {

    return (

        <Routes>

            <Route element={<DashboardLayout />}>

                <Route path="/" element={<Dashboard />} />

                <Route path="/categories" element={<Category />} />

            </Route>

        </Routes>

    );

}

export default AppRoutes;