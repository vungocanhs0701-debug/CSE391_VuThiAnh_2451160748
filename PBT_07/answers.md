# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — var / let / const

## Đoạn 1

```js
console.log(x);
var x = 5;
```

### Dự đoán output

```text
undefined
```

### Giải thích

Biến khai báo bằng `var` có hoisting.  
Nghĩa là phần khai báo `var x` được đưa lên đầu, nhưng giá trị `5` chưa được gán.

Đoạn code được hiểu gần giống:

```js
var x;
console.log(x);
x = 5;
```

Vì vậy kết quả là:

```text
undefined
```

## Đoạn 2

```js
console.log(y);
let y = 10;
```

### Dự đoán output

```text
ReferenceError
```

### Giải thích

Biến khai báo bằng `let` cũng có hoisting nhưng nằm trong vùng gọi là Temporal Dead Zone.

Không thể truy cập biến `let` trước khi khai báo.

Vì vậy chương trình báo lỗi:

```text
ReferenceError: Cannot access 'y' before initialization
```
## Đoạn 3

```js
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán output

```text
TypeError
```

### Giải thích

Biến khai báo bằng `const` không được phép gán lại giá trị.

Dòng:

```js
z = 20;
```

sẽ gây lỗi.

Vì vậy `console.log(z)` không được chạy.

## Đoạn 4

```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Dự đoán output

```text
[1, 2, 3, 4]
```

### Giải thích

`const` không cho phép gán lại biến, nhưng nếu biến là array hoặc object thì vẫn có thể thay đổi nội dung bên trong.

Ở đây:

```js
arr.push(4);
```

không gán lại `arr`, mà chỉ thêm phần tử vào mảng.

Vì vậy kết quả là:

```text
[1, 2, 3, 4]
```

## Đoạn 5

```js
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```

### Dự đoán output

```text
Trong block: 2
Ngoài block: 1
```

### Giải thích

`let` có block scope, nghĩa là biến chỉ tồn tại trong cặp dấu `{ }`.

Biến `a` bên trong block là biến khác với biến `a` bên ngoài.

Vì vậy:

- Trong block: `a = 2`
- Ngoài block: `a = 1`

# File var_let_const.js

Tạo file:

```text
var_let_const.js
```

Nội dung:

```js
// Đoạn 1
console.log("Đoạn 1:");
console.log(x);
var x = 5;

// Đoạn 2
console.log("Đoạn 2:");
try {
    console.log(y);
    let y = 10;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Đoạn 3
console.log("Đoạn 3:");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Đoạn 4
console.log("Đoạn 4:");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5
console.log("Đoạn 5:");
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```
# Cách chạy file

Mở terminal tại thư mục chứa file rồi chạy:

```bash
node var_let_const.js
```
# So sánh kết quả

| Đoạn | Dự đoán | Kết quả chạy | Nhận xét |
|---|---|---|---|
| 1 | undefined | undefined | Đúng |
| 2 | ReferenceError | ReferenceError | Đúng |
| 3 | TypeError | TypeError | Đúng |
| 4 | [1, 2, 3, 4] | [1, 2, 3, 4] | Đúng |
| 5 | Trong block: 2 / Ngoài block: 1 | Trong block: 2 / Ngoài block: 1 | Đúng |

# Các kết quả bất ngờ

## 1. var in ra undefined thay vì lỗi

`var` bị hoisting nên biến tồn tại trước khi gán giá trị.  
Vì vậy khi log trước khi gán, kết quả là `undefined`.

## 2. let bị lỗi nếu truy cập trước khai báo

`let` không cho phép truy cập trước khi khai báo do Temporal Dead Zone.

## 3. const array vẫn push được

`const` chỉ không cho gán lại biến.  
Nội dung bên trong array vẫn có thể thay đổi.
