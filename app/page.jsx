import Header from "./src/header"
import Body from "./src/cards"
import Sidebar from "./src/sidebar"
export default function Home(){
  return <main>
    <Header/>
    <div className="flex flex-row justify-center items-center ">
    <Sidebar></Sidebar>
    <div className="flex items-center text-center justify-center">
        <Body />
    </div>
    </div>
  </main>
}