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