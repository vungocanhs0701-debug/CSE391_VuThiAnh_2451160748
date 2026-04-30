# PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

## Câu A1 (5đ) — Input Types

1. **type="text"** → Ô nhập text → Validate bằng `minlength`, `maxlength`, `pattern` → Dùng nhập **họ tên**, **địa chỉ giao hàng** trong E-Commerce.

2. **type="email"** → Ô nhập email → Tự kiểm tra định dạng email (phải có ký tự `@`) → Dùng cho **form đăng ký/đăng nhập tài khoản**.

3. **type="password"** → Ô nhập mật khẩu (ẩn ký tự) → Validate bằng `minlength`, `pattern` → Dùng nhập **mật khẩu tài khoản khách hàng**.

4. **type="number"** → Ô nhập số có nút tăng/giảm → Validate bằng `min`, `max`, `step` → Dùng nhập **số lượng sản phẩm mua** trong giỏ hàng.

5. **type="tel"** → Ô nhập số điện thoại (mobile hiện bàn phím số) → Validate bằng `pattern` → Dùng nhập **số điện thoại người nhận hàng**.

6. **type="date"** → Date picker (chọn ngày bằng lịch) → Validate bằng `min`, `max` → Dùng chọn **ngày giao hàng dự kiến**.

7. **type="color"** → Color picker (bảng chọn màu) → Không có validation đặc biệt → Dùng chọn **màu sản phẩm** (áo, giày, điện thoại...).

8. **type="range"** → Slider (thanh kéo) → Validate bằng `min`, `max`, `step` → Dùng lọc **khoảng giá sản phẩm**.

9. **type="file"** → Upload file (chọn tệp) → Validate bằng `accept`, `multiple` → Dùng upload **ảnh đánh giá sản phẩm** hoặc upload hóa đơn.

10. **type="url"** → Ô nhập link website → Tự kiểm tra định dạng URL (http/https) → Dùng nhập **link sản phẩm tham khảo** hoặc link mạng xã hội.

## Câu A2 (5đ) — Validation Attributes

**Yêu cầu:** Dự đoán điều gì xảy ra khi user bấm Submit cho mỗi trường hợp và giải thích lý do.

### Trường hợp 1
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống --> 
Dự đoán: Khi Submit, form không gửi được và trình duyệt hiện thông báo bắt buộc nhập dữ liệu (Please fill out this field).
Giải thích: Thuộc tính required bắt buộc ô input phải có giá trị. User để trống nên không hợp lệ.
<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
Dự đoán: Khi Submit, form không gửi được và trình duyệt báo email không đúng định dạng.
Giải thích: type="email" có validation tự động, yêu cầu email phải có dạng hợp lệ (thường phải có ký tự @), nhưng "abc" không đúng format.
<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
Dự đoán: Khi Submit, form không gửi được và trình duyệt báo giá trị vượt giới hạn max.
Giải thích: Input có max="10" nhưng user nhập 15 nên không thỏa điều kiện min/max.
<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
Dự đoán: Khi Submit, form không gửi được và trình duyệt báo sai định dạng pattern.
Giải thích: pattern="[0-9]{10}" yêu cầu nhập đúng 10 chữ số liên tiếp. Giá trị "abc123" có chữ và không đủ 10 số nên không khớp regex.
<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
Dự đoán: Khi Submit, form không gửi được và trình duyệt báo mật khẩu quá ngắn.
Giải thích: minlength="8" yêu cầu tối thiểu 8 ký tự, nhưng "123" chỉ có 3 ký tự nên không đạt yêu cầu.
## So sánh dự đoán và kết quả thực tế (Validation Test)

### Trường hợp 1 — required
- **Dự đoán:** Form không submit, trình duyệt báo bắt buộc nhập.
- **Thực tế:** Đúng. Khi để trống và bấm Submit, trình duyệt hiện thông báo yêu cầu nhập dữ liệu.

### Trường hợp 2 — type="email"
- **Dự đoán:** Form không submit, báo email không hợp lệ.
- **Thực tế:** Đúng. Khi nhập "abc", trình duyệt báo định dạng email sai.

### Trường hợp 3 — min/max
- **Dự đoán:** Form không submit vì 15 vượt quá max=10.
- **Thực tế:** Đúng. Khi nhập 15, trình duyệt báo giá trị vượt giới hạn cho phép.

### Trường hợp 4 — pattern
- **Dự đoán:** Form không submit vì không khớp pattern `[0-9]{10}`.
- **Thực tế:** Đúng. Khi nhập "abc123", trình duyệt báo dữ liệu không đúng định dạng.

### Trường hợp 5 — minlength
- **Dự đoán:** Form không submit vì "123" chỉ có 3 ký tự (< 8).
- **Thực tế:** Không đúng hoàn toàn. Trình duyệt không hiện lỗi `minlength` nếu input không có `required`, nên form vẫn có thể submit. Khi thêm `required` thì lỗi minlength mới hiện đúng như dự đoán.

## Câu A3 (5đ) — Accessibility

