import { useState } from "react";

function ListBasics() {
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const avgAge =
        students.reduce(
            (sum, s) => sum + s.age,
            0
        ) / students.length;

    return (
        <div>
            <h2>Danh sách sinh viên</h2>

            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        color:
                            student.age >= 20
                                ? "green"
                                : "black"
                    }}
                >
                    {index + 1}. {student.name} - {student.age} tuổi
                </div>
            ))}

            <p>
                Tuổi trung bình:
                {avgAge.toFixed(2)}
            </p>
        </div>
    );
}
function CreateItem() {
  const [items, setItems] = useState([
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" }
  ]);

  const [newName, setNewName] =
      useState("");

  const [message, setMessage] =
      useState("");

  function handleAdd() {
      if (
          newName.trim() === ""
      ) {
          return;
      }

      const newItem = {
          id: Date.now(),
          name: newName
      };

      setItems([
          ...items,
          newItem
      ]);

      setNewName("");

      setMessage(
          "Đã thêm thành công!"
      );
  }

  return (
      <div>
          <h2>Thêm môn học</h2>

          <input
              value={newName}
              onChange={(e) =>
                  setNewName(
                      e.target.value
                  )
              }
          />

          <button
              onClick={
                  handleAdd
              }
          >
              Thêm
          </button>

          <p>{message}</p>

          {items.map(item => (
              <div key={item.id}>
                  {item.name}
              </div>
          ))}
      </div>
  );
}
function DeleteItem() {
  const [items, setItems] =
      useState([
          {
              id: 1,
              name: "Minh"
          },
          {
              id: 2,
              name: "An"
          },
          {
              id: 3,
              name: "Linh"
          }
      ]);

  const [deletedName,
      setDeletedName]
      = useState("");

  function handleDelete(
      item
  ) {
      const confirmDelete =
          window.confirm(
              `Xóa ${item.name}?`
          );

      if (
          !confirmDelete
      ) return;

      setDeletedName(
          item.name
      );

      setItems(
          items.filter(
              i =>
                  i.id !==
                  item.id
          )
      );
  }

  return (
      <div>
          <h2>
              Xóa sinh viên
          </h2>

          {deletedName && (
              <p>
                  Đã xóa:
                  {deletedName}
              </p>
          )}

          {items.map(item => (
              <div
                  key={item.id}
              >
                  {item.name}

                  <button
                      onClick={() =>
                          handleDelete(
                              item
                          )
                      }
                  >
                      Xóa
                  </button>
              </div>
          ))}
      </div>
  );
}
function UpdateItem() {
  const [items, setItems] =
      useState([
          {
              id: 1,
              name: "Minh",
              age: 20
          },
          {
              id: 2,
              name: "An",
              age: 21
          }
      ]);

  const [editingId,
      setEditingId]
      = useState(null);

  const [editName,
      setEditName]
      = useState("");

  function startEdit(
      item
  ) {
      setEditingId(
          item.id
      );

      setEditName(
          item.name
      );
  }

  function saveEdit() {
      if (
          editName.trim() ===
          ""
      ) {
          return;
      }

      setItems(
          items.map(item =>
              item.id ===
              editingId
                  ? {
                        ...item,
                        name: editName
                    }
                  : item
          )
      );

      setEditingId(
          null
      );
  }

  return (
      <div>
          <h2>
              Sửa thông tin
          </h2>

          {items.map(item => (
              <div
                  key={item.id}
              >
                  {editingId ===
                  item.id ? (
                      <>
                          <input
                              value={
                                  editName
                              }
                              onChange={(
                                  e
                              ) =>
                                  setEditName(
                                      e
                                          .target
                                          .value
                                  )
                              }
                          />

                          <button
                              onClick={
                                  saveEdit
                              }
                          >
                              Lưu
                          </button>
                      </>
                  ) : (
                      <>
                          {item.name}

                          <button
                              onClick={() =>
                                  startEdit(
                                      item
                                  )
                              }
                          >
                              Sửa
                          </button>
                      </>
                  )}
              </div>
          ))}
      </div>
  );
}
function App() {
  return (
      <div style={{ padding: "20px" }}>
          <ListBasics />

          <hr />

          <CreateItem />

          <hr />

          <DeleteItem />

          <hr />

          <UpdateItem />
      </div>
  );
}

export default App;
