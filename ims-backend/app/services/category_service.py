from app.models.mastery import Category
from app.repositories.category_repository import CategoryRepository


class CategoryService:

    @staticmethod
    def create_category(data):

        existing = CategoryRepository.get_by_name(
            data["category_name"]
        )

        if existing:
            return {
                "message": "Category already exists."
            }, 409

        category = Category(
            category_name=data["category_name"],
            description=data.get("description")
        )

        CategoryRepository.save(category)

        return {
            "message": "Category created successfully.",
            "data": category.to_dict()
        }, 201

    @staticmethod
    def get_all_categories():

        categories = CategoryRepository.get_all()

        return [c.to_dict() for c in categories]

    @staticmethod
    def get_category(category_id):

        category = CategoryRepository.get_by_id(category_id)

        if not category:
            return None

        return category.to_dict()

    @staticmethod
    def update_category(category_id, data):

        category = CategoryRepository.get_by_id(category_id)

        if not category:
            return {
                "message": "Category not found."
            }, 404

        category.category_name = data.get(
            "category_name",
            category.category_name
        )

        category.description = data.get(
            "description",
            category.description
        )

        CategoryRepository.update()

        return {
            "message": "Category updated successfully.",
            "data": category.to_dict()
        }, 200

    @staticmethod
    def delete_category(category_id):

        category = CategoryRepository.get_by_id(category_id)

        if not category:
            return {
                "message": "Category not found."
            }, 404

        CategoryRepository.delete(category)

        return {
            "message": "Category deleted successfully."
        }, 200