### 1) Tại sao `<label for="email">` quan trọng cho người dùng screen reader?
`<label>` giúp liên kết mô tả với ô input thông qua thuộc tính `for` trùng với `id` của input.  
Nhờ vậy, screen reader sẽ đọc đúng nội dung (ví dụ: "Email") khi người dùng di chuyển đến ô nhập.  
Nếu không có label, người khiếm thị sẽ không biết ô đó dùng để nhập gì, gây khó sử dụng form.
### 2) Khi nào dùng `<fieldset>` + `<legend>`? Cho ví dụ cụ thể.
Dùng `<fieldset>` và `<legend>` khi muốn nhóm các trường thông tin có liên quan trong form để dễ hiểu và hỗ trợ accessibility tốt hơn.  
Screen reader sẽ đọc `legend` như tiêu đề của nhóm input.
**Ví dụ:** Nhóm thông tin giao hàng gồm địa chỉ, thành phố, số điện thoại.

```html
<fieldset>
  <legend>Thông tin giao hàng</legend>

  <label for="address">Địa chỉ:</label>
  <input type="text" id="address" name="address">

  <label for="city">Thành phố:</label>
  <select id="city" name="city">
    <option value="hanoi">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
  </select>
</fieldset>
```
### 3) `aria-label` dùng khi nào? Tại sao KHÔNG nên dùng `aria-label` khi đã có `<label>`?
`aria-label` dùng khi phần tử không có text hiển thị để mô tả.
Nó giúp screen reader hiểu chức năng của nút.
Không nên dùng `aria-label` khi đã có `<label>` vì `<label>` là cách chuẩn của HTML và dễ bảo trì hơn.
Nếu dùng cả hai, có thể gây trùng lặp hoặc làm screen reader đọc không đúng, khiến trải nghiệm người dùng bị rối.

## Câu A4 (5đ) — Media

### 1) Giải thích thuộc tính `loading="lazy"` trên thẻ `<img>`. Nó cải thiện gì? Khi nào KHÔNG nên dùng?
`loading="lazy"` giúp trình duyệt trì hoãn việc tải ảnh cho đến khi ảnh gần xuất hiện trên màn hình (khi người dùng cuộn xuống).  

**Nó cải thiện:**
- Tăng tốc độ tải trang ban đầu (page load nhanh hơn)
- Giảm dung lượng tải xuống (tiết kiệm data)
- Tăng hiệu năng website, đặc biệt với trang có nhiều ảnh

**KHÔNG nên dùng khi:**
- Ảnh nằm ngay phần đầu trang (hero image/banner) vì cần hiển thị ngay
- Ảnh quan trọng cho trải nghiệm người dùng (logo, ảnh sản phẩm chính ở đầu)
- Ảnh cần tải sớm để tránh hiện trễ khi người dùng vừa vào trang

### 2) Tại sao nên cung cấp nhiều `<source>` trong thẻ `<video>`? Liệt kê ít nhất 3 format video web phổ biến.
Nên cung cấp nhiều `<source>` vì mỗi trình duyệt hỗ trợ các định dạng video khác nhau.  
Nếu trình duyệt không phát được định dạng thứ nhất, nó sẽ thử định dạng tiếp theo để đảm bảo video luôn chạy.

**Một số format video web phổ biến:**
- MP4
- WebM
- OGV (Ogg/Theora)

### 3) Thuộc tính `alt` trên `<img>` dùng để làm gì? Viết alt tốt cho 3 trường hợp.
Thuộc tính `alt` cung cấp mô tả thay thế cho hình ảnh khi:
- hình bị lỗi không tải được
- người dùng sử dụng screen reader
- hỗ trợ SEO cho website

**Alt tốt cho từng trường hợp:**

- **Ảnh sản phẩm iPhone 16:**  
  `alt="Điện thoại iPhone 16 màu đen, mặt trước và camera sau"`

- **Ảnh trang trí (decorative):**  
  `alt=""` (để trống vì chỉ mang tính trang trí)

- **Ảnh biểu đồ doanh thu Q1/2026:**  
  `alt="Biểu đồ doanh thu Q1 năm 2026 theo tháng: tháng 1, tháng 2, tháng 3 tăng dần"`

## Câu A5 (5đ) — So sánh `<figure>` vs `<img>`
### Khi nào dùng Cách 1 (`<img>` đơn lẻ)?
Dùng khi hình ảnh chỉ mang tính minh họa đơn giản, không cần chú thích (caption) đi kèm và không cần nhóm nội dung.

**Ví dụ thực tế:**
- Icon hoặc logo trên thanh header: logo Shopee, logo cửa hàng.
- Ảnh avatar người dùng trong phần tài khoản hoặc bình luận.

### Khi nào dùng Cách 2 (`<figure>` + `<figcaption>`)?
Dùng khi hình ảnh cần kèm theo chú thích/diễn giải như giá, mô tả, nguồn ảnh hoặc thông tin bổ sung.  
`<figure>` giúp nhóm ảnh và caption thành một khối nội dung có ý nghĩa.

**Ví dụ thực tế:**
- Ảnh sản phẩm trong trang chi tiết sản phẩm kèm giá và mô tả (ví dụ: "iPhone 16 Pro Max — 25.990.000đ").
- Ảnh biểu đồ thống kê doanh thu trong báo cáo kèm chú thích giải thích số liệu hoặc nguồn dữ liệu.


### Giải thích: Vì sao HTML không thể validate Confirm Password?
HTML5 chỉ hỗ trợ validation theo từng input riêng lẻ như required, minlength, pattern,...
Nó không có cơ chế so sánh giá trị giữa 2 input khác nhau (password và confirm password).
Vì vậy việc kiểm tra "Xác nhận mật khẩu" phải dùng JavaScript hoặc xử lý ở phía server.
