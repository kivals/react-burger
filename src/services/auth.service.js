import $api from "../http";

const login = (email, password) => {
  return $api.post('/login', {email, password});
};

const register = (name, email, password) => {
  return $api.post('/register', {name, email, password});
};

const getProfile = () => {
  return $api.get('/user');
};

const updateProfile = (name, email, password) => {
  return $api.patch('/user', {name, email, password});
}

const logout = (token) => {
  return $api.post('/logout', { token });
};

const authService = {
  login,
  register,
  getProfile,
  updateProfile,
  logout,
};

export default authService;
