from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import inspect
from app.logger import logger

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config.from_object("app.config.Config")

    CORS(app)

    db.init_app(app)

    from app.models.mastery import Category, Supplier, Product
    from app.controllers.category_controller import category_bp

    app.register_blueprint(
        category_bp,
        url_prefix="/api/categories"
    )

    with app.app_context():
        inspector = inspect(db.engine)

        tables = ["Categories", "Suppliers", "Products"]

        for table in tables:
            if inspector.has_table(table):
                logger.info(f"Table '{table}' already exists.")
            else:
                logger.info(f"Creating table '{table}'...")

        # Creates only the tables that do not exist
        db.create_all()

        logger.error("Database initialization completed.")

    return app