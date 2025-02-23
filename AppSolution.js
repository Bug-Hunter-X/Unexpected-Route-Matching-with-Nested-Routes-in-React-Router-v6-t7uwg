import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function NestedRoute() {
  let { id } = useParams();
  return <h1>Nested Route {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nested/:id" element={<NestedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;