import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { getDataFromUser } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/data/data.action";
function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const getData = async () => {
    const dataListHistory = await getDataFromUser();
    if (!dataListHistory) return;
    dispatch(createAction(dataListHistory));
  };
  return (
    <>
      <div className="navigation">
        <div className="logo_container"></div>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/history" onClick={getData}>
            History
          </Link>
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
