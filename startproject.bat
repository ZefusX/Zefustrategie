@echo off
start cmd /k "cd backend && python -m uvicorn api:app --reload"
start cmd /k "cd frontend && npm run dev"
