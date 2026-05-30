Dưới đây là **2 bài tập Level 1 (Beginner Fullstack React + FastAPI)** — mục tiêu là giúp bạn làm quen đúng kiểu “có frontend + backend + API + state”.

---

# 🧪 BÀI 1 — Todo List Fullstack (CRUD cơ bản)

## 🎯 Mục tiêu

Làm được app quản lý công việc:

* Thêm task
* Xem danh sách task
* Xoá task
* (tuỳ chọn) đánh dấu hoàn thành

---

## 🎨 Frontend (React + Tailwind)

### Giao diện cần có:

* Input nhập task
* Nút “Add”
* Danh sách task
* Nút “Delete”

### Yêu cầu kỹ thuật:

* Dùng `useState` lưu danh sách task
* Dùng `fetch/axios` gọi API
* Dùng Tailwind để:

  * căn giữa form
  * style card task

---

## ⚙️ Backend (FastAPI)

### API cần có:

* `GET /tasks`

  * trả về danh sách task

* `POST /tasks`

  * thêm task mới

* `DELETE /tasks/{id}`

  * xoá task

### Data model:

```json
{
  "id": 1,
  "title": "Học React"
}
```

---

## 🧠 Nâng cấp nhẹ (optional)

* Thêm field `completed: true/false`
* API `PUT /tasks/{id}` để toggle trạng thái

---

## 💡 Điều bạn học được

* CRUD fullstack cơ bản
* React state flow
* API request/response
* Data flow frontend ↔ backend

---

# 🧪 BÀI 2 — Note App (CRUD + Form + Validate)

## 🎯 Mục tiêu

Làm app ghi chú giống “mini Notion” đơn giản:

* Thêm note
* Xem note
* Xoá note
* Validate input

---

## 🎨 Frontend (React + Tailwind)

### Giao diện:

* Input title
* Textarea content
* Button “Save note”
* List note cards

### Mỗi note hiển thị:

* Title
* Content (preview ngắn)
* Button delete

### Yêu cầu:

* Form có validation:

  * title không được rỗng
  * content tối thiểu 10 ký tự
* Dùng `useEffect` để load data từ API khi mở app

---

## ⚙️ Backend (FastAPI)

### API:

* `GET /notes`
* `POST /notes`
* `DELETE /notes/{id}`

### Model:

```json
{
  "id": 1,
  "title": "Học FastAPI",
  "content": "FastAPI rất nhanh và dễ học"
}
```

---

## 🧠 Nâng cấp nhẹ (optional)

* Thêm search: `/notes?query=abc`
* Sort note mới nhất lên đầu

---

## 💡 Điều bạn học được

* Form handling trong React
* Validate input frontend
* useEffect (load data khi mount)
* API query cơ bản

---

# 🚀 Cách làm đúng (quan trọng hơn bài tập)

Khi làm 2 bài này, hãy luôn follow flow:

### 1. Backend trước

* Define model
* Làm API
* Test bằng Postman

### 2. Frontend sau

* UI trước (mock data)
* Gắn API sau

### 3. Cuối cùng

* Fix CORS
* Clean UI

---

# 📌 Nếu bạn muốn nâng thêm 1 level

Mình có thể nâng 2 bài này lên bản:

* có login
* có PostgreSQL
* có deploy lên Vercel + Render
* có structure project chuẩn production

Chỉ cần nói: **“nâng level bài tập”** 👍
