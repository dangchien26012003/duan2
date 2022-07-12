var login = [
    {
        User: 'nguoidung',
        Pass: 'a',
        link: "trangchu.html"
    },
    {
        User: 'shipper',
        Pass: 'a',
        link: "shipper.html"
    },
    {
        User: 'quanly',
        Pass: 'a',
        link: "loinhuan.html"
    },
    {
        User: 'doitac',
        Pass: 'a',
        link: "doitac.html"
    },
    {
        User: 'nhanvien',
        Pass: 'a',
        link: "quanlykho.html"
    },
]

function getAcc() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var item = {
        User: user,
        Pass: pass
    }
    if (user != '' && pass != '') {
        login.push(item)
        alert('Đăng kí thành công')
    } else {
        alert('Nhập thông tin đăng kí')
        return
    }
    document.getElementById('user').value = ''
    document.getElementById('pass').value = ''

}

function check() {
    var dem
    // window.location = "trangchu.html";
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    for (var i = 0; i < login.length; i++) {
        if (user == login[i].User && pass == login[i].Pass) {
            window.location = login[i].link;
            dem = 1
        }
    }
    if(dem != 1) {
        alert("Tài khoản mật khẩu không chính xác")
    }
}

function dangky() {
    window.location = "dangky.html";
}