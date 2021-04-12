import React, { useState } from "react";
import callApi from "../../../api/index";

function SignUpPage(props) {
	const [signUpData, setSignUpData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		displayName: "",
	});

	const handleGetSignUpData = (event) => {
		/**
		 * event là tham số mặc định, do hàm onChange trả về
		 * name là tên của thẻ input
		 * value là giá trị mà người dùng nhập vào
		 */
		const { name, value } = event.target; // Lấy hai thông tin trên bằng cách destructuring từ event.target
		setSignUpData({ ...signUpData, [name]: value }); // Gán giá trị vừa lấy được vào signUpData
	};

	const handleUserSignUp = (event) => {
		event.preventDefault(); // Mặc định khi bấm vào nút có type="submit" thì trình duyệt sẽ load lại, lệnh này tránh trình duyệt load lại
		/**
		 * Sử dụng hàm callApi đã định nghĩa trong thư mục src/api/index.js
		 * Phương thức post nhận vào hai tham số
		 * Tham số thứ nhất là End Point của đường link Api\
		 * Tham số thứ hai là dữ liệu được gửi về Backend để xử lí
		 */
		callApi
			.post("/users/signup", signUpData)
			.then((result) => {
				// Nếu gọi Api thành công thì dữ liệu Backend trả về sẽ chạy vô đây
				console.log(result);
			})
			.catch((err) => {
				// Ngược lại thì chạy vô đây
				console.log(err);
			});
	};
	/**
	 * React cung cấp hai Props là onChange, onSubmit, ngoài ra còn các Props khác nữa.
	 * onChange được gọi mỗi khi có sự thay đổi người dùng gõ vô input
	 * onSubmit được gọi mỗi khi người dùng bấm submit vào form
	 */
	return (
		<div className='sign_Up_Page'>
			<form onSubmit={handleUserSignUp} className='sign_Up_Form'>
				<h2 className='text-center'>Đăng kí</h2>
				<div className='input-container'>
					<label htmlFor='ename'>Email:</label>
					<input
						onChange={handleGetSignUpData}
						id='email'
						name='email'
						placeholder='Vui lòng nhập email ...'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Mật khẩu</label>
					<input
						onChange={handleGetSignUpData}
						id='password'
						name='password'
						placeholder='Vui lòng nhập mật khẩu ...'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Mật khẩu xác nhận:</label>
					<input
						onChange={handleGetSignUpData}
						id='confirmPassword'
						name='confirmPassword'
						placeholder='Vui lòng nhập mật khẩu xác nhận ...'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Số điện thoại:</label>
					<input
						onChange={handleGetSignUpData}
						id='phoneNumber'
						name='phoneNumber'
						placeholder='Vui lòng nhập số điện thoại ...'
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='name'>Tên hiển thị:</label>
					<input
						onChange={handleGetSignUpData}
						id='name'
						name='displayName'
						placeholder='Vui lòng nhập tên hiển thị ...'
					/>
				</div>
				<div className='input-container '>
					<label className='checkbox-container'>
						<input type='checkbox' />
						<span className='checkmark'></span>
					</label>
					<p id='policy'>
						Đồng ý với
						<a href='#'>
							<strong> điều khoản</strong>
						</a>
					</p>
				</div>
				<button className='singup-btn' type='submit'>
					Đăng kí
				</button>
				<div>
					<div className='login-container'>
						<p>
							<a href='#'>Bạn đã có tài khoản ?</a>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignUpPage;
