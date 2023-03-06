import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { Book } from "./pages/Book/Book"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:book_id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
