import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import OurWorkflow from "./OurWorkflow";
import Review from "./Review";
import Services from "./Services";
import Slider from "./Slider";
import TestiMonials from "./TestiMonials";
import WhyVyapar from "./WhyVyapar";
import '../styles/login.css'
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
    const [modalActive, setModalActive] = useState(false);
    const [allData, setAllData] = useState();

    const openModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };



    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/home/getData`);
            const data = await response.json();
            if (response.status === 200) {

                setAllData(data && data[0])
            }
            console.log('Data received:', data);


        } catch (e) {
            console.log(e, 'error')
        }

    }
    useEffect(() => {

        getList();

    }, [])

    console.log('allData received:', allData);
    return (
        <>
            <div className="App">

                <Header closeModal={closeModal} modalActive={modalActive} setModalActive={setModalActive} />
                <Slider sliderImage={allData?.sliderImage} />
                <Services services={allData?.services}/>
                <OurWorkflow workFlow={allData?.workFlow} />
                <AboutUs about={allData?.about}/>
                <WhyVyapar whyvyparbandhu={allData?.whyvyparbandhu}/>
                <Review />
                <TestiMonials />
                <ContactUs />
                <Footer />
                <ToastContainer />
                
            </div>
        </>
    );
};

export default Home;
