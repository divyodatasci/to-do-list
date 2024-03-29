import List from './components/List';
import TaskAdder from './components/TaskAdder';
import './index.css'

function App() {
  const taskList = [
    "Complete homework assignments",
    "Call mom",
    "Buy groceries",
    "Schedule dentist appointment",
    "Go for a run",
    "Read a book",
    "Write a blog post",
    "Organize closet",
    "Attend meeting with team",
    "Cook dinner",
    "Practice coding",
    "Water plants",
    "Pay bills",
    "Clean the house",
    "Watch a documentary",
    "Plan weekend getaway",
    "Update resume",
    "Research new recipes",
    "Take out the trash",
    "Review project proposal"
  ];
  return (
    <div className="App">
      <TaskAdder/>
    </div>
  );
}

export default App;
