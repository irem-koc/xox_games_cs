import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import ContextProvider from "./context/Context";
import background_image from "./image/_backGround.png";
import "./App.css";
function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <div className="App">
                    <img
                        className="bg-image"
                        src={background_image}
                        alt="background"
                    />
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} exact />
                    </Routes>
                </div>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
