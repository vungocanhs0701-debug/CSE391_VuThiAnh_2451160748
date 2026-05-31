function UserCard({ name, email, avatar }) {
  return (
      <div
          style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px"
          }}
      >
          <img
              src={avatar}
              alt={name}
          />

          <h3>{name}</h3>

          <p>{email}</p>
      </div>
  );
}

function App() {
  return (
      <div>
          <UserCard
              name="Vũ Thị Anh"
              email="anh@gmail.com"
              avatar="https://placehold.co/100"
          />

          <UserCard
              name="Minh"
              email="minh@gmail.com"
              avatar="https://placehold.co/100"
          />

          <UserCard
              name="Linh"
              email="linh@gmail.com"
              avatar="https://placehold.co/100"
          />
      </div>
  );
}

export default App;