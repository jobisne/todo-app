
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

  userData.forEach((user) => {
    if (user.email === loginUser.email && user.password === loginUser.password) {
      console.log('yes')
    //  status = true
    return true
    }
    
  });
  
}
