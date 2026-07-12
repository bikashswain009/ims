from app import db


# ----------------------------
# Category Model
# ----------------------------
class Category(db.Model):
    __tablename__ = "Categories"

    category_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category_name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)

    # Relationship
    products = db.relationship("Product", backref="category", lazy=True)

    def __repr__(self):
        return f"<Category {self.category_name}>"

    def to_dict(self):
        return {
            "category_id": self.category_id,
            "category_name": self.category_name,
            "description": self.description
        }


# ----------------------------
# Supplier Model
# ----------------------------
class Supplier(db.Model):
    __tablename__ = "Suppliers"

    supplier_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    supplier_name = db.Column(db.String(150), nullable=False)
    contact_name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    email = db.Column(db.String(100))
    address = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)

    # Relationship
    products = db.relationship("Product", backref="supplier", lazy=True)

    def __repr__(self):
        return f"<Supplier {self.supplier_name}>"

    def to_dict(self):
        return {
            "supplier_id": self.supplier_id,
            "supplier_name": self.supplier_name,
            "contact_name": self.contact_name,
            "phone": self.phone,
            "email": self.email,
            "address": self.address,
            "is_active": self.is_active
        }


# ----------------------------
# Product Model
# ----------------------------
class Product(db.Model):
    __tablename__ = "Products"

    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    product_name = db.Column(db.String(150), nullable=False)

    sku = db.Column(
        db.String(50),
        nullable=False,
        unique=True,
        index=True
    )

    category_id = db.Column(
        db.Integer,
        db.ForeignKey("Categories.category_id")
    )

    supplier_id = db.Column(
        db.Integer,
        db.ForeignKey("Suppliers.supplier_id")
    )

    cost_price = db.Column(db.Numeric(10, 2), nullable=False)
    unit_price = db.Column(db.Numeric(10, 2), nullable=False)

    reorder_level = db.Column(db.Integer, default=10)

    is_active = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f"<Product {self.product_name}>"

    def to_dict(self):
        return {
            "product_id": self.product_id,
            "product_name": self.product_name,
            "sku": self.sku,
            "category_id": self.category_id,
            "supplier_id": self.supplier_id,
            "cost_price": float(self.cost_price),
            "unit_price": float(self.unit_price),
            "reorder_level": self.reorder_level,
            "is_active": self.is_active,
            "category": self.category.category_name if self.category else None,
            "supplier": self.supplier.supplier_name if self.supplier else None
        }