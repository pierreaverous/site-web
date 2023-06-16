
import HomePage from "./Pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ActivityDetailPage from "./Pages/PageDetailsActivite/ActivityDetailPage";





const Router = () => {

    return (
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/activity/:id" element={<ActivityDetailPage/>} />
                {/*<Route path="/:id" element={<AccomadationPage/>}/>*/}

                {/*<Route path="*" element={<ErrorPage/>}/>*/}
            </Routes>

        </BrowserRouter>
    )

}

export default Router