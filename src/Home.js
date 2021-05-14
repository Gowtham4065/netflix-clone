
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';


function Home() {
  return (
    <div className="App">
    <Nav/>
    <Banner url={requests.fetchActionMovies}/>
    <Row title ="NETFLIX ORIGINALS" url={requests.fetchNtflixOriginals} largeRow={true}/>
    <Row title ="Trending Now" url={requests.fetchTrending}/>
    <Row title ="Top rated" url={requests.fetchTopRated}/>
    <Row title ="Action Movies" url={requests.fetchActionMovies}/>
    <Row title ="Comedy Movies" url={requests.fetchComedyMovies}/>
    <Row title ="Horror Movies" url={requests.fetchHorrornMovies}/>
    <Row title ="Romance Movies" url={requests.fetchRomanceMovies}/>
    <Row title ="Documentaries" url={requests.fetchDocumentaries}/>

    </div>
  );
}

export default Home;
