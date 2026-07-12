from app import create_app, db
from app.logger import logger
from sqlalchemy import text

app = create_app()

with app.app_context():
    try:
        db.session.execute(db.text("SELECT 1"))
        logger.info("Database Connected Successfully!")
    except Exception as e:
        logger.error("Database Connection Failed!")
        logger.error(e)


if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )