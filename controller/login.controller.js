class LoginController {
  static login(req, res) {
    res.render('login');
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  }
}

module.exports = LoginController;
