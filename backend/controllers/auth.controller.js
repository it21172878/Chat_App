export const signUp = async (req, res) => {
  try {
    const { firstName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};
export const logIn = (req, res) => {
  console.log('User login successfully!');
  res.send('User login successfully!');
};
export const logOut = (req, res) => {
  console.log('User logout successfully!');
  res.send('User logout successfully!');
};
