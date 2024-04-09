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

const PrivacyPolicy = () => {
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

                        <h1 className="text-center heading_main mb-1">Privacy Policy </h1>
                        <div className="mt-4 about_div mb-5">
                            <p className='f_20'>
                                Vyapar Bandhu ("we," "us," or "our") is dedicated to protecting the privacy and security of the information collected from users of our websites. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your information.
                            </p>
                            <h1 className="text-center heading_main mb-1">Information We Collect </h1>
                            <h4 className="text-center " >We may collect the following types of information:</h4>
                            <div className="row">

                                <p className='f_20 mt-5 col-lg-4 col-md-6'>
                                    <span><h4 className="text_green">Personal Information  </h4></span>
                                    <ul>
                                        <li>Names</li>
                                        <li>Email addresses</li>
                                        <li>Phone numbers</li>
                                        <li>Billing and shipping addresses</li>
                                    </ul>
                                </p>
                                <p className='f_20 mt-5 col-lg-4 col-md-6'>
                                    <span><h4 className="text_green">Business Information  </h4></span>
                                    <ul>
                                        <li>Business  Name</li>
                                        <li>Type of business
                                        </li>
                                        <li>
                                            Industry
                                        </li>
                                    </ul>
                                </p>
                                <p className='f_20 mt-5 col-lg-4 col-md-6'>
                                    <span><h4 className="text_green">Personal Information  </h4></span>
                                    <ul>
                                        <li>Names</li>
                                        <li>Email addresses</li>
                                        <li>Phone numbers</li>
                                        <li>Billing and shipping addresses</li>
                                    </ul>
                                </p>
                            </div>
                            <h1 className="text-center heading_main mb-1">How We Use Your Informations </h1>
                            <h4 className="text-center " >We use the collected information for the following purposes:</h4>
                            <div className="row">

                                <p className='f_20 mt-5 col-lg-6'>
                                    <span><h4 className="text_green">Service Provision  </h4></span>
                                    <ul>
                                        <li>To provide and improve our services</li>
                                        <li>To customize your experience</li>
                                    </ul>
                                </p>
                                <p className='f_20 mt-5 col-lg-6'>
                                    <span><h4 className="text_green">Communication  </h4></span>
                                    <ul>
                                        <li>To communicate with you about our services, updates, and promotions</li>
                                        <li>To respond to your inquiries and provide customer support
                                        </li>
                                    </ul>
                                </p>
                                <p className='f_20 mt-5 col-lg-6'>
                                    <span><h4 className="text_green">Analytics  </h4></span>
                                    <ul>
                                        <li>To analyze website usage and improve our content and services</li>
                                        <li>To track the effectiveness of marketing campaigns</li>
                                    </ul>
                                </p>
                                <p className='f_20 mt-5 col-lg-6'>
                                    <span><h4 className="text_green">Legal Compliance  </h4></span>
                                    <ul>
                                        <li>To comply with applicable laws, regulations, and legal processes</li>
                                    </ul>
                                </p>
                            </div>

















                            <p className='f_20 mt-5'>
                                <span><h4 className="text_green">Disclosure of Information  </h4></span>
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except as required by law or to fulfill contractual obligations.
                            </p>
                            <p className='f_20 mt-5'>
                                <span><h4 className="text_green">Security Measures  </h4></span>
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your explicit consent, except as required by law or to fulfill contractual obligations.
                                <ul>
                                    <li><span style={{ fontWeight: "500" }}>Encryption :</span> Data transmission is secured using encryption technologies</li>
                                    <li><span style={{ fontWeight: "500" }}>Access Controls :</span> Access to personal information is restricted to authorized personnel on a need-to-know basis.</li>
                                    <li><span style={{ fontWeight: "500" }}>Regular Audits :</span> : We conduct regular security assessments to identify and address potential vulnerabilities.</li>
                                </ul>
                            </p>
                            <p className='f_20 mt-5'>
                                <span><h4 className="text_green">Your Choices  </h4></span>
                                You have the right to:
                                <ul>
                                    <li><span style={{ fontWeight: "500" }}>Access :</span> Request access to your personal information.</li>
                                    <li><span style={{ fontWeight: "500" }}>Correction :</span> Correct any inaccuracies in your personal information.</li>
                                    <li><span style={{ fontWeight: "500" }}>Deletion :</span> : Request the deletion of your personal information.</li>
                                </ul>
                            </p>
                            <p className='f_20 mt-5 mb-5'>
                                <span><h4 className="text_green">Changes to this Privacy Policy  </h4></span>
                                We reserve the right to update or modify this Privacy Policy. Any changes will be posted on this page, and the effective date will be updated accordingly.
                               
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

export default PrivacyPolicy;