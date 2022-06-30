import './App.css';
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import News from "./components/News/News";
import Interview from "./components/Interview/Interview";
import Stereotips from "./components/Stereotips/Stereotips";
import Recommendations from "./components/Recommendations/Recommendations";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
        <Header/>
        <Carousel/>
        <News/>
        <Interview/>
        <Stereotips/>
        <Recommendations/>
        <Post/>
        <Footer/>
    </div>
  );
}

export default App;
