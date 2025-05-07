// JWT token management utilities

const setToken = (token) => {
    localStorage.setItem('jwt_token', token);
};

const getToken = () => {
    return localStorage.getItem('jwt_token');
};

const removeToken = () => {
    localStorage.removeItem('jwt_token');
};

const isAuthenticated = () => {
    const token = getToken();
    return !!token;
};

export { setToken, getToken, removeToken, isAuthenticated }; 