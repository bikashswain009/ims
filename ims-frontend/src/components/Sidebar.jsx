import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <div className="sidebar">

            <h3 className="text-center py-3">
                Enterprise IMS
            </h3>

            <NavLink to="/" end>
                Dashboard
            </NavLink>

            <NavLink to="/categories">
                Categories
            </NavLink>

            <NavLink to="/products">
                Products
            </NavLink>

            <NavLink to="/suppliers">
                Suppliers
            </NavLink>

            <NavLink to="/inventory">
                Inventory
            </NavLink>

            <NavLink to="/sales">
                Sales
            </NavLink>

        </div>

    );
}

export default Sidebar;