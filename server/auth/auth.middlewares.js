class AuthMiddlewares{
    loginRequired(req, res, next) {
        if (req.user) {
          next();
        } else {
          return res.status(401).json({ message: 'Unauthorized user!' });
        }
      }
}
module.exports = new AuthMiddlewares;
