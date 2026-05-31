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

# Câu A2 — Data Types & Coercion

## Dự đoán kết quả

### 1.

```js
console.log(typeof null);
```

Kết quả:

```text
object
```
### 2.

```js
console.log(typeof undefined);
```

Kết quả:

```text
undefined
```

### 3.

```js
console.log(typeof NaN);
```

Kết quả:

```text
number
```

### 4.

```js
console.log("5" + 3);
```

Kết quả:

```text
53
```

### 5.

```js
console.log("5" - 3);
```

Kết quả:

```text
2
```
### 6.

```js
console.log("5" * "3");
```

Kết quả:

```text
15
```
### 7.

```js
console.log(true + true);
```

Kết quả:

```text
2
```

### 8.

```js
console.log([] + []);
```

Kết quả:

```text
""
```

(chuỗi rỗng)

### 9.

```js
console.log([] + {});
```

Kết quả:

```text
[object Object]
```

### 10.

```js
console.log({} + []);
```

Kết quả:

```text
[object Object]
```
# File data_types.js

Tạo file:

```text
data_types.js
```

Nội dung:

```js
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");

console.log(true + true);

console.log([] + []);
console.log([] + {});
console.log({} + []);
```
# Cách chạy

```bash
node data_types.js
```

# Kết quả thực tế

```text
object
undefined
number
53
2
15
2

[object Object]
[object Object]
```

# Giải thích

## typeof null

```js
typeof null
```

Kết quả:

```text
object
```

Đây là lỗi lịch sử của JavaScript từ những phiên bản đầu tiên và vẫn được giữ lại để đảm bảo tương thích.

---

## typeof undefined

```js
typeof undefined
```

Kết quả:

```text
undefined
```

Vì undefined là một kiểu dữ liệu riêng.

## typeof NaN

```js
typeof NaN
```

Kết quả:

```text
number
```

Mặc dù NaN nghĩa là:

```text
Not a Number
```

nhưng trong JavaScript nó vẫn thuộc kiểu dữ liệu Number.

## Tại sao "5" + 3 khác "5" - 3 ?

### Trường hợp 1

```js
"5" + 3
```

Toán tử:

```text
+
```

ưu tiên nối chuỗi khi có ít nhất một toán hạng là string.

JavaScript tự chuyển:

```js
3 -> "3"
```

Thành:

```js
"5" + "3"
```

Kết quả:

```text
53
```

### Trường hợp 2

```js
"5" - 3
```

Toán tử:

```text
-
```

không dùng để nối chuỗi.

JavaScript buộc phải chuyển:

```js
"5" -> 5
```

Thành:

```js
5 - 3
```

Kết quả:

```text
2
```
## Tại sao "5" * "3" = 15 ?

```js
"5" * "3"
```

Toán tử nhân chỉ làm việc với số.

JavaScript tự ép kiểu:

```js
"5" -> 5
"3" -> 3
```

Thành:

```js
5 * 3
```

Kết quả:

```text
15
```

## Tại sao true + true = 2 ?

Khi tham gia phép toán số học:

```js
true -> 1
false -> 0
```

Nên:

```js
true + true
```

=

```js
1 + 1
```

=

```text
2
```

## Tại sao [] + [] = "" ?

Mỗi mảng rỗng được chuyển thành chuỗi rỗng:

```js
[].toString()
```

=

```text
""
```

Nên:

```js
"" + ""
```

=

```text
""
```

## Tại sao [] + {} = "[object Object]" ?

JavaScript chuyển:

```js
[] -> ""
{} -> "[object Object]"
```

Nên:

```js
"" + "[object Object]"
```

=

```text
[object Object]
```

## Tại sao {} + [] = "[object Object]" ?

Trong nhiều môi trường JavaScript hiện đại:

```js
{} + []
```

được hiểu là:

```js
"[object Object]" + ""
```

Kết quả:

```text
[object Object]
```

Đây là ví dụ nổi tiếng cho thấy JavaScript có cơ chế ép kiểu khá phức tạp.

# Câu A3 — So sánh == vs ===

## Dự đoán kết quả

