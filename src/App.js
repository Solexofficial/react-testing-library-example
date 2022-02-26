import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import UserDetailsPage from './pages/UserDetailsPage';
import AppRouter from './router/AppRouter';
import Users from './users/Users';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const handleClick = () => setToggle(prev => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);
//   return (
//     <div>
//       {toggle && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{ color: 'red' }}>data</div>}
//       <h1 data-testid='value-elem'>{value}</h1>
//       <h2>hello world</h2>
//       <button onClick={handleClick} data-testid='toggle-btn'>
//         click me
//       </button>
//       <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value' />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
