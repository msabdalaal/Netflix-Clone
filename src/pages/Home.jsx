import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import AllMovies from "../components/AllMovies";

function Home() {
  return (
    <main className="relative m-0 p-0 overflow-x-hidden bg-[#141414]">
      <Navbar />
      <Landing />
      <AllMovies />
    </main>
  );
}

export default Home;
