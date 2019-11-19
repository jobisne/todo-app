import  React from 'react';
import userData from '../userData';


export const register = (newUser) => {
  const user = {
    username: newUser.username,
    email: newUser.email,
    password: newUser.password
  }
  userData.push(user);
  return userData;
}

export const login = (loginUser) => {
  userData.map((user) => {
    if (user.email === loginUser.email ) {
      return true
    } else {
      return false
    }
  })
}
