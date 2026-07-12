import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

    return (<>
    <AppRoutes />
    <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
    </>
  );

}

export default App;