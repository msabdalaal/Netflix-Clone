import useFetch from "../contexts/useFetch";

function About() {
  let id = window.location.hash.split("-")[1];
  let type = window.location.hash.split("-")[2];
  let { result: Data } = useFetch(`
  https://api.themoviedb.org/3/${type}/${id}/videos?api_key=e3f448859c36d626838c5cb838d0b93f`);

  let videoKey = Data?.results[Data?.results.length - 1]?.key;

  return (
    <main className="h-screen">
      {videoKey != "" ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=&showinfo=1&controls=0&rel=0&enablejsapi=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <h1>There is not</h1>
      )}
      <div></div>
    </main>
  );
}

export default About;
