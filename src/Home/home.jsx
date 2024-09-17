import Details from "./Detail/detail";
import IPhone16Pro from "./Ads/IPhone16Pro/IPhone16Pro";
import IPhoneWatch from "./Ads/IPhoneWatch/iphoneWatch";
import HeaderFile from "./Header/header";
import HomeContent from "./HomeContent/homeContent";
import HomeGrid from "./HomeGrid/HomeGrid";
import FooterFile from "./Footer/footer";
import IPhone16666 from "./Ads/IPhone16/iphone16";

const Home = () =>{
    return (
        <>
            <HeaderFile />
            <HomeContent />
            <IPhone16Pro />
            <IPhone16666 />
            <IPhoneWatch />
            <HomeGrid />
            <Details />
            <FooterFile />
        </>
    )
}

export default Home;