import React, { useEffect, useState } from "react";
import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../../services/categoryService";

import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import DeleteCategoryModal from "./DeleteCategoryModal";
import ToastMessage from "../../components/ToastMessage";
import { toast } from "react-toastify";

import "./category.css";

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [searchText, setSearchText] = useState("");

    // ============================
    // Load Categories
    // ============================

    const loadCategories = async () => {

        try {

            setLoading(true);

            const data = await getCategories();

            setCategories(data);
            setFilteredCategories(data);

        } catch (error) {

            console.error(error);
            alert("Unable to load categories.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadCategories();

    }, []);

    // ============================
    // Search
    // ============================

    const handleSearch = (e) => {

        const value = e.target.value;

        setSearchText(value);

        const filtered = categories.filter((category) =>

            category.category_name
                .toLowerCase()
                .includes(value.toLowerCase())

        );

        setFilteredCategories(filtered);

    };

    // ============================
    // Add Category
    // ============================

    const handleAdd = () => {

        setSelectedCategory(null);

        setShowModal(true);

    };

    // ============================
    // Edit Category
    // ============================

    const handleEdit = (category) => {

        setSelectedCategory(category);

        setShowModal(true);

    };

    // ============================
    // Delete Category
    // ============================

    const handleDelete = (category) => {

        setSelectedCategory(category);

        setShowDeleteModal(true);

    };

    // ============================
    // Save Category
    // ============================

    const handleSave = async (category) => {

        try {

            if (selectedCategory) {

                await updateCategory(
                    selectedCategory.category_id,
                    category
                );

                ToastMessage.success("Category updated successfully.");

            } else {

                await createCategory(category);

                ToastMessage.success("Category created successfully.");

            }

            setShowModal(false);

            loadCategories();

        } catch (error) {

            console.error(error);

            ToastMessage.error("Unable to save category.");

        }

    };

    // ============================
    // Confirm Delete
    // ============================

    const confirmDelete = async () => {

        try {

            await deleteCategory(selectedCategory.category_id);

            ToastMessage.success("Category deleted successfully.");

            setShowDeleteModal(false);

            loadCategories();

        } catch (error) {

            console.error(error);

            ToastMessage.error("Unable to delete category.");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="mb-0">
                        Category Management
                    </h3>

                </div>

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-6">

                            <button
                                className="btn btn-success"
                                onClick={handleAdd}
                            >
                                + Add Category
                            </button>

                        </div>

                        <div className="col-md-6">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Category..."
                                value={searchText}
                                onChange={handleSearch}
                            />

                        </div>

                    </div>

                    {

                        loading ?

                            (

                                <div className="text-center">

                                    <div className="spinner-border text-primary">

                                    </div>

                                </div>

                            )

                            :

                            (

                                <CategoryList

                                    categories={filteredCategories}

                                    onEdit={handleEdit}

                                    onDelete={handleDelete}

                                />

                            )

                    }

                </div>

            </div>

            <CategoryForm

                show={showModal}

                handleClose={() => setShowModal(false)}

                category={selectedCategory}

                onSave={handleSave}

            />

            <DeleteCategoryModal

                show={showDeleteModal}

                handleClose={() => setShowDeleteModal(false)}

                onDelete={confirmDelete}

                category={selectedCategory}

            />

        </div>

    );

};

export default Category;