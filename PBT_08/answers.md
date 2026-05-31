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

# Câu A2 — Scope & Closure

## Đoạn 1

```js
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
```

## Dự đoán output

```text
1
2
3
2
2
```

## Giải thích

Khi gọi:

```js
const c = counter();
```

hàm `counter()` tạo ra biến:

```js
let count = 0;
```

Sau đó trả về object gồm 3 hàm:

```js
increment
decrement
getCount
```

Ba hàm này vẫn nhớ và sử dụng được biến `count` bên trong `counter()`.

Đây gọi là **closure**.

## Phân tích từng dòng

```js
console.log(c.increment());
```

`count` tăng từ 0 lên 1.

Kết quả:

```text
1
```
```js
console.log(c.increment());
```

`count` tăng từ 1 lên 2.

Kết quả:

```text
2
```
```js
console.log(c.increment());
```

`count` tăng từ 2 lên 3.

Kết quả:

```text
3
```
```js
console.log(c.decrement());
```

`count` giảm từ 3 xuống 2.

Kết quả:

```text
2
```
```js
console.log(c.getCount());
```

Lấy giá trị hiện tại của `count`.

Kết quả:

```text
2
```

# Đoạn 2

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

## Dự đoán output sau 200ms

```text
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```
# Giải thích var trong setTimeout

Vòng lặp:

```js
for (var i = 0; i < 3; i++)
```

`var` có **function scope**, không có block scope.

Điều đó có nghĩa là cả 3 lần `setTimeout` đều dùng chung một biến `i`.

Khi vòng lặp chạy xong:

```js
i = 3
```

Sau 100ms, các callback mới chạy. Lúc đó `i` đã bằng 3.

Vì vậy in ra:

```text
var: 3
var: 3
var: 3
```

# Giải thích let trong setTimeout

Vòng lặp:

```js
for (let j = 0; j < 3; j++)
```

`let` có **block scope**.

Mỗi lần lặp sẽ tạo ra một biến `j` riêng.

Nên các callback ghi nhớ từng giá trị khác nhau:

```text
j = 0
j = 1
j = 2
```

Sau 200ms, kết quả là:

```text
let: 0
let: 1
let: 2
```
# Kết luận

## var

```js
var
```

- Có function scope
- Dùng chung một biến trong vòng lặp
- Dễ gây lỗi khi dùng với callback bất đồng bộ như `setTimeout`

## let

```js
let
```

- Có block scope
- Mỗi vòng lặp có một biến riêng
- Phù hợp hơn khi dùng trong vòng lặp

Vì vậy trong JavaScript hiện đại, nên dùng:

```js
let
```

thay cho:

```js
var
```

trong vòng lặp.
# Câu A3 — Array Methods

## Mảng ban đầu

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## 1. Lấy các số chẵn

Kết quả:

```js
[2, 4, 6, 8, 10]
```

Code:

```js
nums.filter(n => n % 2 === 0);
```

## 2. Nhân mỗi số với 3

Kết quả:

```js
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
```

Code:

```js
nums.map(n => n * 3);
```


## 3. Tính tổng tất cả

Kết quả:

```js
55
```

Code:

```js
nums.reduce((sum, n) => sum + n, 0);
```

## 4. Tìm số đầu tiên lớn hơn 7

Kết quả:

```js
8
```

Code:

```js
nums.find(n => n > 7);
```

## 5. Kiểm tra có số nào lớn hơn 10 không

Kết quả:

```js
false
```

Code:

```js
nums.some(n => n > 10);
```

## 6. Kiểm tra tất cả đều lớn hơn 0

Kết quả:

```js
true
```

Code:

```js
nums.every(n => n > 0);
```

## 7. Tạo mảng "Số X là chẵn/lẻ"

Kết quả:

```js
[
  "Số 1 là lẻ",
  "Số 2 là chẵn",
  "Số 3 là lẻ",
  ...
]
```

Code:

```js
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
```

## 8. Đảo ngược mảng (không làm thay đổi mảng gốc)

Kết quả:

```js
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

Code:

```js
[...nums].reverse();
```

# Bảng tổng hợp

| Yêu cầu | Array Method |
|----------|-------------|
| Lọc số chẵn | filter() |
| Nhân mỗi phần tử | map() |
| Tính tổng | reduce() |
| Tìm phần tử đầu tiên | find() |
| Kiểm tra tồn tại | some() |
| Kiểm tra tất cả | every() |
| Chuyển đổi dữ liệu | map() |
| Đảo mảng không mutate | spread + reverse() |


# Kết luận

Các phương thức mảng quan trọng nhất:

```js
filter()
map()
reduce()
find()
some()
every()
```

Giúp xử lý dữ liệu ngắn gọn, dễ đọc và thường được sử dụng trong JavaScript hiện đại.