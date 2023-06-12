
 class SessionStorage {
    StoreUser(userid) {
        sessionStorage.setItem("userid",userid);
    }


}
export default new SessionStorage(); 