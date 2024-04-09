import { useEffect, useState } from "react"
import { toast } from "react-toastify";
// import { toast } from 'react-toastify';

const Step5 = ({ setActiveTab, selectServicedata, getById }) => {
    const [documentList, setDocumentList] = useState();

    const [data, setData] = useState()


    useEffect(() => {
        setData(selectServicedata.stepFiveData)
    }, [selectServicedata.stepFiveData])


    console.log('====================================');
    console.log("data", data);
    console.log('====================================');

    const SaveData = (updatedItem) => {
        const modifiedData = [...data];

        modifiedData.map(item => {
            // Check if item has documentsData and if so, map through it to find the matching _id
            if (item.documentsData) {
                item.documentsData.map(dataItem => {
                    if (dataItem._id === updatedItem._id) {
                        console.log(updatedItem, 'savedata log')
                        // Update the data with the new values
                        // const lastSlashIndex = updatedItem.document.lastIndexOf('/');
                        // const name = updatedItem.document.substring(0, lastSlashIndex);
                        // const image = updatedItem.document.substring(lastSlashIndex + 1);
                        // return { ...data, icon: updatedItem.icon, document: item.document };
                        dataItem.icon = updatedItem.icon
                        dataItem.document = updatedItem.document
                        // dataItem = {
                        //     ...dataItem, icon: updatedItem.icon, document: item.document
                        // }
                    }
                    // return data;
                });
            }
            return item;
        })

        setData(modifiedData);

        // setData(prevData => {
        //     return prevData.map(item => {
        //         // Check if item has documentsData and if so, map through it to find the matching _id
        //         if (item.documentsData) {
        //             item.documentsData = item.documentsData.map(data => {
        //                 if (data._id === updatedItem._id) {
        //                     console.log(updatedItem , 'savedata log')
        //                     // Update the data with the new values
        //                     // const lastSlashIndex = updatedItem.document.lastIndexOf('/');
        //                     // const name = updatedItem.document.substring(0, lastSlashIndex);
        //                     // const image = updatedItem.document.substring(lastSlashIndex + 1);
        //                     return { ...data, icon: updatedItem.icon, document: item.document };
        //                 }
        //                 return data;
        //             });
        //         }
        //         return item;
        //     });
        // });
    };

    const getList = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PORT}/admin/documentlist/list`);
            const data = await response.json();
            if (response.status === 200) {
                setDocumentList(data)
            }

        } catch (e) {
            console.log(e, 'error')
        }

    }
    useEffect(() => {

        getList();

    }, [])



    const DeleteAttribute = async (innerId, innerCategoryid) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/deleteDocument`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerCategoryid: innerCategoryid, innerId: innerId })
            });
            if (response.status === 200) {
                toast.success("Delete Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    };

    const AddAttribute = async () => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/AddDocumentStep5`

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: data[0]._id })
            });
            if (response.status === 200) {
                toast.success("Add Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    }




    const SaveAllData = async (innerId, item) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateDocument`

        console.log(item, 'callapi')

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, innerId: innerId, documentId: item._id, document: item.document, icon: item.icon })
            });
            if (response.status === 200) {
                toast.success("Save Attribute Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')
        }

    };


    const SaveDataMain = (updatedItem) => {

        setData(data.map(item => {
            if (item._id === updatedItem._id) {
                return updatedItem;
            }
            return item;
        }
        ))
    }


    const SaveHeading = async (innerId, item) => {
        let url = `${process.env.REACT_APP_PORT}/admin/service/updateDocumentHeading`
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mainCategoryid: selectServicedata._id, heading: item.heading, description: item.description, innerId: innerId })
            });
            if (response.status === 200) {
                toast.success("Save Data Sucesfully!")

                getById(selectServicedata._id)
            }
        } catch (e) {
            console.log(e, 'error')

        }
    }
    // console.log(data[0]._id)

    return (
        <>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>

                <h5 className='card-title' style={{ fontWeight: "600" }}>Required Document <button type="button" class="btn btn-outline-primary" onClick={() => {
                    AddAttribute()

                }}><i class="bi bi-file-plus"></i></button></h5>
                <div className="d-flex align-items-center">

                    <button type='submit' className='btn btn-primary ' onClick={() => {
                        setActiveTab('10')
                    }}>Next</button>
                </div>
            </div>
            {
                data?.map((mainData, index) => {
                    return (
                        <>

                            <div className='row mb-3 mt-2'>
                                <label htmlFor='inputText' className='col-sm-2 col-form-label'> Heading <span style={{ color: "red" }}>*</span></label>
                                <div className='col-sm-10'>
                                    <input type='text' placeholder='Enter Heading' className='form-control' value={mainData.heading} onChange={(e) => {
                                        const updatedItem = { ...mainData, heading: e.target.value };
                                        SaveDataMain(updatedItem);
                                    }} />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor='inputText' className='col-sm-2 col-form-label'>Details</label>
                                <div className='col-sm-10'>
                                    <textarea type='text' placeholder='Enter Description' className='form-control' value={mainData.description} onChange={(e) => {
                                        const updatedItem = { ...mainData, description: e.target.value };
                                        SaveDataMain(updatedItem);

                                    }} />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-2 col-form-label'></label>
                                <div className='col-sm-10'>
                                    <button type='submit' className='btn btn-primary' onClick={() => { SaveHeading(mainData._id, mainData) }}>Save</button>
                                </div>
                            </div>

                            <table className='table'>
                                <thead>
                                    <tr>

                                        {/* <th scope='col'>Icon</th> */}
                                        <th scope='col'>Document</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        mainData.documentsData && mainData.documentsData.map((item, index) => {
                                            return (
                                                <>

                                                    <tr key={index}>

                                                        {/* <td className="col-3">
                                                            <div className="">

                                                                <div className="col-12">
                                                                    <img src={`${item?.image && item.image}`} style={{ width: "120px" }} className="mb-1" alt="No Image" />

                                                                </div>
                                                            </div>
                                                        </td> */}
                                                        <td className="col-4">

                                                            <div className="col-12 ">
                                                                <div className='col-sm-10'>
                                                                    <select className='form-select' onChange={(e) => {

                                                                        const updatedItem = { ...item, document: e.target.value };
                                                                        console.log(updatedItem, 'selectvalue')
                                                                        SaveData(updatedItem)
                                                                        // setInnerCategory(e.target.value);
                                                                    }}>
                                                                        <option value='0' >Choose..</option>
                                                                        {
                                                                            documentList && documentList.map((itemData, index) => {

                                                                                let compare = `${itemData.name}`;
                                                                                let second = `${item.document}`;



                                                                                return (
                                                                                    <>
                                                                                        <option value={`${itemData.name}`} selected={compare === second}>{itemData.name}</option>

                                                                                    </>
                                                                                )

                                                                            })
                                                                        }

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-1">
                                                            <div className="">

                                                                <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "3px" }} onClick={() => SaveAllData(mainData._id, item)}>Save</button>

                                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => DeleteAttribute(mainData._id, item._id)}><i class="bi bi-trash"></i></button>
                                                            </div>
                                                        </td>


                                                    </tr>
                                                </>
                                            )
                                        })

                                    }




                                </tbody>

                            </table>
                        </>
                    )

                })
            }

        </>
    )
}

export default Step5