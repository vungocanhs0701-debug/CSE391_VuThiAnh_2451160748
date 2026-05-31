import { useState } from "react";

function BadCounter() {
    let count = 0;

    console.log("BadCounter render");

    function handleClick() {
        count = count + 1;
        console.log("Count:", count);
    }

    return (
        <div style={{ padding: "20px", border: "2px solid red", marginBottom: "20px" }}>
            <h2>❌ Counter tệ dùng biến thường</h2>

            <p>Bộ đếm: {count}</p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "red" }}>
                Nhấn nút thì Console tăng, nhưng số trên màn hình không đổi.
            </p>
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
        <div style={{ padding: "20px", border: "2px solid green" }}>
            <h2>✅ Counter tốt dùng useState</h2>

            <p>Bộ đếm: {count}</p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "green" }}>
                Nhấn nút thì số trên màn hình cập nhật.
            </p>
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