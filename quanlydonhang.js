var data = [
    {
        ID: "KH00001",
        MaDon: "DH00001",
        TenMon: "Bánh mì chả ruốc(20.000đ)",
        DiaChi: "Nam Từ Liêm",
        SDT: "0333845203",
        PhiShip: 20000,
        TongGia: 20000,
        NgayMua: "2022-07-01",
        GhiChuKH: "",
        GhiChu: "MGG: 01"
    },
    {
        ID: "KH00002",
        MaDon: "DH00002",
        TenMon: "Bánh mì chả ruốc(20.000đ)",
        DiaChi: "Nam Từ Liêm",
        SDT: "0333845207",
        PhiShip: 20000,
        TongGia: 20000,
        NgayMua: "2022-07-01",
        GhiChuKH: "",
        GhiChu: "MGG: 01"
    },
    {
        ID: "KH00003",
        MaDon: "DH00003",
        TenMon: "Bánh mì chả ruốc(20.000đ)",
        DiaChi: "Nam Từ Liêm",
        SDT: "0333845205",
        PhiShip: 20000,
        TongGia: 20000,
        NgayMua: "2022-07-01",
        GhiChuKH: "",
        GhiChu: "huy"
    },
    {
        ID: "KH00003",
        MaDon: "DH00004",
        TenMon: "MatCha đá xay(20.000đ)",
        DiaChi: "Nam Từ Liêm",
        SDT: "0333845205",
        PhiShip: 20000,
        TongGia: 30000,
        NgayMua: "2022-07-02",
        GhiChuKH: "MatCha đá xay không đá",
        GhiChu: "MGG: 01"
    },
]

setTimeout(intable, 500)

function intable() {
    table = `
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
    var length = data.length;
    for (var i = 0; i < length; i++) {
        table += `
        <tr>
        <td>${1 + i}</td>
        <td>${data[i].ID}</td>
        <td>${data[i].MaDon}</td>
        <td>${data[i].TenMon}</td>
        <td>${data[i].DiaChi}</td>
        <td>${data[i].SDT}</td>
        <td>${data[i].PhiShip}</td>
        <td>${data[i].TongGia}</td>
        <td>${data[i].NgayMua}</td>
        <td>${data[i].GhiChuKH}</td>
        <td>${data[i].GhiChu}</td>
        </tr>
        <tr>
        `
    }
    document.getElementById("render").innerHTML = table
}

function timKiem() {
    var timma = document.getElementById('timma').value;
    var id = document.getElementById('timid').value;
    var sdt = document.getElementById('timsdt').value;
    var date = document.getElementById('timdate').value;

    var datatimkiem = []
    var length = data.length
    for(var i = 0; i < length; i++) {
        if (timma == data[i].MaDon || id == data[i].ID || sdt == data[i].SDT || date == data[i].NgayMua) {
            datatimkiem.push(data[i])
        }
    }
    if(datatimkiem.length == 0) {
        alert('Không tìm thấy')
        return
    }
    tabletimkiem = `
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
    var length1 = datatimkiem.length;
    for (var i = (length1 - 1); i >= 0; i--) {
        tabletimkiem += `
        <tr>
        <th>${1 + i}</th>
        <th>${datatimkiem[i].ID}</th>
        <th>${datatimkiem[i].MaDon}</th>
        <th>${datatimkiem[i].TenMon}</th>
        <th>${datatimkiem[i].DiaChi}</th>
        <th>${datatimkiem[i].SDT}</th>
        <th>${datatimkiem[i].PhiShip}</th>
        <th>${datatimkiem[i].TongGia}</th>
        <th>${datatimkiem[i].NgayMua}</th>
        <th>${datatimkiem[i].GhiChuKH}</th>
        <th>${datatimkiem[i].GhiChu}</th>
        </tr>
        `
    }
    document.getElementById("timkiem").innerHTML = tabletimkiem
}

function huyTimKiem() {
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

setTimeout(thongtin, 500)
function thongtin() {
    var demhuy = 0
    var demdonngay = 0
    var tienngay = 0
    var length = data.length
    document.getElementById('tongdon').innerHTML = length

    // var date = new Date()
    // var year = date.getFullYear()
    // var month = date.getMonth() + 1
    // var day = date.getDate()
    // var ngay = `${year}-${month}-${day}`
    ngay = "2022-07-01"
    for(var i = 0; i < length; i++) {
        if(data[i].GhiChu == "huy") {
            ++demhuy
        }
        if(data[i].NgayMua == ngay) {
            ++demdonngay
        }
        if(data[i].GhiChu != 'huy') {
            tienngay += (data[i].PhiShip + data[i].TongGia)
        }
        
    }
    tienngay+= 'đ'

    document.getElementById('huydon').innerHTML = demhuy
    document.getElementById('donngay').innerHTML = demdonngay
    document.getElementById('tongtienngay').innerHTML = tienngay
}

$('.img').click(function () {
    $('.tieude').toggleClass('active')
    $('.ketqua').slideToggle()
})