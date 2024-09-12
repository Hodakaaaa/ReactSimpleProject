
import './App.css';
import TreeView from './components/treeview';
import { menus } from './components/treeview/data';

function App() {
  return (
    <div className="App">
     {/* Tree View Component / Menu UI Component / Recursive Navigation Menu */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
