function showProduct() {
    let list = document.getElementById("list-product");
    let listShow = "";
    for (let i = 0; i < com.length; i++) {
        listShow +=
            `
        <div class="grid-item">
        <h2 class="product-com_name">${com[i].name}</h2>
         <div class="product-com_img"><img src="${com[i].image}" class="" alt=""></div>
         <div class="product-com_windows">${com[i].windows}</div>
         <div class="product-com_CPU">${com[i].CPU}</div>
         <div class="product-com_RAM">${com[i].RAM}</div>
         <div class="product-com_GPU">${com[i].GPU}</div>
         <div class="product-com_SSD">${com[i].SSD}}</div>
         <h3 class="product-com_price1">${com[i].price1}</h3><hr>
         <button class = "addToCart">Thêm vào giỏ hàng</button>
    </div> 
        `
    }
    list.innerHTML = listShow;
}
showProduct();
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
    let changePass=document.getElementById("changePassword");
    changePass.setAttribute("style","display:block;z-index:1");
}
function hideBox() {
    let changePass=document.getElementById("changePassword");
    changePass.setAttribute("style","display: none");
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
  
    if (password !== newPass && newPass.length>=6 && reNewPass === newPass) {
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


let a = document.querySelectorAll(".addToCart")         // Gọi button có class là addToCart
let dataCom = JSON.parse(localStorage.getItem("data-com"));
for (let i = 0; i < a.length; i++) {
    a[i].onclick = function () {
        let cartArr = JSON.parse(localStorage.getItem("cart"));
        if (cartArr == null) {
            cartArr = [];
            cartArr.push([dataCom[i],1]);
        }else {
            let flag = 0;
            for (let index = 0; index < cartArr.length; index++) {
                if (dataCom[i].id === cartArr[index][0].id) {
                    cartArr[index][1]++;
                    flag = 1;
                }    
            }
            if (flag == 0) {
                cartArr.push([dataCom[i], 1]);
            }
        }
        localStorage.setItem("cart",JSON.stringify(cartArr));
        alert(`Đã thêm thành công ${dataCom[i].name} vào giỏ hàng`)
    }
}

