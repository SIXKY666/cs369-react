import { NavLink, Outlet } from "react-router-dom";
import "../App.css"

const MainLayout = () => {
  return (
    <div className="container">
      <nav>
        <ul className="space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/about">About us</NavLink>
        </ul>
      </nav>
      <div className="container">
        <Outlet /> {/* your content will be shown in the Outlet */}
      </div>
      <footer>---------This is a footer--------</footer>
    </div>
  );
};

export default MainLayout;
