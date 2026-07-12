import os
from urllib.parse import quote_plus
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    DB_USERNAME = os.getenv("DB_USERNAME")
    DB_PASSWORD = quote_plus(os.getenv("DB_PASSWORD", ""))
    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")
    DB_NAME = os.getenv("DB_NAME")

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}"
        f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = os.getenv("SECRET_KEY")