# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — 3 Cách Nhúng CSS

## 1. Inline CSS

### Ví dụ

```html
<p style="color: red; font-size: 20px;">
    Hello World
</p>
```
Ưu điểm
- Nhanh, đơn giản
- Có thể sửa trực tiếp cho 1 phần tử
- Không cần file CSS riêng
Nhược điểm
- Khó bảo trì
- Dễ lặp code
- Không tái sử dụng được
- Làm HTML khó đọc
Khi nào nên dùng
- Test nhanh
- Style tạm thời
- Chỉnh riêng 1 element
## 2. Internal CSS
### Ví dụ
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```
Ưu điểm
- Quản lý CSS tập trung trong 1 file HTML
- Không cần tạo file CSS riêng
- Dễ viết hơn inline CSS
Nhược điểm
- File HTML dài
- Không tái sử dụng được cho nhiều trang
- Khó bảo trì khi project lớn
## 3. External CSS
### Ví dụ
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
```css
p {
    color: green;
    font-size: 18px;
}
```
Ưu điểm
- Dễ bảo trì
- Tái sử dụng nhiều trang
- HTML gọn gàng
- Browser có thể cache CSS giúp tải nhanh hơn
Nhược điểm
- Cần tạo thêm file CSS
- Nếu link sai thì CSS không hoạt động
Khi nào nên dùng
- Website thực tế
- Dự án lớn
- Website nhiều trang
## Câu hỏi thêm
Nếu cùng 1 element có cả 3 cách CSS thì:
- Inline CSS thắng
- Internal CSS
- External CSS
```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="style.css">
</head>

<p style="color:red;">
    Hello World
</p>
```
Kết quả
- Text sẽ có màu đỏ.
Giải thích
- Inline CSS có độ ưu tiên (specificity) cao nhất nên ghi đè các cách còn lại.

# Câu A2 — CSS Selectors — Dự đoán kết quả

## HTML đã cho

```html
<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>
        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>

        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>
```
### 1. h1
Chọn:
- ShopTLU
Giải thích
- Selector `h1` chọn tất cả thẻ h1 trong trang.
- Trong HTML chỉ có 1 thẻ h1 là:
```html
<h1>ShopTLU</h1>
```
### 2. .price
Chọn:
- 25.990.000đ
- 45.990.000đ
Giải thích
- `.price` chọn tất cả element có class `price`.
```html
<p class="price">25.990.000đ</p>
<p class="price">45.990.000đ</p>
```
### 3. #app header
Chọn:
- toàn bộ phần header chứa:
- ShopTLU
   + Home
   + Products
   + About
Giải thích
- `#app` chọn element có id `app`
- `header` chọn thẻ header nằm bên trong `#app`
```html
<header class="top-bar dark">
```
### 4. nav a:first-child
Chọn:
- Home
Giải thích
- `nav` chọn thẻ nav
- `a:first-child` chọn thẻ a đầu tiên bên trong nav
<a href="/" class="active">Home</a>

### 5. .product.featured h2
Chọn:
- MacBook Pro
Giải thích
- `.product.featured`
nghĩa là element có đồng thời 2 class:
    - product
    - featured
<article class="product featured">

Sau đó selector chọn thẻ h2 bên trong article đó.
<h2>MacBook Pro</h2>

### 6. article > p
Chọn:
- 25.990.000đ
- Mô tả sản phẩm...
- 45.990.000đ
- Mô tả sản phẩm...
Giải thích
`>` là child selector
Chọn tất cả thẻ p là con trực tiếp của article
<article>
    <p>...</p>
</article>

Có tổng cộng 4 thẻ p.

### 7. a[href="/"]
Chọn:
- Home
Giải thích
- Selector này chọn thẻ a có attribute:

href="/"

Nên chọn:

<a href="/" class="active">Home</a>

### 8. .top-bar.dark h1
Chọn:
- ShopTLU
Giải thích
- `.top-bar.dark`
nghĩa là element có cả:
    - class top-bar
    - class dark
<header class="top-bar dark">
Sau đó chọn h1 nằm bên trong.
<h1>ShopTLU</h1>

