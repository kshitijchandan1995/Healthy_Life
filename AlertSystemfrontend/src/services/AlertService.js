import axios from 'axios';
class AlertService {
    
    constructor(){
        this.baseUrl = "http://localhost:8080/alert/"
    }

    getAllAlerts(userid){
        return axios.get(this.baseUrl +"getAllAlert/"+userid);

    }
    addAlert(alert){
        return axios.post(this.baseUrl+"create",alert)

    }
    deleteAlert(id){
        console.log(id);
        return axios.delete(this.baseUrl+"delete/"+id);
    }
    getAlterbyID(id){
        return axios.get(this.baseUrl+"getAlert/"+id)
    }
}
export default new AlertService(); 