//Nhận dữ liệu của biến booLogin từ localStorage
let checkLogin = localStorage.getItem('booLogin');
if (checkLogin == 'true') {
    //Nhận thông tin của thẻ span có id là user
    let getIdUser = document.getElementById('user');
    //Nhận dữ liệu của biến indexLogin từ localStorage và ép về kiểu dữ liệu Number
    let getIndexLogin = Number(localStorage.getItem('indexLogin'));
    //Nhận dữ liệu của biến information từ localStorage và ép về kiểu mảng
    let arrUser = JSON.parse(localStorage.getItem('information'));
    //Nhận dữ liệu của biến username trong mảng arrUser qua chỉ số getIndexLogin
    let userName = arrUser[getIndexLogin].username;
    //Gán cho nội dung của thẻ span có id là user bằng user bằng userNam vừa nhận ở trên
    getIdUser.innerHTML = userName;    
}
function entry(event, input) {
    if (event.key == "Enter") {
        let idInput = document.getElementById(input);
        idInput.focus();
    }
}
function entry1(event) {
    if (event.key == "Enter") {
        changePass();
    }
}
function showBox() {
    let changePass=document.getElementById("changePassword");
    changePass.setAttribute("style","display:block");
}
function hideBox() {
    let changePass=document.getElementById("changePassword");
    changePass.setAttribute("style","display: none");
}
function changePass() {
    let index = localStorage.getItem("indexLogin");
    let getInformation = localStorage.getItem("information");
    getInformation = JSON.parse(getInformation);
    let password = document.getElementById("password").value;
    let newPass = document.getElementById("newPass").value;
    let reNewPass = document.getElementById("reNewPass").value;
  
 
    let error = document.getElementById("error");
    if (password != getInformation[index].password) {
        error.setAttribute("style", "display: block; color: yellow"); 
    }else {
        error.setAttribute("style", "display: none");
    }
    let errorNew = document.getElementById("errorNew");
    if (newPass.length < 6 || newPass == password) {
        errorNew.setAttribute("style", "display: block; color: yellow");
    }else{
        errorNew.setAttribute("style", "display: none");
    }
    let errorReNew = document.getElementById("errorReNew");
    if (reNewPass != newPass) {
        errorReNew.setAttribute("style", "display: block; color: yellow");
    }else {
        errorReNew.setAttribute("style", "display: none");
    }
  
    console.log(password != newPass && newPass.length>=6 && reNewPass == newPass);
    if (password != getInformation[index].password && password !== newPass && newPass.length>=6 && reNewPass === newPass) {
        getInformation[index].password = newPass;
        localStorage.setItem('information',JSON.stringify(getInformation));
        window.location.href = "home.html";
    }
}

function logOut() {
 localStorage.setItem("booLogin", false)
 window.location.href = "/login.html";
}

function showPassword() {
    let password = document.getElementById("password");
    let icon = document.getElementById("icon");
    if (password.type == "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function showNewPassword() {
    let newPassword = document.getElementById("newPass");
    let newIcon = document.getElementById("newIcon");
    if (newPassword.type == "password") {
        newPassword.type = "text";
        newIcon.classList.remove("fa-eye");
        newIcon.classList.add("fa-eye-slash");
    } else {
        newPassword.type = "password";
        newIcon.classList.remove("fa-eye-slash");
        newIcon.classList.add("fa-eye");
    }
}
function showConfirmPassword() {
    let showConfirmPassword = document.getElementById("reNewPass");
    let iconClose = document.getElementById("iconClose");
    if (showConfirmPassword.type == "password") {
        showConfirmPassword.type = "text";
        iconClose.classList.remove("fa-eye");
        iconClose.classList.add("fa-eye-slash");
    } else {
        showConfirmPassword.type = "password";
        iconClose.classList.remove("fa-eye-slash");
        iconClose.classList.add("fa-eye");
    }
}
