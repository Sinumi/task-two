import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-96 mx-auto my-10">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}
