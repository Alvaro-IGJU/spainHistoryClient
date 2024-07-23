// src/utils/auth.js

export function isAuthenticated() {
   const token = localStorage.getItem('jwtToken');
    return !token; 
  }
  