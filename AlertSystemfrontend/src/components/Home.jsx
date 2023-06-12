import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {
    MDBBtn
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import AlertService from '../services/AlertService';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    let [alertList, setAlertList] = useState([{}]);
    

    const navigate = useNavigate();
    const addAlert = () => {
        navigate("/createalert");
    }
    const date = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const time = date.toLocaleTimeString([], timeOptions)
    const id = sessionStorage.getItem("userid")
    useEffect(() => {
        console.log('hi');
        
        AlertService.getAllAlerts(id).then(res => {
            setAlertList(res.data);
            console.log(time);
        })
        setInterval(fetchNotification
            , 15000)
        return () => {
            clearInterval(fetchNotification);
        };
    }, [])
    

    function getAlert() {
        AlertService.getAllAlerts(id).then(res => {
            setAlertList(res.data);
            console.log(time);
        })
    }
    function fetchNotification() {

        


        AlertService.getAlterbyID(id).then(res => {
            toast(res.data.desc)
        }).catch(error => {
            if (error.response) {
                const status = error.response.status;
                const data = error.response.data;
            }
        }
        )

    }


    const deleteAlert = (id) => {
        console.log(id);
        AlertService.deleteAlert(id).then(res => {
            console.log(res);
            toast("deleted")
           
            console.log("deleted");
            
        })
        window.location.reload();

    }
    return (
        <div>
            <h3></h3>
            

            
            <div style={{width : '80%',margin : 'auto',marginTop :'50px'}}>
            <MDBBtn onClick={addAlert} style={{marginLeft:'90%',marginBottom:'10px'}}>addAlert</MDBBtn>
                <ToastContainer className="toast-position"
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"><b>Alert ID</b></th>
                            <th scope="col"><b>Description</b></th>
                            <th scope="col"><b>Alert Time</b></th>
                            <th scope="col"><b>Delete</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alertList.map((a) => {
                            return (
                                <tr>
                                    <td style={{width:'40px'}}>{a.id}</td>
                                    <td>{a.desc}</td>
                                    <td style={{width:'120px'}}>{a.alertTime}</td>
                                    <td style={{width:'40px'}}><button className='btn btn-danger' onClick={() => deleteAlert(a.id)}>DELETE</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}


export default Home
