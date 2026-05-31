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