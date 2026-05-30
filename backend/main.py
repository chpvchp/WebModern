from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class ToDo(BaseModel):
    title: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

list_todos = []
id_todo = 0

@app.get("/todos")
def get_list_todo():
    global list_todos
    return list_todos

@app.post("/todos")
def add_todo(todo: ToDo):
    global list_todos, id_todo
    new_todo = {
        "id": id_todo,
        "title": todo.title
    }
    id_todo += 1
    list_todos.append(new_todo)
    return {"message": "added!"}

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    global list_todos
    
    list_todos = [todo for todo in list_todos if todo["id"] != todo_id]
    return {"message": "deleted!"}