# Screenshot
Ảnh kiểm chứng được lưu trong folder:
screenshots/selectors_test.png

# Câu A3 — Box Model — Tính toán kích thước

## Trường hợp 1: content-box mặc định

```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
Chiều rộng hiển thị
Công thức:
    width + padding-left + padding-right + border-left + border-right
Tính:
    400 + 20 + 20 + 5 + 5 = 450px
→ Chiều rộng hiển thị = 450px

Không gian chiếm trên trang
Công thức:
    chiều rộng hiển thị + margin-left + margin-right
Tính:
    450 + 10 + 10 = 470px
→ Không gian chiếm trên trang = 470px

## Trường hợp 2: border-box
```csscss
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
Chiều rộng hiển thị
Với `box-sizing: border-box`, `width` đã bao gồm content + padding + border.
→ Chiều rộng hiển thị = 400px

Kích thước content thực tế
Công thức:
    width - padding-left - padding-right - border-left - border-right
Tính:
    400 - 20 - 20 - 5 - 5 = 350px
→ Kích thước content thực tế = 350px

Không gian chiếm trên trang
Công thức:
    chiều rộng hiển thị + margin-left + margin-right
Tính:
    400 + 10 + 10 = 420px
→ Không gian chiếm trên trang = 420px

## Trường hợp 3: Margin collapse
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```
Khoảng cách giữa box-a và box-b
Vì margin dọc của 2 phần tử liền kề bị collapse nên khoảng cách không cộng lại.
Browser lấy margin lớn hơn:
    max(25px, 40px) = 40px
→ Khoảng cách giữa box-a và box-b = 40px

*Giải thích tại sao không phải 65px
Không phải:
    25px + 40px = 65px
Vì trong CSS, margin theo chiều dọc giữa 2 block liền kề có thể bị gộp lại, gọi là margin collapse. Khi đó trình duyệt không cộng 2 margin, mà chỉ lấy giá trị lớn hơn.


# Câu A4 — Specificity (Độ ưu tiên)

## CSS rules đã cho

```css
p { color: black; }                  
.price { color: blue; }             
#main-price { color: red; }         
p.price { color: green; }
```
Element được target:
```html
<p class="price" id="main-price">
```
1. Tính specificity score
- Specificity có dạng:
    (a, b, c)
- Trong đó:
    a = số id
    b = số class, pseudo-class, attribute
    c = số element
* Rule A
```css
p { color: black; }
```
- Có:
    id: 0
    class: 0
    element: 1
→ Specificity = (0, 0, 1)
* Rule B
```css
.price { color: blue; }
```
- Có:
    id: 0
    class: 1
    element: 0
→ Specificity = (0, 1, 0)
* Rule C
```css
#main-price { color: red; }
```
- Có:
    id: 1
    class: 0
    element: 0
→ Specificity = (1, 0, 0)
* Rule D
```css
p.price { color: green; }
```
- Có:
    id: 0
    class: 1
    element: 1
→ Specificity = (0, 1, 1)
2. Element sẽ có màu gì?
- Element:
```html
<p class="price" id="main-price">
```
Màu cuối cùng là: đỏ
* Giải thích
- So sánh specificity:
    Rule A: (0, 0, 1)
    Rule B: (0, 1, 0)
    Rule C: (1, 0, 0)
    Rule D: (0, 1, 1)

- Rule C có id selector #main-price.

- ID selector có độ ưu tiên cao hơn class selector và element selector.
- Vì vậy:
```css 
#main-price { color: red; }
```
thắng.
3. Nếu thêm inline CSS
```html
<p class="price" id="main-price" style="color: orange;">
```
- Màu cuối cùng là: cam
* Giải thích
- Inline CSS viết trực tiếp trong thẻ HTML bằng thuộc tính `style`.
- Inline CSS có độ ưu tiên cao hơn các selector thông thường trong file CSS.
- Vì vậy màu cam sẽ thắng.
4. Nếu Rule A thêm !important
```css
p {
    color: black !important;
}
```
- Màu cuối cùng là: đen
* Giải thích
`!important` làm cho thuộc tính CSS có độ ưu tiên rất cao.
- Mặc dù selector `p` có specificity thấp hơn `#main-price`, nhưng vì Rule A có `!important` nên nó ghi đè các rule không có `!important`.

