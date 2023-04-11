import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookListing from './BookListing';
import BookCreate from './BookCreate';
import BookDetail from './BookDetail';
import BookEdit from './BookEdit';

function App() {
  return (
    <div className="App">
      <h1>Gestion Books</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookListing></BookListing>}></Route>
          <Route path='/books/create' element={<BookCreate></BookCreate>}></Route>
          <Route path='/books/detail/:bookid' element={<BookDetail />}></Route>
          <Route path='/books/edit/:bookid' element={<BookEdit />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
