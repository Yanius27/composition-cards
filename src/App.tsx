import Card from './components/Card';

import img from './img/img.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const props1 = {
  title: 'Card with image',
  text: 'Card text 1',
  btnLabel: 'Card button 1'
}

const props2 = {
  title: 'Card without image',
  text: 'Card text 2',
  btnLabel: 'Card button 1'
}

function App() {

  return (
    <div className='App'>
      <Card {...props1}>
        <img src={img} className="card-img-top" alt="Card img" />
      </Card>
      <Card {...props2}/>
    </div>
  )
}

export default App
