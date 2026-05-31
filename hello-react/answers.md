# Tier 0 — Component đầu tiên

## Bài 0.1 — Chạy React đầu tiên

### Các lệnh đã thực hiện

```bash
npm create vite@latest hello-react -- --template react
cd hello-react
npm install
npm run dev
```
### Kết quả

Project React đã chạy thành công tại:

http://localhost:5173/

### Nội dung file src/App.jsx
```jsx
function App() {
    return (
        <div>
            <h1>Vũ Thị Anh</h1>

            <p>Đây là component React đầu tiên của tôi</p>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default App;
```
### Trả lời câu hỏi
1. File .jsx khác gì file .js?

File .jsx là file JavaScript nhưng có thể viết cú pháp JSX.

JSX cho phép viết giao diện giống HTML bên trong JavaScript.

Ví dụ:
```jsx
<h1>Xin chào React</h1>
```
### 2. Tại sao phải export default App?

Dòng:
```jsx
export default App;
```
dùng để xuất component App ra ngoài.

Nhờ vậy file main.jsx có thể import App và hiển thị nó lên trình duyệt.

### 3. Thử xóa export default thì chuyện gì xảy ra?

Nếu xóa:
```jsx
export default App;
```
thì chương trình sẽ báo lỗi vì file khác không import được component App.

Khi đó trang React có thể không hiển thị đúng.

# Bài 0.2 — JSX là HTML "xịn hơn"

## Bài 1: UserProfile

```jsx
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img
                src="photo.jpg"
                alt="Ảnh đại diện"
            />

            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```

---

## Bài 2: ProductInfo

```jsx
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>

            <p className="price">
                25.000.000đ
            </p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```

---

## Khác nhau giữa HTML và JSX

### class → className

HTML:

```html
<div class="profile">
```

JSX:

```jsx
<div className="profile">
```

### for → htmlFor

HTML:

```html
<label for="email">
```

JSX:

```jsx
<label htmlFor="email">
```

### Thẻ tự đóng phải có /

HTML:

```html
<img src="photo.jpg">
<input type="email">
```

JSX:

```jsx
<img src="photo.jpg" />
<input type="email" />
```

## Tier 1 — React Flow
### Bài 1.1 — Component render lần đầu
```jsx
function LifecycleDemo() { 
    console.log("1️⃣ Component được gọi!"); 
    return ( 
        <div> 
            <h2>Lifecycle Demo</h2> 
        </div> 
        ); 
    }
    export default LifecycleDemo;
```
### Kết quả

Khi mở trang hoặc refresh:

1️⃣ Component được gọi!

xuất hiện trong Console.

### Câu hỏi 1

Tại sao component chỉ render 1 lần?

Vì React gọi component một lần khi trang được tải lần đầu. Quá trình này gọi là Mount.

### Câu hỏi 2

Khi nào component render lại?

Component sẽ render lại khi:

    State thay đổi
    Props thay đổi

Khi đó React sẽ cập nhật giao diện mới lên màn hình.



# Bài 1.2 — Biến bình thường vs useState

## Code đã chạy

```jsx
import { useState } from "react";

function BadCounter() {
    let count = 0;

    console.log("BadCounter render");

    function handleClick() {
        count = count + 1;
        console.log("Count:", count);
    }

    return (
        <div>
            <h2>Counter tệ dùng biến thường</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
        </div>
    );
}

function GoodCounter() {
    const [count, setCount] = useState(0);

    console.log("GoodCounter render");

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter tốt dùng useState</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <BadCounter />
            <GoodCounter />
        </div>
    );
}

export default App;
```
### Thử nghiệm BadCounter

Khi nhấn nút tăng ở BadCounter:

    Console có hiện Count: 1, Count: 2, Count: 3
    Nhưng số trên màn hình vẫn là 0

Lý do: count là biến bình thường. Khi thay đổi biến bình thường, React không biết cần cập nhật giao diện.
### Thử nghiệm GoodCounter

Khi nhấn nút tăng ở GoodCounter:

    Số trên màn hình tăng từ 0 lên 1, 2, 3
    Console hiện `GoodCounter render`

Lý do: `count` là state được tạo bằng `useState`. Khi gọi `setCount`, React biết dữ liệu thay đổi và render lại giao diện.
### So sánh
Nội dung	Biến bình thường	useState
Khai báo	`let count = 0`	`const [count, setCount] = useState(0)`
Thay đổi	`count = count + 1`	`setCount(count + 1)`
UI cập nhật	Không	Có
Re-render	Không xảy ra	Xảy ra khi gọi setCount
### Kết luận

Muốn dữ liệu thay đổi và giao diện React cập nhật theo, cần dùng `useState.`

## Bài 1.3 — Luồng hoạt động của React
```jsx
import { useState } from "react"; 
function FlowDemo() { 
    console.log("🔄 Component render!"); 
    const [step, setStep] = useState(1); 
    return ( 
        <div> 
            <p>Bước hiện tại: {step}</p> 
            <button onClick={() => setStep(step + 1)}>
                  Bước tiếp theo
                  </button> 
                  </div> 
            );
}
export default FlowDemo;
```
### Kết quả

Khi nhấn nút:

Bước tiếp theo

giá trị `step` thay đổi.

React sẽ:

Gọi `setStep()`
State thay đổi
Component render lại
JSX mới được tạo
Giao diện được cập nhật
### Luồng hoạt động React
Component được gọi
↓
Return JSX
↓
Hiển thị lên màn hình
↓
Người dùng tương tác
↓
Gọi setState()
↓
React re-render
↓
Return JSX mới
↓
UI cập nhật
### Kết luận

React không cập nhật giao diện trực tiếp.

Khi state thay đổi bằng `setState`, React sẽ render lại component và cập nhật phần giao diện thay đổi.

# Bài 2.1 — Hiển thị biến đơn giản

Đã sử dụng:

- Biến string
- Biến number
- Tính toán trong JSX
- Ternary trong JSX

Ví dụ:

```jsx
<p>Tuổi: {tuoi}</p>
<p>Năm sau: {tuoi + 1}</p>
<p>BMI: {bmi}</p>
```
Dùng {} để nhúng JavaScript vào JSX.
# Bài 2.2 — Conditional Rendering

Đã sử dụng:

### Ternary

```jsx
{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}
```
### Toán tử &&
```jsx
{stock === 0 && <h3>Hết hàng</h3>}
```
### Kết quả:

Hiển thị Online bằng icon 🟢
Hiển thị Hết hàng khi stock = 0
# Bài 2.3 — Render danh sách

Đã dùng:

```jsx
products.map(...)
```
để render danh sách sản phẩm.

Mỗi phần tử có:
```jsx
key={product.id}
```
để React nhận diện phần tử.

Đã tô màu đỏ cho sản phẩm có giá > 1.000.000đ.
Đã tính tổng giá bằng:
```jsx
products.reduce(...)
```

---

## Kết luận Tier 2

Ghi thêm:

```md
# Kết luận Tier 2

Đã hiểu:

- Dùng {} để nhúng JavaScript vào JSX
- Hiển thị biến
- Tính toán trong JSX
- Conditional Rendering bằng ternary
- Conditional Rendering bằng &&
- Render danh sách bằng map()
- Sử dụng key khi render list
