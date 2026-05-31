import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [color, setColor] = useState("#ddd");

    function handleClick() {
        setMessage(
            "Đã click lúc " +
            new Date().toLocaleTimeString()
        );

        setClickCount(clickCount + 1);
    }

    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }

    function randomColor() {
        const colors = [
            "red",
            "green",
            "blue",
            "orange",
            "purple"
        ];

        const random =
            colors[
                Math.floor(Math.random() * colors.length)
            ];

        setColor(random);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Bài 5.1 - Click Events</h2>

            <p>{message}</p>

            <p>Số lần click: {clickCount}</p>

            <button onClick={handleClick}>
                Click me
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            <button onClick={randomColor}>
                Đổi màu ngẫu nhiên
            </button>

            <button
                onClick={() =>
                    setLiked(!liked)
                }
            >
                {liked
                    ? "❤️ Đã thích"
                    : "🤍 Thích"}
            </button>

            <div
                style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: color,
                    marginTop: "10px"
                }}
            />
        </div>
    );
}
function InputEvents() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(e) {
      setText(e.target.value);
  }

  const wordCount =
      text.trim() === ""
          ? 0
          : text.trim().split(/\s+/).length;

  return (
      <div style={{ padding: "20px" }}>
          <h2>Bài 5.2 - Input Events</h2>

          <input
              value={text}
              onChange={handleChange}
              maxLength={100}
              placeholder="Nhập gì đó..."
          />

          <p>
              Ký tự:
              {text.length}/100
          </p>

          <p>
              Số từ:
              {wordCount}
          </p>

          <p>
              Preview:
              {text}
          </p>

          {text.length > 80 && (
              <p style={{ color: "red" }}>
                  ⚠️ Sắp hết ký tự!
              </p>
          )}

          <hr />

          <input
              placeholder="Nhập email..."
              value={email}
              onChange={(e) =>
                  setEmail(e.target.value)
              }
          />

          <p
              style={{
                  color: email.includes("@")
                      ? "green"
                      : "red"
              }}
          >
              {email.includes("@")
                  ? "Email hợp lệ"
                  : "Email chưa hợp lệ"}
          </p>
      </div>
  );
}
function KeyboardEvents() {
  const [lastKey, setLastKey] =
      useState("");

  const [log, setLog] =
      useState([]);

  const [inputValue, setInputValue] =
      useState("");

  function handleKeyDown(event) {
      setLastKey(event.key);

      setLog((prev) => [
          ...prev.slice(-4),
          event.key
      ]);
  }

  function handleInputKeyDown(event) {
      if (
          event.key === "Enter"
      ) {
          alert(
              "Bạn nhập: " +
              inputValue
          );

          setInputValue("");
      }

      if (
          event.key === "Escape"
      ) {
          setInputValue("");
      }
  }

  return (
      <div
          style={{ padding: "20px" }}
          tabIndex={0}
          onKeyDown={
              handleKeyDown
          }
      >
          <h2>
              Bài 5.3 - Keyboard Events
          </h2>

          <p>
              Phím cuối:
              {lastKey}
          </p>

          <p>
              Log:
              {log.join(" → ")}
          </p>

          <input
              value={inputValue}
              onChange={(e) =>
                  setInputValue(
                      e.target.value
                  )
              }
              onKeyDown={
                  handleInputKeyDown
              }
              placeholder="Nhập rồi Enter..."
          />

          <p>
              Enter để gửi,
              Escape để xóa
          </p>
      </div>
  );
}
function FormEvents() {
  const [formData, setFormData] =
      useState({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
      });

  const [submitted, setSubmitted] =
      useState(false);

  function handleChange(e) {
      const {
          name,
          value
      } = e.target;

      setFormData({
          ...formData,
          [name]: value
      });
  }

  function handleSubmit(event) {
      event.preventDefault();

      if (
          !formData.email.includes("@")
      ) {
          alert(
              "Email không hợp lệ"
          );
          return;
      }

      if (
          formData.password !==
          formData.confirmPassword
      ) {
          alert(
              "Mật khẩu không khớp"
          );
          return;
      }

      setSubmitted(true);
  }

  function handleReset() {
      setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
      });

      setSubmitted(false);
  }

  if (submitted) {
      return (
          <div
              style={{
                  background:
                      "#d4edda",
                  padding:
                      "15px"
              }}
          >
              <h3>
                  ✅ Đã gửi thành công
              </h3>

              <p>
                  Tên:
                  {formData.name}
              </p>

              <p>
                  Email:
                  {formData.email}
              </p>

              <button
                  onClick={
                      handleReset
                  }
              >
                  Gửi lại
              </button>
          </div>
      );
  }

  return (
      <form
          onSubmit={
              handleSubmit
          }
      >
          <h2>
              Bài 5.4 - Form Events
          </h2>

          <input
              name="name"
              placeholder="Tên"
              value={
                  formData.name
              }
              onChange={
                  handleChange
              }
          />

          <br />

          <input
              name="email"
              placeholder="Email"
              value={
                  formData.email
              }
              onChange={
                  handleChange
              }
          />

          <br />

          <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={
                  formData.password
              }
              onChange={
                  handleChange
              }
          />

          <br />

          <input
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              value={
                  formData.confirmPassword
              }
              onChange={
                  handleChange
              }
          />

          <br />

          <button type="submit">
              Gửi
          </button>

          <button
              type="button"
              onClick={
                  handleReset
              }
          >
              Xóa
          </button>
      </form>
  );
}
function App() {
  return (
      <div>
          <ClickEvents />
          <hr />
          <InputEvents />
          <hr />
          <KeyboardEvents />
          <hr />
          <FormEvents />
      </div>
  );
}

export default App;
