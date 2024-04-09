import Footer from "./Footer"
import Header from "./Header"
import groupImage from '../../components/images/pexels-thirdman-5583250.jpg'
import mission from '../../components/images/mission.jpg'
import Vision from '../../components/images/vision.jpg'
import ContactUs from "./ContactUs"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import WhyVyapar from "./WhyVyapar"
import Review from "./Review"
import Testimonials from "./TestiMonials"

const RefundPolicy = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <div className="container">
                <div className="my-5 px-sm-5 mx-sm-5">
                    <div className="mb-5">

                        <h1 className="text-center heading_main mb-1">Refund Policy </h1>
                        <div className="mt-4 about_div mb-5">
                            <p className='f_20'>
                                Vyapar Bandhu is dedicated to providing high-quality services to our clients. This Refund Policy outlines the terms and conditions regarding refunds for services offered on our websites.
                            </p>
                            <h1 className="text-center heading_main mb-1 mt-5">Eligibility for Refund </h1>

                            <p className='f_20 mt-3 '>
                                <span><h4 className="text_green">Service Categories  </h4></span>
                                This refund policy applies to specific services as outlined in the service agreement or contract.

                            </p>
                            <p className='f_20 mt-5 '>
                                <span><h4 className="text_green">Circumstances for Refund  </h4></span>
                                This refund policy applies to specific services as outlined in the service agreement or contract.
                                <ul>
                                    <li>The services provided do not meet the specifications outlined in the service agreement.</li>
                                    <li>Vyapar Bandhu is unable to fulfill the agreed-upon services.</li>
                                    <li>The client cancels the service according to the terms specified in the service agreement.</li>
                                </ul>
                            </p>
                            <h1 className="text-center heading_main mb-1 mt-5">Refund Process </h1>

                            <p className='f_20 mt-3 '>
                                <span><h4 className="text_green">Request for Refund  </h4></span>
                                To request a refund, clients must submit a written refund request to our customer support team within the specified timeframe outlined in the service agreement.
                            </p>
                            <p className='f_20 mt-5 '>
                                <span><h4 className="text_green">Refund Review  </h4></span>
                                Refund requests will be reviewed by Vyapar Bandhu on a case-by-case basis. We reserve the right to approve or deny refund requests based on the circumstances.
                            </p>
                            <p className='f_20 mt-5 mb-5 '>
                                <span><h4 className="text_green">Refund Notification  </h4></span>
                                Clients will be notified of the approval or denial of their refund request. If approved, the refund will be processed using the original payment method.

                            </p>

                            <div style={{background:"#198754" , borderRadius:"15px" , color:'white' , padding:"15px"}} className="mt-5 mb-5">

                                <p className='f_20 mt-3 '>
                                    <span><h4 className="" style={{color:"white"}}>Non-Refundable Services  </h4></span>
                                    Certain services may be marked as non-refundable. Any such exceptions will be clearly communicated in the service agreement.
                                </p>
                                <p className='f_20 mt-3 '>
                                    <span><h4 className="" style={{color:"white"}}>Cancellation Policy  </h4></span>
                                    Clients may cancel services according to the cancellation policy outlined in the service agreement or contract.                                </p>
                            </div>
                            <p className='f_20 mt-5 '>
                                <span><h4 className="text_green">Changes to this Refund Policy  </h4></span>
                                Vyapar Bandhu reserves the right to update or modify this Refund Policy. Any changes will be communicated to clients in advance, and the effective date will be updated accordingly.
                            </p>
                         

                         
                        </div>





                    </div>


                </div>
            </div>
            <WhyVyapar />
            <Review />
            <Testimonials />
            <ContactUs />
            <Footer />

        </>
    )
}

export default RefundPolicy;