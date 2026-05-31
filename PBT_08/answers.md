# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — Function Declaration vs Expression vs Arrow Function

## Yêu cầu

Tính:

- Thuế = 10% nếu lương > 11.000.000
- Thuế = 0% nếu lương ≤ 11.000.000

Trả về object:

```js
{
    thue,
    thuc_nhan
}
```

# 1. Function Declaration

```js
function tinhThueBaoHiem(luong) {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}
```

Ví dụ:

```js
console.log(tinhThueBaoHiem(15000000));
```

Kết quả:

```js
{
    thue: 1500000,
    thuc_nhan: 13500000
}
```

# 2. Function Expression

```js
const tinhThueBaoHiem2 = function (luong) {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
```

Ví dụ:

```js
console.log(tinhThueBaoHiem2(15000000));
```

# 3. Arrow Function

```js
const tinhThueBaoHiem3 = (luong) => {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
```

Ví dụ:

```js
console.log(tinhThueBaoHiem3(15000000));
```

# So sánh Hoisting

## Function Declaration

Có hoisting hoàn toàn.

Ví dụ:

```js
console.log(cong(2, 3));

function cong(a, b) {
    return a + b;
}
```

Kết quả:

```text
5
```

Vẫn chạy được mặc dù gọi hàm trước khi khai báo.

## Function Expression

Không hoisting phần giá trị hàm.

Ví dụ:

```js
console.log(cong(2, 3));

const cong = function(a, b) {
    return a + b;
};
```

Kết quả:

```text
ReferenceError
```

## Arrow Function

Hoạt động giống Function Expression.

Ví dụ:

```js
console.log(cong(2, 3));

const cong = (a, b) => a + b;
```

Kết quả:

```text
ReferenceError
```

# Bảng so sánh

| Tiêu chí | Function Declaration | Function Expression | Arrow Function |
|-----------|---------------------|---------------------|----------------|
| Cú pháp | function tenHam() | const tenHam = function() | const tenHam = () => |
| Hoisting | Có | Không | Không |
| Gọi trước khai báo | Được | Không | Không |
| Ngắn gọn | Trung bình | Trung bình | Ngắn gọn nhất |
| this | this riêng | this riêng | Kế thừa this bên ngoài |

# Kết luận

- Function Declaration được hoisting hoàn toàn nên có thể gọi trước khi khai báo.
- Function Expression và Arrow Function không thể gọi trước khi khai báo.
- Trong JavaScript hiện đại, Arrow Function thường được sử dụng nhiều nhất vì cú pháp ngắn gọn và dễ đọc.