
import HomePage from "./Pages/HomePage/HomePage";
import {BrowserRouter, Route, Switch, Routes} from "react-router-dom";





const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/*<Route path="/:id" element={<AccomadationPage/>}/>*/}

                {/*<Route path="*" element={<ErrorPage/>}/>*/}
            </Routes>

        </BrowserRouter>)

}

export default Router