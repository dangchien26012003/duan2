
data = [
    {
        MaSP: 0001,
        TenSP: 'Bánh tráng',
        SoLuong: 15,
        GiaMua: 10000,
        GiaBan: 20000,
        Date: '2022-07-06',
        NgayNhap: '2022-07-01',
        NhaCC: "NCC1"
    },
    {
        MaSP: 0002,
        TenSP: 'Bánh tráng',
        SoLuong: 0,
        GiaMua: 10000,
        GiaBan: 0,
        Date: '2022-07-06',
        NgayNhap: '2022-07-01',
        NhaCC: "NCC1"
    },
    {
        MaSP: 0003,
        TenSP: 'Bánh tráng',
        SoLuong: 7,
        GiaMua: 0,
        GiaBan: 20000,
        Date: '',
        NgayNhap: '2022-07-01',
        NhaCC: "NCC2"
    },
    {
        MaSP: 0004,
        TenSP: 'Bánh tráng',
        SoLuong: 8,
        GiaMua: 10000,
        GiaBan: 20000,
        Date: '2022-07-06',
        NgayNhap: '2022-07-01',
        NhaCC: "NCC2"
    },
    {
        MaSP: 0005,
        TenSP: 'Bánh tráng',
        SoLuong: 15,
        GiaMua: 10000,
        GiaBan: 20000,
        Date: '2022-07-06',
        NgayNhap: '2022-07-01',
        NhaCC: "NCC1"
    },

]


function render() {

    var table =
    `
    <tr>
    <th>STT</th>
    <th>Mã SP</th>
    <th>Tên SP</th>
    <th>Số Lượng</th>
    <th>Giá Mua</th>
    <th>Giá Bán</th>
    <th>Date</th>
    <th>Ngày Nhập</th>
    <th>Nhà cung cấp</th>
    </tr>
    `

    for (var i = 0; i < data.length; i++) {
        table += `
        <tr>
        <td>${1+i}</td>
        <td>${data[i].MaSP}</td>
        <td>${data[i].TenSP}</td>
        <td>${data[i].SoLuong}</td>
        <td>${data[i].GiaMua}</td>
        <td>${data[i].GiaBan}</td>
        <td>${data[i].Date}</td>
        <td>${data[i].NgayNhap}</td>
        <td>${data[i].NhaCC}</td>
        </tr>
        `
    };

    document.getElementById('render').innerHTML = table;
}

render();

;(function () {
    let tongSanPham = data.length;
    let sapHetHang = 0
    let hetHang = 0
    let date = 0
    let giaMua = 0
    let giaBan = 0
    for (var i = 0; i < tongSanPham; i++) {
        if(data[i].SoLuong <= 0) {
            hetHang++
        }
        if(data[i].SoLuong <= 9 && data[i].SoLuong > 0) {
            sapHetHang++
        }
        if(data[i].Date == false) {
            date++
        }
        if(data[i].GiaMua == false) {
            giaMua++
        }
        if(data[i].GiaBan == false) {
            giaBan++
        }
    }

    document.getElementById('tongkho').value = tongSanPham
    document.getElementById('hethang').value = hetHang
    document.getElementById('saphethang').value = sapHetHang
    document.getElementById('notdate').value = date
    document.getElementById('notgiaban').value = giaBan
    document.getElementById('notgiamua').value = giaMua
})()

function timKiem() {
    var timMa = document.getElementById('timma').value;
    var timTen = document.getElementById('timten').value;
    var timNgayNhap = document.getElementById('timngaynhap').value;
    var timNhaCC = document.getElementById('timnhacc').value;

    var dataLook = []
    var length = data.length
    for(var i = 0; i < length; i++) {
        if (timMa == data[i].MaSP || timTen == data[i].TenSP || timNgayNhap == data[i].NgayNhap || timNhaCC == data[i].NhaCC) {
            dataLook.push(data[i])
        }
    }
    if(dataLook.length == 0) {
        alert('Không tìm thấy')
        return
    }
    tabletimkiem = `
    <tr>
    <th>STT</th>
    <th>Mã SP</th>
    <th>Tên SP</th>
    <th>Số Lượng</th>
    <th>Giá Mua</th>
    <th>Giá Bán</th>
    <th>Date</th>
    <th>Ngày Nhập</th>
    <th>Nhà cung cấp</th>
    </tr>
    `
    var length1 = dataLook.length;
    for (var i = (length1 - 1); i >= 0; i--) {
        tabletimkiem += `
        <tr>
        <th>${1+i}</th>
        <th>${dataLook[i].MaSP}</th>
        <th>${dataLook[i].TenSP}</th>
        <th>${dataLook[i].SoLuong}</th>
        <th>${dataLook[i].GiaMua}</th>
        <th>${dataLook[i].GiaBan}</th>
        <th>${dataLook[i].Date}</th>
        <th>${dataLook[i].NgayNhap}</th>
        <th>${dataLook[i].NhaCC}</th>
        </tr>
        `
    }
    document.getElementById("timkiem").innerHTML = tabletimkiem
}

function xoaTimKiem() {
    huytimkiem = `
    <tr>
    <th>STT</th>
    <th>ID khách hàng</th>
    <th>Mã đơn hàng</th>
    <th>Tên món</th>
    <th>Địa chỉ</th>
    <th>Số điện thoại</th>
    <th>Phí ship</th>
    <th>Tổng giá</th>
    <th>Ngày mua</th>
    <th>Ghi chú KH</th>
    <th>Ghi chú</th>
    </tr>
    `
    document.getElementById('timkiem').innerHTML = huytimkiem
}


$('.img').click(function () {
    $(this).parent().toggleClass('active')
    $('.ketqua').slideToggle()

})