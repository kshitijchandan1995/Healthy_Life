import axios from 'axios';


class UserServices{
  
        constructor(){
            this.baseUrl = "http://localhost:8080/"
        }
    UserSignin(user){
        return axios.post(this.baseUrl+"signin",user)
    }
    registerUser(user){
        return axios.post(this.baseUrl+"signup",user)
    }
}

export default new UserServices();