import './App.scss'
import Task from './components/Task/Task'
import { VList, VList2 } from './components/VegetableList/VegetableList'

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
]

const App = () => (
  <div className="container container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="wrapper">
          {tasks
            .map(({
              id, text, done,
            }) => (
              <Task key={id} id={id} text={text} done={done} />
            ))}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="wrapper">
          {tasks
            .filter(({ done }) => !done)
            .map(({
              id, text,
            }) => (
              <Task key={id} id={id} text={text} />
            ))}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <VList />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <VList2 />
      </div>
    </div>
  </div>
)

export default App
