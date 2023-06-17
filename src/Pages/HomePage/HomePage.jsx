
import '../../Scss/styles.scss';
import React, {useState, useEffect} from "react";
import HeaderNavBar from "../../Components/HeaderNavBar/HeaderNavBar";
import Banner from "../../Components/Banner/Banner";
import DescriptionHomePage from "../../Components/DescriptionComponent/DescriptionHomePage";
import CardActivity from "../../Components/CardActivity/CardActivity";
import './HomePage.scss'
import Barre from "../../Components/Barre/Barre";
import Footer from "../../Components/Footer/Footer";
import datas from "../../Data/Data";
import ReviewCarousel from "../../Components/CarousselAvis/CarousselAvis";
import ActivityComboTerreMer from "../../Components/ActivityComboTerreMer/ActivityComboTerreMer";

function HomePage() {

    const [dataimg , setdataimg] = useState([])
    const loadDataImg = async () => {
        const data = datas
        setdataimg(data)
        // console.log(data)
    }
    useEffect(()=>{
        loadDataImg();

    },[])
  return (
      <>
        <HeaderNavBar/>
          <Banner/>
          <DescriptionHomePage/>
          <ActivityComboTerreMer/>
          <Barre/>
          <div className='container-card'>
              {dataimg.map(d => <CardActivity dataimg={d}/>)}
          </div>
          <div className='containerCarousselAvis'>
              <h2 className="titleAvis"> 5-Star Reviews on TripAdvisor ★★★★★</h2>
              <ReviewCarousel/>
          </div>

          <Footer/>
      </>
  );
}

export default HomePage;
