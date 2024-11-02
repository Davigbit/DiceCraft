import Header from "./components/header/Header.tsx"
import Sidebar from "./components/sidebar/Sidebar.tsx"
import Stats from "./components/stats/Stats.tsx"

import { characters } from "./data.tsx"

export default function App() {

  return (
    <div>
      <Header />
      <div style={{display: "flex", flexDirection: "row"}}>
          <Sidebar characterData={characters} />
          <Stats />
      </div>
    </div>
  )
}
