import AnotherList from "./components/ListingGroup";
import Alert, {Node} from "./components/Alert";
import JokeList from './components/JokeList'
/** */
function Application() {
    const items = [
        "University of Michigan",
        "Toronto University",
        "Cape Verde",
        "Georgia County ",
        "Chicago",
    ];

    const ItemSelected = (item: string) => {
        console.log(item);
    };
    
    return (
        <>
        <Node>
          Hello <span> world </span> 
        </Node>
            <Alert text="Hello world" />
            <AnotherList
                items={items}
                heading="Important Places"
                onSelectItem={ItemSelected}
            />
        </>
    );
}

const App:React.FC=()=>{
  return(
    <div className='App'>
      <JokeList />

    </div>
  )
}

export default App;
