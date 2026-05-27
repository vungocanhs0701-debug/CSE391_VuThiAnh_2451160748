# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| static | Có | Theo flow mặc định của HTML | Có | Layout thông thường |
| relative | Có | Chính vị trí ban đầu của phần tử | Có | Dịch chuyển nhẹ phần tử, làm mốc cho absolute |
| absolute | Không | Parent gần nhất có position khác static | Có | Tooltip, popup, badge |
| fixed | Không | Cửa sổ trình duyệt (viewport) | Không | Nút lên đầu trang, menu cố định |
| sticky | Có | Theo vị trí ban đầu rồi bám viewport | Không (khi đã sticky) | Thanh menu bám khi cuộn |

---

## Giải thích từng loại
### 1. static

```css
position: static;
```

- Đây là giá trị mặc định.
- Element hiển thị theo thứ tự HTML.
- Không dùng được:
```css
top
right
bottom
left
```
Ví dụ:
```html
<p>Đoạn văn bình thường</p>
```
Use case:
- Bố cục thông thường.
### 2. relative
```css
position: relative;
```
- Element vẫn giữ chỗ trong layout.
- Có thể dịch chuyển bằng:

```css
top
left
right
bottom
```

Ví dụ:

```css
.box {
    position: relative;
    left: 30px;
}
```

Use case:
- Dịch chuyển nhẹ phần tử
- Làm mốc cho absolute

### 3. absolute
```css
position: absolute;
```
- Phần tử bị tách khỏi flow.
- Không chiếm chỗ.

Ví dụ
```css
.badge {
    position: absolute;
    top: 0;
    right: 0;
}
```

Use case:
- Tooltip
- Popup
- Badge sản phẩm

### 4. fixed

```css
position: fixed;
```

- Phần tử bám theo màn hình.
- Không cuộn cùng nội dung.

Ví dụ:

```css
.back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

Use case:
- Nút lên đầu trang
- Thanh chat
- Header cố định

### 5. sticky

```css
position: sticky;
top: 0;
```

- Ban đầu hoạt động như relative.
- Khi cuộn đến ngưỡng sẽ giống fixed.

Ví dụ:

```css
.menu {
    position: sticky;
    top: 0;
}
```

Use case:
- Header bám
- Menu điều hướng

# Câu hỏi thêm
## Khi nào absolute tham chiếu body?

Absolute sẽ tham chiếu tới body (hoặc viewport) khi:
KHÔNG tồn tại phần tử cha nào có:

```css
position:
relative
absolute
fixed
sticky
```
Ví dụ:
```html
<body>

<div class="box">
    <div class="item"></div>
</div>

</body>
```
```css
.item {
    position: absolute;
    top: 0;
    left: 0;
}
```

→ `.item` sẽ căn theo body.

---

## Khi nào absolute tham chiếu parent?
Khi phần tử cha gần nhất có:

```css
position: relative;
```

Ví dụ:

```html
<div class="parent">

<div class="child">
</div>

</div>
```

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 10px;
    left: 10px;
}
```

→ `.child` căn theo `.parent`

---

## Khái niệm nearest positioned ancestor
Nearest positioned ancestor là:

Phần tử cha gần nhất có:

```css
position:
relative
absolute
fixed
sticky
```

Element `absolute` sẽ lấy phần tử đó làm mốc định vị.
Ví dụ:

```html
<div class="grandparent">

<div class="parent">

<div class="child"></div>

</div>

</div>
```

```css
.grandparent {
position: relative;
}

.parent {
position: static;
}

.child {
position: absolute;
top: 0;
left: 0;
}
```

→ child tham chiếu `.grandparent`
vì `.parent` đang là static.
