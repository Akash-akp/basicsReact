import './App.css';
import Person from './component/Person'
import PersonBirthday from './component/PersonBirthday';
import Card from './component/Card';
import ProductForm from './component/ProductForm';

const App = () => {
  document.body.classList.add('relative');
  document.body.classList.add('bg-gray-900');
  const response = [
    {
      name: "Akash Kumar Parida",
      day:4,
      month: "June",
      year: 2002
    },
    {
      name: "Jyotirmayee Parida",
      day:26,
      month: "December",
      year: 1998
    },
    {
      name: "Kiran Kumari Parida",
      day:15,
      month: "October",
      year: 1995
    },
  ];
  return (
    <div className='flex flex-col h-[100vh]'>
      <Card>
        <ProductForm /> 
      </Card>
      <Card>
        <Person name={response[0].name}>
          <PersonBirthday day={response[0].day} month={response[0].month} year={response[0].year}></PersonBirthday>
        </Person>
        
        <Person name={response[1].name}>
          <PersonBirthday day={response[1].day} month={response[1].month} year={response[1].year}></PersonBirthday>
        </Person>
        
        <Person name={response[2].name}>
          <PersonBirthday day={response[2].day} month={response[2].month} year={response[2].year}></PersonBirthday>
        </Person>
        <Person name={response[2].name}>
          <PersonBirthday day={response[2].day} month={response[2].month} year={response[2].year}></PersonBirthday>
        </Person>
        <Person name={response[2].name}>
          <PersonBirthday day={response[2].day} month={response[2].month} year={response[2].year}></PersonBirthday>
        </Person>
        <Person name={response[2].name}>
          <PersonBirthday day={response[2].day} month={response[2].month} year={response[2].year}></PersonBirthday>
        </Person>
        <Person name={response[2].name}>
          <PersonBirthday day={response[2].day} month={response[2].month} year={response[2].year}></PersonBirthday>
        </Person>

      </Card>
    </div>
  );
}

export default App;
