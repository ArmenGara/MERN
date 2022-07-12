import './App.css';
import Display from './components/display';
import Form from './components/Form';
import PersonCard from './components/PersonCard';
import Todo from './components/todo';
import UserForm from './components/userForm';

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <UserForm />
      <PersonCard firstName="Maral" lastName="Garayan" age={25} haircolor="Blonde" />
    </fieldset>
  );
}

export default App;
