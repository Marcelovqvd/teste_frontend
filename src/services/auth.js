export const isAuthenticated = () => localStorage.getItem('token') ? true : false;
