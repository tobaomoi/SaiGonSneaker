import React from "react";

function Navbar(props) {
  const handleUserLogout = () => {
    window.localStorage.clear();
    props.routeProps.history.push("/login");
  }

  const handleUserLogin = () => {
    props.routeProps.history.push("/login")
  }

  const isUserLoggedIn = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (!accessToken) {
      return (
        <div>
          <button onClick={() => { handleUserLogin() }} id="logon">Đăng nhập</button>
        </div>
      )
    } else {
      return (
        <div>
          <p id="user__Name">Gia Khanh</p>
          <button onClick={() => { handleUserLogout() }} id="logon">Đăng xuat</button>
        </div>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          SaiGonSneakers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Kids
              </a>
            </li>
            <div className="user__Logon">
              {isUserLoggedIn()}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
