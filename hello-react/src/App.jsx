import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    const color =
        count > 0 ? "green" :
        count < 0 ? "red" :
        "black";

    const status =
        count > 0 ? "Số dương" :
        count < 0 ? "Số âm" :
        "Bằng 0";

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
            <h2>Bài 4.1 — useState với số</h2>

            <h3 style={{ color: color }}>
                Bộ đếm: {count}
            </h3>

            <p>Trạng thái: {status}</p>

            <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
            <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
            <button onClick={() => setCount(count + 5)}>Tăng 5</button>
        </div>
    );
}

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isEmailValid = email.includes("@");

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
            <h2>Bài 4.2 — useState với chuỗi</h2>

            <div>
                <label>Tên: </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                />
            </div>

            <p>Số ký tự: {name.length}/100</p>

            <div>
                <label>Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                />
            </div>

            <p style={{ color: isEmailValid ? "green" : "red" }}>
                {email === ""
                    ? "Chưa nhập email"
                    : isEmailValid
                    ? "Email hợp lệ"
                    : "Email chưa hợp lệ"}
            </p>

            <div>
                <label>Mật khẩu: </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                />

                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>

            {name && (
                <p style={{ background: "#f0f0f0", padding: "10px" }}>
                    Xin chào <strong>{name}</strong>!
                </p>
            )}
        </div>
    );
}

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);

    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        border: "1px solid #ddd",
        marginBottom: "20px"
    };

    return (
        <div style={themeStyle}>
            <h2>Bài 4.3 — useState với boolean</h2>

            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
            </button>

            {isVisible && (
                <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd" }}>
                    <p>Đây là nội dung có thể ẩn/hiện.</p>
                </div>
            )}

            <hr />

            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <hr />

            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>

            <hr />

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
            />

            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            </button>

            <hr />

            <h3 onClick={() => setOpenAccordion(!openAccordion)} style={{ cursor: "pointer" }}>
                Accordion: Click để mở/đóng
            </h3>

            {openAccordion && (
                <p>
                    Đây là nội dung bên trong accordion.
                </p>
            )}

            <hr />

            <button onClick={() => setIsLightOn(!isLightOn)}>
                {isLightOn ? "💡 Đèn đang bật" : "⚫ Đèn đang tắt"}
            </button>
        </div>
    );
}

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit() {
        if (name.trim() === "") {
            setError("Vui lòng nhập tên");
            return;
        }

        if (email.trim() === "") {
            setError("Vui lòng nhập email");
            return;
        }

        if (age === "" || Number(age) <= 0 || Number(age) >= 100) {
            setError("Tuổi phải lớn hơn 0 và nhỏ hơn 100");
            return;
        }

        setError("");
        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
        setError("");
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
            <h2>Bài 4.4 — Kết hợp nhiều useState</h2>

            {!submitted ? (
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {name && (
                        <p style={{ color: "blue" }}>
                            Xin chào {name}!
                        </p>
                    )}

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Tuổi: </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                            />
                            Là sinh viên
                        </label>
                    </div>

                    {error && (
                        <p style={{ color: "red" }}>
                            {error}
                        </p>
                    )}

                    <button onClick={handleSubmit}>
                        Đăng ký
                    </button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
                    <h3>✅ Đăng ký thành công!</h3>

                    <p>Tên: {name}</p>
                    <p>Email: {email}</p>
                    <p>Tuổi: {age}</p>
                    <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>

                    <button onClick={handleReset}>
                        Đăng ký lại
                    </button>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Tier 4 — useState cơ bản</h1>

            <NumberState />
            <StringState />
            <BooleanState />
            <MultipleStates />
        </div>
    );
}

export default App;