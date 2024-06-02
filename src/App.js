import { Route, Routes } from "react-router-dom";

import Homepage from "./components/home/Homepage";
import Test from "./components/Test";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <Homepage /> */}
    </>
  );
}
