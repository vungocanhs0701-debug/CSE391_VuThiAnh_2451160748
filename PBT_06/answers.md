# PHẦN A — ĐỌC HIỂU

# Câu A1 — Grid System

## HTML đề bài

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```

## Bảng dự đoán layout

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|---|---|---|---|
| Class áp dụng chính | `col-12` | `col-md-6` | `col-lg-3` |
| Số cột mỗi box chiếm | 12/12 | 6/12 | 3/12 |
| Số box trên 1 hàng | 1 box | 2 box | 4 box |
| Box layout | 1 cột | 2 cột | 4 cột |

## 1. Mobile: dưới 768px

Áp dụng:

```html
col-12
```

Mỗi box chiếm toàn bộ 12 cột.

Sơ đồ:

```text
┌──────────────┐
│    Box 1     │
├──────────────┤
│    Box 2     │
├──────────────┤
│    Box 3     │
├──────────────┤
│    Box 4     │
└──────────────┘
```

→ 1 cột, 4 hàng.

## 2. Tablet: 768px - 991px

Áp dụng:

```html
col-md-6
```

Mỗi box chiếm 6/12 cột.

Một hàng có 2 box.

Sơ đồ:

```text
┌───────┬───────┐
│ Box 1 │ Box 2 │
├───────┼───────┤
│ Box 3 │ Box 4 │
└───────┴───────┘
```

→ 2 cột, 2 hàng.

## 3. Desktop: từ 992px trở lên

Áp dụng:

```html
col-lg-3
```

Mỗi box chiếm 3/12 cột.

Một hàng có 4 box.

Sơ đồ:

```text
┌──────┬──────┬──────┬──────┐
│Box 1 │Box 2 │Box 3 │Box 4 │
└──────┴──────┴──────┴──────┘
```

→ 4 cột, 1 hàng.

## Câu hỏi thêm

### col-md-6 nghĩa là gì?

`col-md-6` nghĩa là:

- Từ breakpoint `md` trở lên, tức là từ 768px
- Element chiếm 6 cột trong hệ grid 12 cột của Bootstrap

Vì:

```text
6 / 12 = 1/2
```

nên mỗi box chiếm nửa hàng.

### Tại sao không cần viết col-sm-12?

Vì đã có:

```html
col-12
```

`col-12` áp dụng cho tất cả kích thước màn hình từ nhỏ nhất trở lên.

Khi màn hình đạt `md` hoặc `lg`, các class sau sẽ ghi đè:

```html
col-md-6
col-lg-3
```

Vì vậy không cần viết thêm `col-sm-12`.

# Câu A2 — Utilities & Components

## 1. Giải thích class d-none d-md-block

```html
<div class="d-none d-md-block">
    Nội dung
</div>
```

### d-none

```text
display: none;
```

Element bị ẩn mặc định trên màn hình nhỏ.

### d-md-block

```text
Từ breakpoint md trở lên, display: block;
```

Breakpoint `md` của Bootstrap là từ 768px.

### Kết luận

Element sẽ:

- Ẩn trên mobile dưới 768px
- Hiển thị từ tablet 768px trở lên

## 2. Liệt kê 5 spacing utilities

### 1. mt-3

```text
margin-top mức 3
```

Dùng để tạo khoảng cách phía trên.

Ví dụ:

```html
<div class="mt-3">Box</div>
```

### 2. mb-4

```text
margin-bottom mức 4
```

Tạo khoảng cách phía dưới.

Ví dụ:

```html
<div class="mb-4">Box</div>
```
### 3. ms-2

```text
margin-start mức 2
```

Tạo khoảng cách phía bên trái trong giao diện LTR.

Ví dụ:

```html
<div class="ms-2">Box</div>
```

### 4. px-4

```text
padding-left và padding-right mức 4
```

Tạo padding ngang.

Ví dụ:

```html
<div class="px-4">Box</div>
```

### 5. py-3

```text
padding-top và padding-bottom mức 3
```

Tạo padding dọc.

Ví dụ:

```html
<div class="py-3">Box</div>
```

### 6. mb-auto

```text
margin-bottom: auto;
```

Dùng khi cần đẩy phần tử trong flex layout.

Ví dụ:

```html
<div class="mb-auto">Box</div>
```

## 3. Sự khác nhau giữa .container, .container-fluid, .container-md

### .container

```html
<div class="container">
```

- Có max-width thay đổi theo breakpoint
- Căn giữa nội dung
- Phù hợp layout web thông thường

### .container-fluid

```html
<div class="container-fluid">
```

- Luôn rộng 100% màn hình
- Không bị giới hạn max-width
- Phù hợp banner full width, layout toàn màn hình

### .container-md

```html
<div class="container-md">
```

- Dưới breakpoint `md`, nó rộng 100%
- Từ `md` trở lên, nó hoạt động giống container có max-width

Phù hợp khi muốn mobile full width nhưng tablet/desktop có giới hạn chiều rộng.

# Kết luận

Bootstrap giúp xây dựng responsive layout nhanh bằng:
- Grid system 12 cột
- Breakpoints như md, lg
- Utility classes cho spacing, display, layout
- Components có sẵn