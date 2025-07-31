import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Main from './components/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main route */}
        <Route path='/' element={<Main />}>
          {/* Nested routes inside Main */}
          <Route path='project' element={<Projects />} />
          {/* <Route path='contact' element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;