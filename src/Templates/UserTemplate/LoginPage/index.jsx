import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import callApi from "../../../api/index";

function SignUpPage(props) {
  const [message, setMessage] = useState("");
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleGetLoginData = (event) => {
    /**
     * event là tham số mặc định, do hàm onChange trả về
     * name là tên của thẻ input
     * value là giá trị mà người dùng nhập vào
     */
    const { name, value } = event.target; // Lấy hai thông tin trên bằng cách destructuring từ event.target
    setSignInData({ ...signInData, [name]: value }); // Gán giá trị vừa lấy được vào signUpData
  };

  const handleUserSignIn = (event) => {
    event.preventDefault(); // Mặc định khi bấm vào nút có type="submit" thì trình duyệt sẽ load lại, lệnh này tránh trình duyệt load lại
    /**
     * Sử dụng hàm callApi đã định nghĩa trong thư mục src/api/index.js
     * Phương thức post nhận vào hai tham số
     * Tham số thứ nhất là End Point của đường link Api\
     * Tham số thứ hai là dữ liệu được gửi về Backend để xử lí
     */
    callApi
      .post("/users/login", signInData)
      .then((result) => {
        // Nếu gọi Api thành công thì dữ liệu Backend trả về sẽ chạy vô đây
        setMessage(result.data.message);
        window.localStorage.setItem("accessToken", result.data.accessToken);
        setTimeout(() => {
          props.history.push("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        // Ngược lại thì chạy vô đây
        setMessage(err.response.data.error);
      });
  };
  /**
   * React cung cấp hai Props là onChange, onSubmit, ngoài ra còn các Props khác nữa.
   * onChange được gọi mỗi khi có sự thay đổi người dùng gõ vô input
   * onSubmit được gọi mỗi khi người dùng bấm submit vào form
   */
  return (
    <div className="sign_Up_Page">
      <form
        onSubmit={handleUserSignIn}
        className="sign_Up_Form"
        autoComplete="false"
      >
        <h2 className="text-center">Đăng nhập</h2>
        <div className="input-container">
          <label htmlFor="ename">Email:</label>
          <input
            onChange={handleGetLoginData}
            id="email"
            name="email"
            placeholder="Vui lòng nhập email ..."
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Mật khẩu</label>
          <input
            onChange={handleGetLoginData}
            id="password"
            name="password"
            placeholder="Vui lòng nhập mật khẩu ..."
          />
        </div>
        <p id="notification">{message}</p>
        <button className="singup-btn" type="submit">
          Đăng kí
        </button>
        <div>
          <div className="logon-container">
            <p>
              <NavLink id="have__account" to="/signup">
                Bạn chưa có tài khoản ?
              </NavLink>{" "}
              /
              <a id="forgot__pass" href="#">
                {" "}
                Quên mật khẩu ?
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
