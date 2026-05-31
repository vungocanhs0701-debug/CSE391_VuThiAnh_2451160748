import { useState } from "react";

import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] =
        useState("");

    const [filter, setFilter] =
        useState("all");

    function addTodo() {
        if (
            inputValue.trim() === ""
        ) {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false
        };

        setTodos([
            ...todos,
            newTodo
        ]);

        setInputValue("");
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? {
                          ...todo,
                          done: !todo.done
                      }
                    : todo
            )
        );
    }

    function deleteTodo(id) {
        setTodos(
            todos.filter(
                todo =>
                    todo.id !== id
            )
        );
    }

    function handleKeyDown(event) {
        if (
            event.key === "Enter"
        ) {
            addTodo();
        }
    }

    const filteredTodos =
        todos.filter(todo => {
            if (
                filter ===
                "active"
            ) {
                return !todo.done;
            }

            if (
                filter ===
                "completed"
            ) {
                return todo.done;
            }

            return true;
        });

    const activeCount =
        todos.filter(
            todo => !todo.done
        ).length;

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "0 auto",
                padding: "20px"
            }}
        >
            <h1>
                📋 Todo App
            </h1>

            <div>
                <input
                    value={
                        inputValue
                    }
                    onChange={(e) =>
                        setInputValue(
                            e.target.value
                        )
                    }
                    onKeyDown={
                        handleKeyDown
                    }
                    placeholder="Nhập công việc..."
                />

                <button
                    onClick={
                        addTodo
                    }
                >
                    Thêm
                </button>
            </div>

            <br />

            <TodoFilter
                filter={filter}
                setFilter={setFilter}
            />

            {filteredTodos.map(
                todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={
                            toggleTodo
                        }
                        onDelete={
                            deleteTodo
                        }
                    />
                )
            )}

            <hr />

            <p>
                Còn lại:
                {activeCount}
                công việc
            </p>
        </div>
    );
}

export default App;