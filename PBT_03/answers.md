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
