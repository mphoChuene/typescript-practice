import { Person } from "./Person";
import "./App.css";
import { Country } from "./Person";
function App() {
  return (
    <>
      <h3>typescript-practice</h3>
      <Person
        name="Mpho"
        surname="chuene"
        email="mpho@gmail.com"
        isMarried={false}
        friends={["lethabo", "gift", "chris", "vincent"]}
        country={Country.southAfrica}
      />
    </>
  );
}

export default App;
