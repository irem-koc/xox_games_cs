import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import ContextProvider from "./context/Context";

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <div className="App">
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
