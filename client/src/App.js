import PostForm from './PostForm'
import PostsList from './PostsList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
     <div className="container">
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
