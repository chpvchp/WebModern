Dưới đây là **2 bài tập Level 0 (làm quen Fullstack React + FastAPI)** — mục tiêu là *hiểu flow web + chạy được code + sửa được UI đơn giản*, chưa cần database.

---

# 🧪 BÀI TẬP 1 — “Hello Fullstack + API đầu tiên”

## 🎯 Mục tiêu

* Hiểu frontend gọi backend như thế nào
* Chạy được React + FastAPI cùng lúc
* Hiển thị dữ liệu từ API lên UI

---

## ⚙️ Backend (FastAPI)

### Yêu cầu:

Tạo API:

* `GET /hello`
* Trả về JSON:

```json
{
  "message": "Xin chào từ backend"
}
```

### Bonus:

* Thêm `/time` trả về giờ hiện tại

---

## 🎨 Frontend (React)

### Yêu cầu:

* Tạo 1 component `App`
* Khi load trang:

  * gọi API `/hello`
  * hiển thị message ra màn hình

### Gợi ý:

* dùng `fetch()` hoặc `axios`
* dùng `useEffect`

---

## 🧠 Hiểu được sau bài này:

* Backend trả JSON
* Frontend fetch API
* React render dữ liệu động

---

## 🚀 Nâng cao nhẹ (optional)

* Thêm nút “Reload”
* Click để gọi lại API

---

# 🧪 BÀI TẬP 2 — “Mini Profile Card API”

## 🎯 Mục tiêu

* Biết gửi data từ backend sang frontend
* Biết render object trong React
* Hiểu structure dữ liệu

---

## ⚙️ Backend (FastAPI)

### Tạo API:

`GET /profile`

Trả về:

```json
{
  "name": "Nguyen Van A",
  "age": 18,
  "job": "Student",
  "skills": ["HTML", "CSS", "JS"]
}
```

---

## 🎨 Frontend (React + Tailwind)

### Yêu cầu:

Hiển thị profile dạng card:

* Tên
* Tuổi
* Nghề
* Danh sách skill

---

### Layout gợi ý (Tailwind):

* card ở giữa màn hình
* có border + shadow
* list skill dạng badge

---

## 🧠 Hiểu được sau bài này:

* Render object + array trong React
* UI basic với Tailwind
* Data structure từ API

---

## 🚀 Nâng cao nhẹ (optional)

* Thêm loading state:

  * “Đang tải...”
* Thêm error state:

  * API lỗi thì hiển thị message

---

# 🔥 Sau 2 bài này bạn sẽ nắm được:

* Frontend ↔ Backend hoạt động thế nào
* React fetch API cơ bản
* FastAPI tạo endpoint cơ bản
* Hiểu dữ liệu JSON đi qua hệ thống

---

Nếu bạn muốn, mình có thể nâng tiếp:
👉 Level 0.5 (CRUD mini todo không database)
👉 Hoặc sửa bài bạn làm + review code như mentor thật
👉 Hoặc chuyển sang Level 1 project chuẩn luôn
