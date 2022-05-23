import { Route, Routes } from "react-router-dom";
import TestQuestion from "./pages/TestQuestion";
import TestResult from "./pages/TestResult";
import TestHome from "./pages/TestHome"


function Test() {
    return (
        <>
            <Routes>
                <Route path='/' element={<TestHome />} />
                <Route path='/testquestion' element={<TestQuestion />} />
                <Route path='/testresult' element={<TestResult />} />
            </Routes>
        </>
    );
}

export default Test;



