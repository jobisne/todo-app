
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
export const loginFun = (loginUser) => {
  let status;
   userData.forEach((user) => {
    if(user.email === loginUser.email  && user.password === loginUser.password) {
     status = true
    } else {
      status = false
    }
  })
 
    
 return status
}

