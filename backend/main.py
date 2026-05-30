from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Todo(BaseModel):
    title: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

list_todos = []
id_title = 0

@app.get("/todos")
def get_todos():
    global list_todos
    return list_todos

@app.post("/todos")
def post_todos(todo: Todo):
    global list_todos
    global id_title
    id_title += 1
    new_todo = {
        "id": id_title,
        "title": todo.title
    }
    list_todos.append(new_todo)
    return list_todos

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    global list_todos
    list_todos = [todo for todo in list_todos if todo["id"] != todo_id]
    return {"message": "deleted"}