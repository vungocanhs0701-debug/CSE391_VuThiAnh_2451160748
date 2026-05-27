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

# Câu A2 — Breakpoints

## Các breakpoints phổ biến

| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|---|
| Extra Small (XS) | < 576px | Điện thoại nhỏ | 1 cột |
| Small (SM) | ≥ 576px | Điện thoại lớn | 2 cột |
| Medium (MD) | ≥ 768px | Tablet | 2 hoặc 3 cột |
| Large (LG) | ≥ 992px | Laptop | 3 hoặc 4 cột |
| Extra Large (XL) | ≥ 1200px | Desktop lớn | 4 cột |
| Extra Extra Large (XXL) | ≥ 1400px | Màn hình rất lớn | 5 hoặc 6 cột |

---

# Giải thích từng breakpoint

## 1. XS — Extra Small

```text
< 576px
```

### Thiết bị
- Điện thoại nhỏ
- iPhone SE
- Android nhỏ

### Layout phù hợp
- Menu dọc
- 1 cột sản phẩm
- Chữ lớn dễ đọc

Ví dụ:

```text
┌──────┐
│Card 1│
├──────┤
│Card 2│
└──────┘
```

---

## 2. SM — Small

```text
≥ 576px
```

### Thiết bị
- Điện thoại lớn

### Layout phù hợp
- 2 cột sản phẩm

Ví dụ:

```text
┌────┬────┐
│ 1  │ 2  │
├────┼────┤
│ 3  │ 4  │
└────┴────┘
```

---

## 3. MD — Medium

```text
≥ 768px
```

### Thiết bị
- Tablet
- iPad

### Layout phù hợp
- 2 hoặc 3 cột sản phẩm
- Sidebar có thể bắt đầu xuất hiện

Ví dụ:

```text
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
└────┴────┴────┘
```

---

## 4. LG — Large

```text
≥ 992px
```

### Thiết bị
- Laptop
- Desktop nhỏ

### Layout phù hợp
- 3 hoặc 4 cột
- Có sidebar và ads

Ví dụ:

```text
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
└────┴────┴────┴────┘
```

---

## 5. XL — Extra Large

```text
≥ 1200px
```

### Thiết bị
- Desktop lớn

### Layout phù hợp
- 4 cột sản phẩm
- Khoảng trắng lớn hơn

---

## 6. XXL — Extra Extra Large

```text
≥ 1400px
```

### Thiết bị
- Màn hình ultrawide
- Monitor lớn

### Layout phù hợp
- 5 hoặc 6 cột
- Dashboard lớn

---

# Ví dụ media query

```css
@media (min-width: 768px) {

    .products {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

# Kết luận

Breakpoints giúp website responsive trên nhiều thiết bị khác nhau:
- Mobile
- Tablet
- Laptop
- Desktop

Mỗi kích thước màn hình nên có layout phù hợp để cải thiện trải nghiệm người dùng.
# Câu A3 — Media Queries

## CSS đề bài

```css
.container {
    width: 100%;
    padding: 10px;
}

@media (min-width: 576px) {
    .container {
        width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

---

# Bảng kết quả

| Chiều rộng màn hình | .container width |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

---

# Giải thích từng trường hợp

## 1. Màn hình 375px

```text
375px < 576px
```

Không media query nào hoạt động.

Áp dụng CSS mặc định:

```css
.container {
    width: 100%;
}
```

→ `.container width = 100%`

---

## 2. Màn hình 600px

```text
600px ≥ 576px
```

Media query đầu tiên hoạt động:

```css
@media (min-width: 576px) {
    .container {
        width: 540px;
    }
}
```

→ `.container width = 540px`

---

## 3. Màn hình 800px

```text
800px ≥ 768px
```

Media query 768px ghi đè media query trước.

```css
@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}
```

→ `.container width = 720px`

---

## 4. Màn hình 1000px

```text
1000px ≥ 992px
```

Media query 992px hoạt động:

```css
@media (min-width: 992px) {
    .container {
        width: 960px;
    }
}
```

→ `.container width = 960px`

---

## 5. Màn hình 1400px

```text
1400px ≥ 1200px
```

Media query cuối cùng hoạt động:

```css
@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

→ `.container width = 1140px`

---

# Kết luận

Trong Mobile-First:

- CSS mặc định áp dụng cho mobile
- Media queries với `min-width` sẽ ghi đè dần khi màn hình lớn hơn
- Rule viết sau sẽ ghi đè rule trước nếu cùng target