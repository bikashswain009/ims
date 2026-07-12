from app import db
from app.models.mastery import Category


class CategoryRepository:

    @staticmethod
    def get_all():
        return Category.query.all()

    @staticmethod
    def get_by_id(category_id):
        return Category.query.get(category_id)

    @staticmethod
    def get_by_name(category_name):
        return Category.query.filter_by(
            category_name=category_name
        ).first()

    @staticmethod
    def save(category):
        db.session.add(category)
        db.session.commit()

    @staticmethod
    def update():
        db.session.commit()

    @staticmethod
    def delete(category):
        db.session.delete(category)
        db.session.commit()