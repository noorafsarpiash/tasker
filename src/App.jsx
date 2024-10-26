import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </>
  );
}
