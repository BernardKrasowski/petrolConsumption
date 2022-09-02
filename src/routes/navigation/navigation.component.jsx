import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="logo_container"></div>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/auth">Sign in</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