### 1.

```js
console.log(5 == "5");
```

Kết quả:

```text
true
```

### Giải thích

Toán tử `==` cho phép ép kiểu.

JavaScript chuyển:

```js
"5" -> 5
```

Sau đó so sánh:

```js
5 == 5
```

Kết quả:

```text
true
```

### 2.

```js
console.log(5 === "5");
```

Kết quả:

```text
false
```

### Giải thích

`===` so sánh:

- Giá trị
- Kiểu dữ liệu

Ở đây:

```js
5        // number
"5"      // string
```

Khác kiểu dữ liệu.

Kết quả:

```text
false
```

### 3.

```js
console.log(null == undefined);
```

Kết quả:

```text
true
```

### Giải thích

JavaScript có quy tắc đặc biệt:

```js
null == undefined
```

luôn trả về:

```text
true
```

### 4.

```js
console.log(null === undefined);
```

Kết quả:

```text
false
```

### Giải thích

Kiểu dữ liệu khác nhau:

```js
null
undefined
```

nên:

```text
false
```

### 5.

```js
console.log(NaN == NaN);
```

Kết quả:

```text
false
```

### Giải thích

Đây là một tính chất đặc biệt của NaN.

Trong JavaScript:

```js
NaN != NaN
```

và

```js
NaN !== NaN
```

đều đúng.

Muốn kiểm tra NaN phải dùng:

```js
Number.isNaN(value)
```

### 6.

```js
console.log(0 == false);
```

Kết quả:

```text
true
```

### Giải thích

JavaScript ép kiểu:

```js
false -> 0
```

nên:

```js
0 == 0
```

Kết quả:

```text
true
```

### 7.

```js
console.log(0 === false);
```

Kết quả:

```text
false
```

### Giải thích

Khác kiểu dữ liệu:

```js
0       // number
false   // boolean
```

nên:

```text
false
```

### 8.

```js
console.log("" == false);
```

Kết quả:

```text
true
```

### Giải thích

JavaScript ép kiểu:

```js
""      -> 0
false   -> 0
```

nên:

```js
0 == 0
```

Kết quả:

```text
true
```

# Bảng tổng hợp

| Biểu thức | Kết quả |
|------------|----------|
| 5 == "5" | true |
| 5 === "5" | false |
| null == undefined | true |
| null === undefined | false |
| NaN == NaN | false |
| 0 == false | true |
| 0 === false | false |
| "" == false | true |

# Nên dùng == hay === ?

Nên dùng:

```js
===
```

# Tại sao nên dùng === ?

## 1. Không ép kiểu tự động

Ví dụ:

```js
5 === "5"
```

Kết quả:

```text
false
```

vì khác kiểu dữ liệu.

Điều này giúp chương trình dễ hiểu hơn.

## 2. Tránh lỗi khó phát hiện

Ví dụ:

```js
0 == false
```

trả về:

```text
true
```

Trong nhiều trường hợp đây không phải điều lập trình viên mong muốn.

## 3. Code rõ ràng hơn

Khi dùng:

```js
===
```

JavaScript kiểm tra:

- Giá trị
- Kiểu dữ liệu

nên kết quả đáng tin cậy hơn.

# Kết luận

Quy tắc thực tế:

```text
Luôn ưu tiên dùng === và !==
```

Chỉ sử dụng `==` khi thực sự hiểu rõ cơ chế ép kiểu của JavaScript và chủ động muốn sử dụng nó.

# Câu A4 — Truthy & Falsy

## Tất cả giá trị Falsy trong JavaScript

JavaScript chỉ có **8 giá trị Falsy**:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Chi tiết:

| Giá trị | Giải thích |
|----------|------------|
| false | Giá trị boolean false |
| 0 | Số 0 |
| -0 | Số âm 0 |
| 0n | BigInt 0 |
| "" | Chuỗi rỗng |
| null | Không có giá trị |
| undefined | Chưa được gán giá trị |
| NaN | Not a Number |


## Các giá trị còn lại

Tất cả các giá trị không nằm trong danh sách trên đều là Truthy.

Ví dụ:

