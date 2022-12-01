import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import AllMovies from "../components/AllMovies";

function TvShows() {
  return (
    <main className="relative m-0 p-0 overflow-x-hidden bg-[#141414]">
      <Navbar type={`tv`} />
      <Landing type={`tv`} />
      <AllMovies type={`tv`} />
    </main>
  );
}

export default TvShows;
