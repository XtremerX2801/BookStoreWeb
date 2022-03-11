import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { getBooks } from "./service/bookService"
import './App.css';

function App() {
  const [data, setData] = useState(null)
  useEffect(async () => {
    setData(await getBooks())
  }, [])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Author</td>
          </tr>
        </thead>
        <tbody>
          {data ? data.data.map(_ => (
            <tr key={_.bookId}>
              <td>{_.bookName}</td>
              <td>{_.author}</td>
            </tr>
          )) : (<></>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