```js
"0"
"false"
[]
{}
1
-1
" "
true
```

đều là Truthy.


# Dự đoán kết quả

## 1.

```js
if ("0") console.log("A");
```

Kết quả:

```text
A
```

### Giải thích

```js
"0"
```

là chuỗi có ký tự.

Không phải chuỗi rỗng.

→ Truthy

## 2.

```js
if ("") console.log("B");
```

Kết quả:

```text
Không in
```

### Giải thích

```js
""
```

là chuỗi rỗng.

→ Falsy

## 3.

```js
if ([]) console.log("C");
```

Kết quả:

```text
C
```

### Giải thích

Mảng rỗng:

```js
[]
```

vẫn là object.

→ Truthy
## 4.

```js
if ({}) console.log("D");
```

Kết quả:

```text
D
```

### Giải thích

Object rỗng:

```js
{}
```

vẫn là object.

→ Truthy

## 5.

```js
if (null) console.log("E");
```

Kết quả:

```text
Không in
```

### Giải thích

```js
null
```

là Falsy.
## 6.

```js
if (0) console.log("F");
```

Kết quả:

```text
Không in
```

### Giải thích

```js
0
```

là Falsy.

## 7.

```js
if (-1) console.log("G");
```

Kết quả:

```text
G
```

### Giải thích

```js
-1
```

không phải Falsy.

→ Truthy

## 8.

```js
if (" ") console.log("H");
```

Kết quả:

```text
H
```

### Giải thích

```js
" "
```

là chuỗi chứa 1 dấu cách.

Không phải chuỗi rỗng.

→ Truthy

# Bảng tổng hợp

| Biểu thức | Kết quả |
|------------|----------|
| if("0") | In A |
| if("") | Không in |
| if([]) | In C |
| if({}) | In D |
| if(null) | Không in |
| if(0) | Không in |
| if(-1) | In G |
| if(" ") | In H |

# Kết luận

Những trường hợp dễ nhầm nhất:

```js
"0"     // Truthy
[]      // Truthy
{}      // Truthy
" "     // Truthy
```

Nhiều người nghĩ chúng là Falsy nhưng thực tế JavaScript coi tất cả các giá trị trên là Truthy.

Chỉ có 8 giá trị Falsy đã liệt kê ở đầu bài.

# Câu A5 — Template Literals

## Cách 1

### Code gốc

```js
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
```

### Viết bằng Template Literal

```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

## Cách 2

### Code gốc

```js
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
```

### Viết bằng Template Literal

```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

## Cách 3

### Code gốc

```js
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```

### Viết bằng Template Literal

```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

# Ưu điểm của Template Literals

## 1. Code dễ đọc hơn

Thay vì:

```js
"Xin chào " + name + "! Bạn " + age + " tuổi."
```

ta viết:

```js
`Xin chào ${name}! Bạn ${age} tuổi.`
```

ngắn gọn và dễ hiểu hơn

## 2. Hỗ trợ chèn biến trực tiếp

Cú pháp:

```js
${variable}
```

Ví dụ:

```js
let name = "Anh";

console.log(`Xin chào ${name}`);
```

Kết quả:

```text
Xin chào Anh
```

## 3. Hỗ trợ nhiều dòng

Ví dụ:

```js
let text = `
Dòng 1
Dòng 2
Dòng 3
`;
```

Không cần dùng:

```js
"\n"
```

hoặc nối chuỗi bằng dấu `+`.

## 4. Có thể nhúng biểu thức

Ví dụ:

```js
let a = 5;
let b = 3;

console.log(`Tổng = ${a + b}`);
```

Kết quả:

```text
Tổng = 8
```
# Kết luận

Template Literals sử dụng dấu:

```js
`
```

(backtick)

và cú pháp:

```js
${...}
```

để:

- Nối chuỗi dễ dàng
- Chèn biến trực tiếp
- Viết chuỗi nhiều dòng
- Nhúng biểu thức JavaScript

Đây là cách được khuyến nghị sử dụng trong JavaScript hiện đại thay cho nối chuỗi bằng dấu `+`.