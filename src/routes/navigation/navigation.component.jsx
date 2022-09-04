import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { store } from "../../store/store";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <div className="navigation">
        <div className="logo_container"></div>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          {currentUser ? (
            <Link to="/" onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link to="/auth">Sign in</Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
