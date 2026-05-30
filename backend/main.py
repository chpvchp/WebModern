from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"]
)

@app.get("/profile")
def get_profile():
    return {
        "name": "Cao Hoàng Phúc",
        "age": 17,
        "job": "Student High School",
        "skills": "React, Tailwind CSS, Python"
    }