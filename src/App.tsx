// Classes
import Field from './Field';

// Components
import FieldTile from './components/fieldTile/FieldTile';
import FieldKey from './components/fieldKey/FieldKey';

// Styling
import './App.css';

const field = new Field(); 

function App() {

  return (
    <div className="App">
      <div className="field">
        {field.tiles.map(fieldRow => {
          return (<div className="field__row">
            {fieldRow.map(tile => {
              return <FieldTile tile={tile} /> 
            })}
          </div>)
        })}
      </div>
      <FieldKey />
    </div>
  );
}

export default App;
