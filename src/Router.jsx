
import HomePage from "./Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ActivityDetailPage from "./Pages/PageDetailsActivité/ActivityDetailPage";





const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/activity/:id" element={<ActivityDetailPage/>} />
                {/*<Route path="/:id" element={<AccomadationPage/>}/>*/}

                {/*<Route path="*" element={<ErrorPage/>}/>*/}
            </Routes>

        </BrowserRouter>)

}

export default Router