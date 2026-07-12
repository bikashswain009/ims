import React from "react";

const CategoryList = ({ categories, onEdit, onDelete }) => {

    if (!categories || categories.length === 0) {
        return (
            <div className="alert alert-info text-center">
                No categories found.
            </div>
        );
    }

    return (
        <div className="table-responsive">

            <table className="table table-striped table-bordered table-hover align-middle">

                <thead className="table-dark">

                    <tr>
                        <th width="10%">ID</th>
                        <th width="25%">Category Name</th>
                        <th>Description</th>
                        <th width="20%" className="text-center">
                            Action
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {
                        categories.map((category) => (

                            <tr key={category.category_id}>

                                <td>
                                    <span class="text-center d-block">{category.category_id}</span>
                                </td>

                                <td>
                                    {category.category_name}
                                </td>

                                <td>
                                    {category.description || "-"}
                                </td>

                                <td className="text-center">

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => onEdit(category)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onDelete(category)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
};

export default CategoryList;