import Button from './Button';

const Header = ({ title, toggleAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={toggleAddTask}/>
    </header>
  )
}

export default Header