import { Route, Routes } from "react-router-dom";
import TestHome from "./TestHome";
import TestQuestion from "./TestQuestion";
import TestResult from "./TestResult";


function Test(props) {
    return (
        <div className="Test">
            <Routes>
                <Route path='/' element={<TestHome />} />
                <Route path='/questions' element={<TestQuestion />} />
                <Route path='/result' element={<TestResult />} />
            </Routes>
        </div>
    );
}

export default Test;