Vì vậy element hiển thị màu đen.

# Bài B1 — Style trang Profile

## Các file đã tạo

- profile.html
- style.css

## Các loại selector đã sử dụng trong style.css

### 1. Element selector

Ví dụ:

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```
2. Class selector

Ví dụ:
```css
.container {
    width: 80%;
    margin: 30px auto;
}
```
3. ID selector

Ví dụ:
```css
#main-header {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
}
```
4. Descendant selector

Ví dụ:
```css
#main-header h1 {
    font-size: 36px;
}
```
5. Pseudo-class selector

Ví dụ:
```css
nav a:hover {
    color: #ffd700;
    text-decoration: underline;
}
```
* Kết luận
- Trang profile đã sử dụng external CSS thông qua file style.css.
- File CSS có dòng đầu tiên là:
```css
* {
    box-sizing: border-box;
}
```
- rang đã có đầy đủ:
    Typography cơ bản cho body
    Header dùng background gradient
    Navigation có hover và active
    Bảng kỹ năng có border-collapse, zebra striping và hover row
    Footer có background đậm, chữ nhạt và căn giữa

# Bài B2 — Box Model Lab

## Các file đã tạo

- boxmodel_lab.html
- boxmodel.css

---

## Phần 1 — Chứng minh content-box vs border-box

### Hộp 1: content-box

CSS:

```css
.content-box {
    box-sizing: content-box;
}
```
- Cùng thuộc tính:
```css
width: 300px;
padding: 20px;
border: 5px solid;
```
- Tính chiều rộng thực tế:

    width + padding-left + padding-right + border-left + border-right
    = 300 + 20 + 20 + 5 + 5
    = 350px
→ Hộp 1 content-box: chiều rộng thực tế = 350px

### Hộp 2: border-box

CSS:
```css
.border-box {
    box-sizing: border-box;
}
```
- Cùng thuộc tính:
```css
width: 300px;
padding: 20px;
border: 5px solid;
```
- Với `border-box`, width đã bao gồm cả content + padding + border.
→ Hộp 2 border-box: chiều rộng thực tế = 300px

* Giải thích sự khác biệt

- Với `content-box`, thuộc tính `width` chỉ tính phần nội dung. Padding và border được cộng thêm bên ngoài nên hộp bị rộng hơn.

- Với `border-box`, thuộc tính `width` đã bao gồm cả content, padding và border nên kích thước hiển thị đúng bằng 300px.
* Screenshot phần 1
- Ảnh DevTools box model của hộp content-box được - - lưu tại:
![Content Box](screenshots/content_box_devtools.png)

- Ảnh DevTools box model của hộp border-box được - - lưu tại:
![Border Box](screenshots/border_box_devtools.png)
## Phần 2 — Layout 3 cột
- Trường hợp không dùng border-box
+ Container rộng:
    1000px
+ Cột trái sidebar:
    width 250 + padding trái phải 30 = 280px
+ Cột giữa content:
    width 500 + padding trái phải 40 = 540px
+ Cột phải ads:
    width 250 + padding trái phải 30 = 280px

+ Tổng chiều rộng thật:
    280 + 540 + 280 = 1100px
→ Tổng là 1100px, lớn hơn container 1000px.
- Vì vậy layout bị vượt quá chiều rộng container.

- Trường hợp có dùng border-box

Khi dùng:
```css
box-sizing: border-box;
```
thì width đã bao gồm cả padding và border.

Cột trái:

250px

Cột giữa:

500px

Cột phải:

250px

Tổng:

250 + 500 + 250 = 1000px

→ Tổng đúng bằng 1000px, nên 3 cột nằm vừa trong container.

* Screenshot phần 2

Ảnh layout không dùng border-box được lưu tại:

![Layout không dùng border-box](screenshots/layout_no_border_box.png)


Ảnh layout có dùng border-box được lưu tại:

![Layout có dùng border-box](screenshots/layout_with_border_box.png)
