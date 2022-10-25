let checkLogin = localStorage.getItem('booLogin');
if (checkLogin == 'true') {

    let getIdUser = document.getElementById('user');
    let getIndexLogin = Number(localStorage.getItem('indexLogin'));
    let arrUser = JSON.parse(localStorage.getItem('information'));
    let userName = arrUser[getIndexLogin].username;
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
    let changePass = document.getElementById("changePassword");
    changePass.setAttribute("style", "display:block;z-index:1");
}
function hideBox() {
    let changePass = document.getElementById("changePassword");
    changePass.setAttribute("style", "display: none");
}
// thay đôi pass word
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
    } else {
        error.setAttribute("style", "display: none");
    }
    let errorNew = document.getElementById("errorNew");
    if (newPass.length < 6 || newPass == password) {
        errorNew.setAttribute("style", "display: block; color: yellow");
    } else {
        errorNew.setAttribute("style", "display: none");
    }
    let errorReNew = document.getElementById("errorReNew");
    if (reNewPass != newPass) {
        errorReNew.setAttribute("style", "display: block; color: yellow");
    } else {
        errorReNew.setAttribute("style", "display: none");
    }

    if (password != getInformation[index].password && password !== newPass && newPass.length >= 6 && reNewPass === newPass) {
        getInformation[index].password = newPass;
        localStorage.setItem('information', JSON.stringify(getInformation));
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

let dataCart = JSON.parse(localStorage.getItem("cart"));    // Tạo 1 biến có giá trị là mảng thông tin lấy về từ local
let data = document.getElementsByClassName("productSelect");
for (let index = 0; index < dataCart.length; index++) {
    data[0].innerHTML += 
    `
    <div class="item">
        <img src="${dataCart[index][0].image}" alt="">
        <h2 class="title">${dataCart[index][0].name}</h2>
        <p class="price">${new Intl.NumberFormat('de-DE').format(dataCart[index][0].price)} đ</p>
        <p class="unit"><i class="fa-solid fa-circle-minus"></i>&ensp;${dataCart[index][1]}&ensp;<i class="fa-solid fa-circle-plus"></i></span></p>
        <p class="total">${new Intl.NumberFormat('de-DE').format(dataCart[index][1] * dataCart[index][0].price)} đ</p>
        <button class="remove">Remove</button>
    </div>
    `
    
}
// Xóa giỏ hàng
let remove = document.getElementsByClassName("remove");
for (let index = 0; index < remove.length; index++) {
    remove[index].onclick = function () {
        dataCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(dataCart));
        window.location.reload();
    }
}
// Tăng số lượng trong giỏ hàng
let add = document.getElementsByClassName("fa-circle-plus");
for (let index = 0; index < add.length; index++) {
    add[index].onclick = function () {
        dataCart[index][1]++;
        localStorage.setItem("cart", JSON.stringify(dataCart));
        window.location.reload();
    }

}

// Giảm số lượng trong giỏ hàng
let minus = document.getElementsByClassName("fa-circle-minus");
for (let index = 0; index < minus.length; index++) {
    minus[index].onclick = function () {
        if (dataCart[index][1] > 0) {
            dataCart[index][1]--;
            localStorage.setItem("cart", JSON.stringify(dataCart));
            window.location.reload();
        } else {
            dataCart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(dataCart));
            window.location.reload();
        }
    }
}

let total = 0;
for (let index = 0; index < dataCart.length; index++) {
    total += dataCart[index][0].price * dataCart[index][1];
}
let totalPrint = document.getElementById("total");
totalPrint.innerHTML = `<h1>TỔNG: ${new Intl.NumberFormat('de-DE').format(total)} đ</h1>`

function showCart() {
    let show = document.getElementById("userCart");
    show.setAttribute("style", "display: block");
    document.querySelector('#hidden-bnt-tt ').style.display = 'none'
}
function hide() {
    let hide = document.getElementById("userCart");
    hide.setAttribute("style", "display: none");
    document.querySelector('#hidden-bnt-tt ').style.display = 'block'
}

//check dữ liệu thanh toán
function validate(){
    var regName =/^[a-zA-Z\-]+$/;
    var name = document.getElementById('name').value;
    var phone = document.getElementById("phoneNumber").value;
    let showSpan1 = document.getElementsByClassName('errorName')[0];
    
    
    if(name.match(regName)){ 
        showSpan1.setAttribute("style", "display: none");
    }else{
        showSpan1.style.display = 'block'
    }
   let showSpan2 = document.getElementsByClassName("errorNumber")[0];
   var regPhone = /\(?([0-9]{3})\)?([ .]?)([0-9]{3})\2([0-9]{4})/;
   if (phone.match(regPhone)) {
    showSpan2.setAttribute("style", "display: none");
    
   }else {
    showSpan2.setAttribute("style", "display: block");
   }
   if(name.match(regName) && phone.match(regPhone)) {
        alert('thanh toan thanh cong')
        localStorage.setItem('cart',null)
   }


}




