# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — DOM Tree

## DOM Tree

```text
div#app
│
├── header
│   │
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       │
│       ├── a.active
│       │   └── "All"
│       │
│       ├── a
│       │   └── "Active"
│       │
│       └── a
│           └── "Completed"
│
└── main
    │
    ├── form#todoForm
    │   │
    │   ├── input#todoInput
    │   │
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        │
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```


# Query Selector

## 1. Chọn thẻ h1

```js
document.querySelector("h1");
```

## 2. Chọn input trong form

```js
document.querySelector("#todoForm input");
```

Hoặc:

```js
document.querySelector("#todoInput");
```

## 3. Chọn tất cả .todo-item

```js
document.querySelectorAll(".todo-item");
```

## 4. Chọn link đang active

```js
document.querySelector("a.active");
```

Hoặc:

```js
document.querySelector("nav a.active");
```

## 5. Chọn li đầu tiên trong #todoList

```js
document.querySelector("#todoList li");
```

Hoặc:

```js
document.querySelector("#todoList li:first-child");
```


## 6. Chọn tất cả a bên trong nav

```js
document.querySelectorAll("nav a");
```

# Bảng tổng hợp

| Yêu cầu | querySelector |
|----------|---------------|
| Chọn h1 | `document.querySelector("h1")` |
| Chọn input trong form | `document.querySelector("#todoForm input")` |
| Chọn tất cả todo-item | `document.querySelectorAll(".todo-item")` |
| Chọn link active | `document.querySelector("a.active")` |
| Chọn li đầu tiên | `document.querySelector("#todoList li:first-child")` |
| Chọn tất cả link trong nav | `document.querySelectorAll("nav a")` |


# Kết luận

Các hàm DOM được dùng nhiều nhất:

```js
document.querySelector()
document.querySelectorAll()
```

Cho phép chọn phần tử bằng:

- Tag name
- Class
- ID
- CSS selector
- Pseudo selector

# Câu A2 — innerHTML vs textContent

## 1. innerHTML là gì?

`innerHTML` dùng để lấy hoặc gán **nội dung HTML** bên trong một element.

Nếu chuỗi có thẻ HTML, trình duyệt sẽ hiểu và render thành HTML thật.

### Ví dụ

```html
<div id="result"></div>
```

```js
document.querySelector("#result").innerHTML = "<strong>Hello</strong>";
```

Kết quả hiển thị:

```text
Hello
```

Chữ `Hello` được in đậm vì `<strong>` được hiểu là thẻ HTML.


## 2. textContent là gì?

`textContent` dùng để lấy hoặc gán **nội dung dạng text thuần**.

Nếu chuỗi có thẻ HTML, trình duyệt không render thẻ đó mà hiển thị như chữ bình thường.

### Ví dụ

```html
<div id="result"></div>
```

```js
document.querySelector("#result").textContent = "<strong>Hello</strong>";
```

Kết quả hiển thị:

```text
<strong>Hello</strong>
```


# Khi nào dùng innerHTML?

Dùng `innerHTML` khi mình **chủ động tạo HTML an toàn**.

Ví dụ:

```js
document.querySelector("#result").innerHTML = `
    <h2>Danh sách sản phẩm</h2>
    <p>Sản phẩm đang giảm giá</p>
`;
```

Nên dùng khi dữ liệu không đến trực tiếp từ người dùng.


# Khi nào dùng textContent?

Dùng `textContent` khi hiển thị dữ liệu do người dùng nhập vào.

Ví dụ:

```js
const userInput = document.querySelector("#search").value;

document.querySelector("#result").textContent = userInput;
```

Cách này an toàn hơn vì trình duyệt chỉ coi dữ liệu là text.

# Bảng so sánh

| Tiêu chí | innerHTML | textContent |
|----------|-----------|-------------|
| Hiểu thẻ HTML | Có | Không |
| Render HTML | Có | Không |
| Hiển thị text thuần | Có thể | Có |
| Nguy cơ XSS | Cao hơn | An toàn hơn |
| Nên dùng với input user | Không nên | Nên |

# Câu hỏi bảo mật: Vì sao innerHTML có thể gây XSS?

XSS là lỗ hổng cho phép kẻ tấn công chèn mã độc vào trang web.

Nếu đưa dữ liệu người dùng nhập trực tiếp vào `innerHTML`, trình duyệt có thể hiểu chuỗi đó như HTML thật.


## Ví dụ nguy hiểm

Giả sử user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

Code nguy hiểm:

```js
const userInput = document.querySelector("#search").value;

document.querySelector("#result").innerHTML = userInput;
```

Khi đó trình duyệt sẽ tạo thẻ:

```html
<img>
```

và chạy sự kiện:

```js
onerror="alert('Hacked!')"
```

Điều này gây nguy hiểm vì mã JavaScript của người dùng có thể được thực thi.

# Cách sửa an toàn

Thay `innerHTML` bằng `textContent`.

```js
const userInput = document.querySelector("#search").value;

document.querySelector("#result").textContent = userInput;
```

Khi đó chuỗi:

```html
<img src=x onerror="alert('Hacked!')">
```

sẽ chỉ được hiển thị như text bình thường, không chạy mã độc.


# Cách khác: tạo element bằng DOM API

```js
const userInput = document.querySelector("#search").value;

const result = document.querySelector("#result");
result.textContent = "";

const p = document.createElement("p");
p.textContent = userInput;

result.appendChild(p);
```

Cách này cũng an toàn vì dữ liệu user được đưa vào bằng `textContent`.

# Kết luận

- Dùng `innerHTML` khi nội dung HTML do lập trình viên kiểm soát.
- Dùng `textContent` khi hiển thị dữ liệu người dùng nhập.
- Không nên đưa trực tiếp input của user vào `innerHTML` vì có thể gây XSS.