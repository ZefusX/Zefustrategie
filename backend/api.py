import os
from pathlib import Path

import yaml
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from utils import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # A changer une fois l'url du site fait
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/articles")
def get_article_list():
    files = os.listdir("./articles")

    articles = [f for f in files if f.endswith(".md")]
    return articles

@app.get("/articles/{slug}")
def get_article_content(slug: str):
    filepath = Path(f"./articles/{slug}")
    
    if not filepath.exists():
        raise HTTPException(status_code=404, detail="Fichier non trouvé")

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            raw = f.read()

        metadata, content = parse_markdown(raw)

        return {
            "metadata": metadata,
            "content": content
        }
    except Exception as e:
        print(f"Erreur de lecture/parsing : {e}")
        raise HTTPException(status_code=500, detail="Erreur serveur")