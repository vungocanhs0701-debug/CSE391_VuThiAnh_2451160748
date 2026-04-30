# PHIẾU BÀI TẬP 01 — HTML5 FUNDAMENTALS
## Câu A1 (5đ) — HTTP & Browser
### A1.1. Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, liệt kê ít nhất 5 bước xảy ra (đúng thứ tự)
Khi người dùng nhập địa chỉ `https://shopee.vn` và nhấn Enter, trình duyệt sẽ thực hiện các bước sau (theo đúng trình tự):
1.Request từ laptop → truyền qua router WiFi  
2.→ đi vào hệ thống của nhà mạng  
3.→ chạy qua hàng loạt server trung gian  
4.→ đến server chính của Shopee  
5.→ server xử lý: "Người dùng muốn truy cập trang chủ"  
6.→ Response quay ngược lại theo đường cũ  
7.→ Chrome nhận HTML  
8.→ tải thêm CSS, JS, hình ảnh  
9.→ render giao diện hoàn chỉnh lên màn hình.

Nguồn tham chiếu:** `tuan_1_html5/01_introduction_html_universe.md` → phần mục 1.1 Client-Server, mục 1.2 HTTP, mục 1.3 Browser Rendering
### A1.2. Trong DevTools của Chrome, tab Network cho thấy thông tin gì?
Tab **Network** cho phép quan sát toàn bộ hoạt động request/response của trang web, bao gồm:
- Danh sách các request tải về (HTML, CSS, JS, image, API…)
- URL của request
- HTTP method (GET, POST…)
- Status code (200, 404, 500, 301…)
- Thời gian tải (load time) và dung lượng từng request
- Kiểm tra file nào làm trang web tải chậm
  
Nguồn tham chiếu: `tuan_1_html5/01_introduction_html_universe.md` → mục 4.3 Developer Tools (F12), tab Network
### A1.3. Screenshot tab Network và đánh dấu
![Network Screenshot](images/A1_network.png)
## Câu A2 (5đ) — Semantic HTML
Trang web bị Google đánh giá SEO thấp vì sử dụng quá nhiều thẻ `<div>` thay vì các thẻ semantic HTML5. Khi dùng "div soup", Google và các công cụ tìm kiếm khó hiểu cấu trúc trang web (đâu là header, menu điều hướng, nội dung chính, footer), dẫn đến SEO kém.
### Ít nhất 4 lỗi semantic trong đoạn code
1. Phần đầu trang dùng `<div class="header">` thay vì `<header>`.
2. Menu điều hướng dùng `<div class="menu">` thay vì `<nav>`.
3. Nội dung chính dùng `<div class="main">` thay vì `<main>`.
4. Thông tin sản phẩm dùng `<div class="product">` thay vì `<article>` (sản phẩm là nội dung độc lập).
5. Tiêu đề sản phẩm dùng `<div class="title">` thay vì thẻ heading như `<h1>` hoặc `<h2>`.
6. Ảnh `<img>` thiếu thuộc tính `alt` (ảnh hưởng SEO và accessibility).
7. Footer dùng `<div class="footer">` thay vì `<footer>`.
### Sửa lại theo semantic HTML5

```html
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article class="product">
        <h1 class="title">iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>

        <figure class="image">
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>

<footer>
    © 2026 ShopTLU
</footer>
```
Nguồn tham chiếu:** `tuan_1_html5/04_visible_part_html.md` → phần Semantic HTML5 (header, nav, main, article, footer, figure)
## Câu A3 — Block vs Inline
### Kết quả hiển thị của đoạn HTML
```txt
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
```
Giải thích 
- `<div>` là block element nên chiếm cả dòng và tự động xuống dòng.
- `<span>` là inline element nên hiển thị cùng dòng với nhau.
- `<strong>` cũng là inline element nên nằm cùng dòng với Text C và làm chữ Text D in đậm.
  
