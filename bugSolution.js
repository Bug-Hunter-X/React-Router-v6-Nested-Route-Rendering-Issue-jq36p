import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  const location = useLocation();
  console.log('Home render with location', location);
  return <h1>Home</h1>; }

function About() { 
  const location = useLocation();
  console.log('About render with location', location);
  return <h1>About</h1>; }

function NotFound() { return <h1>404 Not Found</h1>; }