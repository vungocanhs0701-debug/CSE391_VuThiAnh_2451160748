const menu = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

const isWednesday = true;
const hasTip = true;

let tongTien = 0;

console.log("======================================");
console.log("          HÓA ĐƠN NHÀ HÀNG");
console.log("======================================");

for (let i = 0; i < menu.length; i++) {

    const item = menu[i];
    const thanhTien = item.price * item.quantity;

    tongTien += thanhTien;

    console.log(
        (i + 1) + ". " +
        item.name +
        " x" +
        item.quantity +
        " = " +
        thanhTien.toLocaleString() +
        "đ"
    );
}

let tyLeGiam = 0;

if (tongTien > 1000000) {
    tyLeGiam = 15;
}
else if (tongTien > 500000) {
    tyLeGiam = 10;
}

if (isWednesday) {
    tyLeGiam += 5;
}

const tienGiam = tongTien * tyLeGiam / 100;

const sauGiam = tongTien - tienGiam;

const vat = sauGiam * 0.08;

let tip = 0;

if (hasTip) {
    tip = sauGiam * 0.05;
}

const thanhToan = sauGiam + vat + tip;

console.log("--------------------------------------");
console.log(
    "Tổng cộng:      ",
    tongTien.toLocaleString() + "đ"
);

console.log(
    "Giảm giá:       ",
    tienGiam.toLocaleString() + "đ"
);

console.log(
    "VAT (8%):       ",
    vat.toLocaleString() + "đ"
);

console.log(
    "Tip (5%):       ",
    tip.toLocaleString() + "đ"
);

console.log("--------------------------------------");

console.log(
    "THANH TOÁN:     ",
    thanhToan.toLocaleString() + "đ"
);

console.log("======================================");