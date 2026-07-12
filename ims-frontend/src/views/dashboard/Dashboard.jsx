function Dashboard() {

    return (

        <div>

            <h2>Dashboard</h2>

            <div className="row mt-4">

                <div className="col-md-3">

                    <div className="card bg-primary text-white">

                        <div className="card-body">

                            <h5>Total Categories</h5>

                            <h2>10</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-success text-white">

                        <div className="card-body">

                            <h5>Total Products</h5>

                            <h2>250</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-warning text-dark">

                        <div className="card-body">

                            <h5>Suppliers</h5>

                            <h2>18</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-danger text-white">

                        <div className="card-body">

                            <h5>Low Stock</h5>

                            <h2>7</h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;