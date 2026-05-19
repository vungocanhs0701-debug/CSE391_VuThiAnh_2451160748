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
