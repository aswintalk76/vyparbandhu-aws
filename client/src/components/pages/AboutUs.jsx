import React, { useEffect } from 'react'
import dot from "../images/dot.png"
import aboutUs from "../images/about-img.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
const AboutUs = ({ about }) => {
    const navigate = useNavigate();

    return (
        <div className='container-fluid'>
            <div className="my-5 px-sm-5 mx-sm-5">
                <h1 className="text-center heading_main">{about?.heading}</h1>
                <div className="row">
                    <div className="col-xl-7  col-12 mt-5 ">
                        <p className='f_20'>
                            <pre style={{ width: '100%', whiteSpace: 'pre-wrap', textAlign: 'justify', fontFamily: 'inherit', fontSize: "20px" }}>
                                {about?.description}
                            </pre>
                        </p>



                        <div className='row'>
                            {
                                about?.data.map((item) => {
                                    return (
                                        <>

                                            <div className=' col-lg-6 col-12 f_18'>
                                                <img src={dot} alt="dot" /> {item.name}
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className="col-sm-12 d-flex justify-content-start mt-3 pl-sm-0">
                            <button className="btn px-5 text-white" style={{ background: "#198754" }} ><b><Link to="/aboutus" style={{ textDecoration: "none", color: "white" }}>Know more</Link></b></button>
                        </div>


                    </div>
                    <div className="col-xl-5 col-12" style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <div className='p-5 mx-5'> */}
                        <img src={about?.image ? about?.image : aboutUs} alt="about " className="img-fluid mt-5" style={{ borderRadius: "20px" }} />
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
