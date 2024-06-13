import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent xss attacks (Cross-Site Scripting Attack)
    sameSite: 'strict', // prevent CSRF attacks (Cross-Site Request Forgery Attack)
    secure: process.env.MODE_DEV !== 'development',
  });
};

export default generateTokenAndSetCookie;