Nguồn tham chiếu: ** `tuan_1_html5/04_visible_part_html.md` → phần Block vs Inline elements
## Câu A4 (5đ) — Table
### 1) Giải thích sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`
- `<thead>`: Phần **header** của bảng, dùng để chứa tiêu đề các cột (thường dùng `<th>`).
- `<tbody>`: Phần **body** của bảng, chứa dữ liệu chính (các dòng dữ liệu).
- `<tfoot>`: Phần **footer** của bảng, dùng để tổng kết, ví dụ tổng số sản phẩm, tổng tiền,...

Các thẻ này giúp bảng có cấu trúc rõ ràng, dễ đọc và dễ quản lý.

Nguồn tham chiếu: `tuan_1_html5/05_tables_hyperlinks.md` → phần Table structure (thead, tbody, tfoot)
### 2) Tại sao KHÔNG NÊN dùng table để tạo layout trang web? (ít nhất 3 lý do)
Không nên dùng table để tạo layout vì:
1. `<table>` chỉ nên dùng cho dữ liệu dạng bảng (tabular data). Nếu dùng làm layout sẽ sai mục đích semantic.
2. Dùng table layout khiến code khó bảo trì và khó chỉnh sửa giao diện.
3. Table rất khó responsive trên các thiết bị khác nhau (mobile, tablet), dễ bị vỡ layout.
4. Hiện nay layout chuẩn nên dùng CSS Flexbox hoặc CSS Grid thay vì table.

Nguồn tham chiếu: `tuan_1_html5/05_tables_hyperlinks.md` → phần cảnh báo: "KHÔNG dùng table cho layout"'

## Bài B3 — Debug HTML

Lỗi 1: Dòng 1 — `<!DOCTYPE>` thiếu `html` — Sửa thành `<!DOCTYPE html>`
Lỗi 2: Dòng 2 — Thẻ `<html>` thiếu thuộc tính `lang` — Sửa thành `<html lang="vi">`
Lỗi 3: Dòng 4 — Thẻ `<title>` không đóng — Thêm `</title>`
Lỗi 4: Dòng 5 — `meta charset="utf8"` sai chuẩn — Sửa thành `charset="UTF-8"`
Lỗi 5: Dòng 8 — Thẻ `<h1>` bị sai đóng thẻ (`<h1>` thay vì `</h1>`) — Sửa thành `</h1>`
Lỗi 6: Dòng 12 — Thẻ `<a>` đầu tiên không đóng đúng (`<a>` thay vì `</a>`) — Sửa thành `</a>`
Lỗi 7: Dòng 13 — Link href không đúng file (home/products) — Sửa thành `home.html` và `products.html`
Lỗi 8: Dòng 20 — Thẻ `<img>` thiếu dấu ngoặc kép và thiếu `alt` — Sửa `src="iphone.jpg"` và thêm `alt="iPhone 16 Pro"`
Lỗi 9: Dòng 22 — Sai cấu trúc thẻ `<b>` và `<p>` (đóng thẻ sai thứ tự) — Đổi thành `<p>Giá: <strong>...</strong></p>`
Lỗi 10: Dòng 27-36 — Table thiếu `<thead>` và dùng `<td>` cho tiêu đề — Thêm `<thead>` và dùng `<th>`
Lỗi 11: Dòng 40-42 — Có 2 thẻ `<main>` trong 1 trang là sai semantic — Chuyển `<main>` thứ 2 thành `<aside>`
Lỗi 12: Dòng 46-48 — Thẻ `<p>` trong footer không đóng — Thêm `</p>`
Lỗi 13: Cuối file — Thiếu `</html>` — Thêm `</html>`

### B4.1 Semantic tags
1. <header>: nằm ở phần đầu trang, chứa logo, menu, thanh tìm kiếm.
2. <nav>: nằm trong header, chứa menu điều hướng.
3. <footer>: nằm ở cuối trang, chứa thông tin công ty và chính sách.

### B4.2 Các thẻ chưa đúng semantic
1. 1. Dùng <div id="main">  thay vì <main>.
2. Dùng <div> thay vì <button>.
