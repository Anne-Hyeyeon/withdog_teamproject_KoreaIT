import { Route, Routes } from "react-router-dom";
import TestQuestion from "./TestQuestion";
import TestResult from "./TestResult";
import TestHome from "./TestHome";


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



