from flask import Blueprint, request, jsonify

from app.services.category_service import CategoryService

category_bp = Blueprint("category_bp", __name__)


@category_bp.route("/", methods=["POST"])
def create_category():

    data = request.get_json()

    response, status = CategoryService.create_category(data)

    return jsonify(response), status


@category_bp.route("/", methods=["GET"])
def get_categories():

    categories = CategoryService.get_all_categories()

    return jsonify(categories), 200


@category_bp.route("/<int:id>", methods=["GET"])
def get_category(id):

    category = CategoryService.get_category(id)

    if not category:
        return jsonify({
            "message": "Category not found."
        }), 404

    return jsonify(category), 200


@category_bp.route("/<int:id>", methods=["PUT"])
def update_category(id):

    data = request.get_json()

    response, status = CategoryService.update_category(id, data)

    return jsonify(response), status


@category_bp.route("/<int:id>", methods=["DELETE"])
def delete_category(id):

    response, status = CategoryService.delete_category(id)

    return jsonify(response), status