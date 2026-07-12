import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CategoryForm = ({ show, handleClose, category, onSave }) => {

    const [formData, setFormData] = useState({
        category_name: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    // Load data when editing
    useEffect(() => {

        if (category) {

            setFormData({
                category_name: category.category_name || "",
                description: category.description || ""
            });

        } else {

            setFormData({
                category_name: "",
                description: ""
            });

        }

        setErrors({});

    }, [category, show]);

    // Handle input change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    // Validation
    const validate = () => {

        const validationErrors = {};

        if (!formData.category_name.trim()) {
            validationErrors.category_name =
                "Category Name is required.";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;

    };

    // Save
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validate()) {
            return;
        }

        onSave(formData);

    };

    return (

        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    {category
                        ? "Edit Category"
                        : "Add Category"}

                </Modal.Title>

            </Modal.Header>

            <Form onSubmit={handleSubmit}>

                <Modal.Body>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            Category Name

                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="category_name"
                            placeholder="Enter Category Name"
                            value={formData.category_name}
                            onChange={handleChange}
                            isInvalid={!!errors.category_name}
                        />

                        <Form.Control.Feedback type="invalid">

                            {errors.category_name}

                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group>

                        <Form.Label>

                            Description

                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Enter Description"
                            value={formData.description}
                            onChange={handleChange}
                        />

                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        {category
                            ? "Update"
                            : "Save"}
                    </Button>

                </Modal.Footer>

            </Form>

        </Modal>

    );

};

export default CategoryForm;