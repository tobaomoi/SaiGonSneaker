import React from "react";
import './index.scss';
function SignUpPage(props) {
	return (
		<div className="sign_Up_Page">
			<form className="sign_Up_Form" >
				<h2 className="text-center">Đăng kí</h2>
				<div className="input-container name">
					<label htmlFor="name">Tên hiển thị:</label>
					<input id="name" name="name" placeholder="Vui lòng nhập tên hiển thị ..." type="text" />
				</div>
				<div className="input-container email">
					<label htmlFor="ename">Email:</label>
					<input id="email" name="email" type="email" placeholder="Vui lòng nhập email ..." />
				</div>
				<div className="input-container password">
					<label htmlFor="password">Mật khẩu</label>
					<input id="password" name="password" placeholder="Vui lòng nhập mật khẩu ..." type="password" />
					<i className="far fa-eye-slash"></i>
				</div>
				<div className="input-container confirmPassword">
					<label htmlFor="password">Mật khẩu xác nhận:</label>
					<input id="confirmPassword" name="confirmPassword" placeholder="Vui lòng nhập mật khẩu xác nhận ..." type="password" />
					<i className="far fa-eye-slash"></i>
				</div>
				<div className="input-container cta">
					<label className="checkbox-container">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</label>
					<p id="policy">Đồng ý với <a href=""><strong> điều khoản</strong> </a> </p>

				</div>
				<button className="singup-btn" type="submit">
					Sign up
                </button>
				<div>
					<div className="login-container">
						<p>Alredy have an account? <a href="#"><strong>Log In </strong></a> </p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignUpPage;
