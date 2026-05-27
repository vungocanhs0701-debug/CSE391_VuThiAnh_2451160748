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

# Câu A2 — Flexbox vs Grid

## Trường hợp 1

```css
.container {
    display: flex;
}

.item {
    flex: 1;
}
```

Có 4 items.

### Dự đoán bố cục

- `display: flex` → mặc định xếp theo hàng ngang
- `flex: 1` → các item chia đều chiều rộng

Kết quả:

```text
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
└────┴────┴────┴────┘
```

→ 1 hàng, 4 cột  
→ Mỗi item rộng bằng nhau

---

## Trường hợp 2

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 45%;
    margin: 2.5%;
}
```

Có 6 items.

### Phân tích

Mỗi item:

```text
45% + 2.5% + 2.5%
=
50%
```

→ mỗi hàng chứa 2 item

Có 6 item:

```text
6 ÷ 2 = 3 hàng
```

### Dự đoán bố cục

```text
┌────────┬────────┐
│   1    │   2    │
├────────┼────────┤
│   3    │   4    │
├────────┼────────┤
│   5    │   6    │
└────────┴────────┘
```

→ 3 hàng, 2 cột

---

## Trường hợp 3

```css
.container {
    display: flex;

    justify-content: space-between;

    align-items: center;
}
```

Có 3 items.

### Phân tích

`justify-content: space-between`

→ item đầu sát trái

→ item cuối sát phải

→ item giữa nằm chính giữa

`align-items: center`

→ căn giữa theo chiều dọc

### Dự đoán bố cục

```text
┌─────────────────────┐
│ 1        2        3 │
│                     │
│ (căn giữa chiều dọc)│
└─────────────────────┘
```

→ 1 hàng

→ khoảng cách đều

---

## Trường hợp 4

```css
.container {
    display: grid;

    grid-template-columns:
    200px
    1fr
    200px;

    gap: 20px;
}
```

Có 3 items.

### Phân tích

Grid tạo:

```text
Cột 1 = 200px
Cột 2 = phần còn lại
Cột 3 = 200px
```

### Dự đoán bố cục

```text
┌──────┬────────────┬──────┐
│  1   │     2      │  3   │
└──────┴────────────┴──────┘
```

→ 1 hàng

→ 3 cột

→ giữa co giãn

---

## Trường hợp 5

```css
.container {
    display: grid;

    grid-template-columns:
    repeat(3, 1fr);

    gap: 10px;
}
```

Có 7 items.

### Phân tích

Grid tạo:

```text
3 cột bằng nhau
```

Sắp item:

```text
1 2 3
4 5 6
7
```

### Dự đoán bố cục

```text
┌────┬────┬────┐
│ 1  │ 2  │ 3  │
├────┼────┼────┤
│ 4  │ 5  │ 6  │
├────┼────┼────┤
│ 7  │    │    │
└────┴────┴────┘
```

→ 3 hàng

→ 3 cột

→ item cuối nằm:

```text
Hàng 3 — Cột 1
```

---

## So sánh nhanh

### Flexbox
- Phù hợp layout 1 chiều
- Theo hàng hoặc cột

### Grid
- Phù hợp layout 2 chiều
- Điều khiển hàng và cột tốt hơn

# Bài B1 — Positioning Playground
## Các file đã tạo
- positioning.html
- positioning.css

## Các kỹ thuật position đã sử dụng
### 1. Fixed header
```css
.fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
}
```
Header luôn nằm trên cùng màn hình khi cuộn trang.
2. Sticky sidebar
```css
.sidebar {
    position: sticky;
    top: 80px;
}
```
Sidebar sẽ dính lại khi cuộn xuống và nằm dưới header.
3. Badge HOT dùng absolute
```css
.product-card {
    position: relative;
}

.badge {
    position: absolute;
    top: -15px;
    right: -15px;
}
```
Card là mốc định vị, badge HOT nằm ở góc phải trên của card.
4. Scroll to top button
```css
.scroll-top {
    position: fixed;
    right: 25px;
    bottom: 25px;
}
```
Nút luôn cố định ở góc phải dưới màn hình.
## Screenshot

Header fixed khi scroll:

![Header Fixed](screenshots/header_fixed.png)

Sidebar sticky khi scroll:

![Sidebar Sticky](screenshots/sidebar_sticky.png)

Badge HOT trên card:

![Badge HOT](screenshots/badge_hot.png)
