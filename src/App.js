import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, PrivacityPolicity, TermsOfUse, MenuItems } from "./pages";
import { GlobalStyle } from "./styles";
import { CardContent, Cards } from "./content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/about/ac/:id" element={<Team />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/systems" element={
            <MenuItems>
              <Cards type='System'/>
            </MenuItems>
          } />
          <Route path="/system/:sysId" element={<CardContent />} />
          <Route path="/universe" element={
            <MenuItems>
              <Cards type='Universe'/>
            </MenuItems>
          } />
          
          {/* <Route path="/profile/:nickname" element={<Perfil />} /> */}

          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/post/:id" element={<Post />} /> */}
          {/* <Route path="/chat" element={<Chat />} /> */}

          {/* <Route path="/store" element={<Store />} /> */}
          {/* <Route path="/product/:name" element={<ProductDetails />} /> */}
          {/* <Route path="/bots" element={<MenuItems />} /> */}

          {/* <Route path="/timer" element={<Timer />} /> */}

          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacity-policity" element={<PrivacityPolicity />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
