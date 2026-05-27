# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — Viewport & Mobile-First

## Thẻ meta viewport chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Giải thích từng thuộc tính

### 1. name="viewport"

Cho trình duyệt biết đây là cấu hình viewport cho thiết bị di động.

Viewport là vùng hiển thị nội dung trang web trên màn hình.

---

### 2. width=device-width

Thiết lập chiều rộng viewport bằng đúng chiều rộng màn hình thiết bị.

Ví dụ:
- iPhone nhỏ → viewport nhỏ
- iPad → viewport lớn hơn

Điều này giúp website responsive đúng kích thước thiết bị.

---

### 3. initial-scale=1.0

Thiết lập mức zoom ban đầu là 100%.

Trang web sẽ hiển thị với tỉ lệ bình thường khi mở lần đầu.

---

# Nếu thiếu thẻ viewport thì điều gì xảy ra?

Nếu không có:

```html
<meta name="viewport">
```

iPhone và nhiều thiết bị mobile sẽ giả lập trang web như desktop với chiều rộng khoảng:

```text
980px
```

Hậu quả:

- Website bị thu nhỏ
- Chữ rất nhỏ
- Người dùng phải zoom mới đọc được
- Responsive layout hoạt động sai

Ví dụ:
- Navbar bị co nhỏ
- Button rất bé
- Layout mobile không đúng

---

# Mobile-First vs Desktop-First

## 1. Mobile-First

### Ý tưởng

Viết CSS cho mobile trước.

Sau đó dùng:

```css
@media (min-width: ...)
```

để mở rộng cho tablet và desktop.

---

### Ví dụ Mobile-First với breakpoint 768px

```css
body {
    font-size: 14px;
}

.container {
    display: block;
}

@media (min-width: 768px) {

    body {
        font-size: 18px;
    }

    .container {
        display: flex;
    }
}
```

### Giải thích

- Mobile dùng layout đơn giản trước
- Khi màn hình ≥ 768px thì chuyển sang layout desktop

---

## 2. Desktop-First

### Ý tưởng

Viết CSS cho desktop trước.

Sau đó dùng:

```css
@media (max-width: ...)
```

để thu nhỏ cho mobile.

---

### Ví dụ Desktop-First với breakpoint 768px

```css
body {
    font-size: 18px;
}

.container {
    display: flex;
}

@media (max-width: 768px) {

    body {
        font-size: 14px;
    }

    .container {
        display: block;
    }
}
```

### Giải thích

- Desktop là mặc định
- Khi màn hình nhỏ hơn 768px thì đổi sang layout mobile

---

# Mobile-First được khuyên dùng vì sao?

## 1. Mobile hiện là thiết bị phổ biến nhất

Phần lớn người dùng truy cập web bằng điện thoại.

---

## 2. Hiệu năng tốt hơn

Mobile chỉ tải CSS cần thiết trước.

Desktop sẽ nhận thêm CSS mở rộng sau.

---

## 3. CSS dễ mở rộng hơn

Bắt đầu từ layout đơn giản rồi mở rộng dần sẽ dễ quản lý hơn.

---

## 4. Responsive tự nhiên hơn

Thiết kế từ màn hình nhỏ trước giúp:
- tránh layout vỡ
- tránh nội dung quá lớn
- cải thiện trải nghiệm mobile

---

# Kết luận

- `meta viewport` rất quan trọng với responsive web design.
- Mobile-First là phương pháp hiện đại và được khuyên dùng.
- Responsive website nên thiết kế cho mobile trước rồi mở rộng lên desktop.
