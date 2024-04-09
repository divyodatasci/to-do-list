import List from './components/List';
import TaskAdder from './components/TaskAdder';
import TaskAdderRedux from './components/TaskAdderRedux';
import {Provider} from "react-redux";
import './index.css'
import appStore from './utils/appStore';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={appStore} >
      <div className="App">
        <Header />
        <Outlet/>
      </div>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<TaskAdder/>
      }, 
      {
        path: '/taskAdderRedux',
        element: <TaskAdderRedux/>
      }
    ]
  }
])

export default App;
