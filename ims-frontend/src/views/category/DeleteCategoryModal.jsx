import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteCategoryModal = ({
    show,
    handleClose,
    onDelete,
    category
}) => {

    return (

        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    Delete Category

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <div className="text-center">

                    <h5 className="text-danger mb-3">
                        Are you sure?
                    </h5>

                    <p>
                        Do you really want to delete
                        <strong>
                            {" "}
                            {category?.category_name}
                        </strong>
                        ?
                    </p>

                    <small className="text-muted">
                        This action cannot be undone.
                    </small>

                </div>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="danger"
                    onClick={onDelete}
                >
                    Delete
                </Button>

            </Modal.Footer>

        </Modal>

    );

};

export default DeleteCategoryModal;