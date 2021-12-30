//import logo from './logo.svg';
import { useSelector } from 'react-redux';
import { getPosts, selectPosts } from '../features/post/postsSlice';
import './App.css';

function App() {
  getPosts('buildapcsales');
  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
      </header>
    </div>
  );
}

export default App;
