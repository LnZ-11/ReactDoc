import Header from "./components/header"
import Body from "./components/body"
import Sidebar from "./components/sidebar"
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