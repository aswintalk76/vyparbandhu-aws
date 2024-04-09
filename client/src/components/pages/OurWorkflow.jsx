import React from 'react'
// import Group from "../images/Group.png";
import workFlowImg from "../images/workflow.gif"
import { MdOutlineSecurity, MdBusinessCenter } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GiMoebiusTriangle } from "react-icons/gi";
import { TbReceiptTax } from "react-icons/tb";
const OurWorkflow = ({ workFlow }) => {
  return (
    <div>
      <div className=" px-5">
        <h1 className="text-center pt-5 heading_main">{workFlow?.heading}</h1>
        <div className="row " >
          <div className="col-lg-6 col-12 px-sm-5 py-sm-2 mx-auto">
            <div className='px-sm-4 py-sm-5 px-2 py-3' >
              {
                workFlow?.data.map((item, index) => {
                  return (
                    <>
                      <div className={`card py-sm-3 px-sm-5  py-1 px-3 ${index === 0 || index === 2 || index === 4 ? "bg_color" : 'workflow_color'}`} >
                        <label className='text_workflow'><span className=''>
                          {index === 0 ? <MdOutlineSecurity /> : index === 1 ? <MdBusinessCenter /> : index === 2 ? <TbReceiptTax /> :
                            index === 3 ? <FaArrowRightArrowLeft /> : <MdOutlineSecurity />}


                        </span><span className='ps-3'>{item.name}</span></label>
                      </div>

                    </>
                  )
                })
              }
              {/* <div className='card mt-4 py-sm-3 px-sm-5  py-1 px-3 ' style={{ background: "#FEB444" }} >
                <label className='text_workflow'><span className='fs-4'><MdBusinessCenter /></span><span className='ps-3'>Login to your A/C </span></label>
              </div>
              <div className='card mt-4 py-sm-3 px-sm-5  py-1 px-3  bg_color' >
                <label className='text_workflow'> <span className='fs-4'><TbReceiptTax /></span><span className='ps-3'>Upload the documents </span></label>
              </div>
              <div className='card mt-4 py-sm-3 px-sm-5  py-1 px-3 ' style={{ background: "#FEB444" }}>
                <label className='text_workflow'> <span className='fs-4'><FaArrowRightArrowLeft /></span><span className='ps-3'>Make the payment </span></label>
              </div>
              <div className='card mt-4 py-sm-3 px-sm-5  py-1 px-3  bg_color' >
                <label className='text_workflow'> <span className='fs-4'><MdOutlineSecurity /></span><span className='ps-3'>Service done by our professional Team </span></label>
              </div> */}
              {/* <div className='card mt-4 py-3 px-5' style={{ background: "#FEB444" }}> 
                                <label className='text_workflow'> <span className='fs-4'><GiMoebiusTriangle /></span><span className='ps-3'>EPR & BIS </span></label>
                              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-12 pt-5">
            <img src={workFlow?.image ? workFlow?.image :workFlowImg} alt="workflow" className='container-fluid' />
          </div>

        </div>

      </div>
    </div>
  )
}

export default OurWorkflow
