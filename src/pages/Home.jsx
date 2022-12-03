import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import AllMovies from "../components/AllMovies";

function Home() {
  // if (!sessionStorage.getItem("loggedIn")) {
  //   sessionStorage.getItem("loggedIn") ? `` : (window.location.hash = "/Login");
  //   window.location.reload();
  // }
  return (
    <main className="relative m-0 p-0 overflow-x-hidden bg-[#141414]">
      <Navbar username={sessionStorage.getItem("username")} />
      <Landing type={`movie`} />
      <AllMovies type={`movie`} />
    </main>
  );
}

export default Home;
