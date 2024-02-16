import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/about/ac/:id" element={<Team />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/systems" element={<MenuItems />} /> */}
          {/* <Route path="/universe" element={<MenuItems />} /> */}

          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/post/:id" element={<Post />} /> */}
          {/* <Route path="/chat" element={<Chat />} /> */}

          {/* <Route path="/store" element={<Store />} /> */}
          {/* <Route path="/product/:name" element={<ProductDetails />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
