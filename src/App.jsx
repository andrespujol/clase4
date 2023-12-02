import './App.css'
import CountryInfo from './components/microdesafio/CountryInfo'
import WithLogging from './components/hoc/WithLogging'
import Filter from './components/renderProps/Filter'
import TaskList from './components/renderProps/TaskList'
import CountryAcronym from './components/microdesafio/CountryAcronym'
function App() {


  // hoc
  const WrappedComponent = CountryInfo
  const ComponentWithLogging = WithLogging(WrappedComponent)

  // render props
  
  // lista de tareas. Las que están true, al estar completadas, van a estar tachadas
  const tasks = [
    { id: 1, title: 'Comprar leche', completed: true },
    { id: 2, title: 'Ir al gimnasio', completed: false },
    { id: 3, title: 'Cocinar cena', completed: false },
  ];
  return (
    <>

    {/* descomenten los bloques que quieran renderizar */}



      {/* microdesafio */}
      {/* <CountryInfo /> */}
      <CountryAcronym />

      {/* hoc */}
      {/* <ComponentWithLogging /> */}


      {/* render props */}
      {/* Envolvemos el componente TaskList con tareas filtradas según el estado del filtro, con Filter */}
      {/* <Filter>
        {(filterState) => (
          <TaskList
            tasks={
              filterState === 'all'
                ? tasks
                : tasks.filter((task) => {
                    return filterState === 'completed'
                      ? task.completed
                      : !task.completed;
                  })
            }
          />
          )}
      </Filter>    */}
    </>
  )
}

export default App
