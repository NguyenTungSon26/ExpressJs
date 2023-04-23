const login = (req, res) => {
  // Lấy thông tin email và password từ request body
  const email1 = "admin@gmail.com";
  const password1 = "123456";
  const { email, password } = req.body;
  console.log(email, password);
  // Kiểm tra email và password nhập vào có khớp với thông tin hard code hay không
  if (email === email1 && password === password1) {
    // jwt , token
    res.status(200).json({ Error: "Đăng nhập thành công" });
  } else {
    // Nếu không khớp, trả về lỗi đăng nhập không hợp lệ
    res.status(401).json({ Error: "Đăng nhập không hợp lệ" });
  }
};

module.exports = login;
