# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — DOM Tree

## DOM Tree

```text
div#app
│
├── header
│   │
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       │
│       ├── a.active
│       │   └── "All"
│       │
│       ├── a
│       │   └── "Active"
│       │
│       └── a
│           └── "Completed"
│
└── main
    │
    ├── form#todoForm
    │   │
    │   ├── input#todoInput
    │   │
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        │
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
```


# Query Selector

## 1. Chọn thẻ h1

```js
document.querySelector("h1");
```

## 2. Chọn input trong form

```js
document.querySelector("#todoForm input");
```

Hoặc:

```js
document.querySelector("#todoInput");
```

## 3. Chọn tất cả .todo-item

```js
document.querySelectorAll(".todo-item");
```

## 4. Chọn link đang active

```js
document.querySelector("a.active");
```

Hoặc:

```js
document.querySelector("nav a.active");
```

## 5. Chọn li đầu tiên trong #todoList

```js
document.querySelector("#todoList li");
```

Hoặc:

```js
document.querySelector("#todoList li:first-child");
```


## 6. Chọn tất cả a bên trong nav

```js
document.querySelectorAll("nav a");
```

# Bảng tổng hợp

| Yêu cầu | querySelector |
|----------|---------------|
| Chọn h1 | `document.querySelector("h1")` |
| Chọn input trong form | `document.querySelector("#todoForm input")` |
| Chọn tất cả todo-item | `document.querySelectorAll(".todo-item")` |
| Chọn link active | `document.querySelector("a.active")` |
| Chọn li đầu tiên | `document.querySelector("#todoList li:first-child")` |
| Chọn tất cả link trong nav | `document.querySelectorAll("nav a")` |


# Kết luận

Các hàm DOM được dùng nhiều nhất:

```js
document.querySelector()
document.querySelectorAll()
```

Cho phép chọn phần tử bằng:

- Tag name
- Class
- ID
- CSS selector
- Pseudo selector