import React, { Component } from 'react'
import {
    CCol,
    CRow,
    CButton,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CInputFile,
    CTextarea
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddIcon from '@material-ui/icons/Add';
import CIcon from '@coreui/icons-react'
import ReadMoreReact from 'read-more-react';
import './ClientReviews.css'
import img1 from '../../assets/review1.jpg'
import img2 from '../../assets/review2.png'
import img3 from '../../assets/review3.png'

class ClientReviews extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [
                {
                    id: '1',
                    projectName: "Zaiqa Delivery",
                    reviewDate: "November 25, 2019",
                    service: "E-commerce",
                    projectLogo: img3,
                    review: "Atriom developed our e-commerce site. They are very professional and patience. Throughout the development, we had numerous requests e.g. trying different fonts, pictures, backgrounds, adding pages etc., every time, they listened and came back with even better ideas. I am very happy and would highly recommend them.",
                    clientImg: img1,
                    clientName: "Salim Khan",
                    clientStatus: "Director",
                    link: "https://zaiqadelivery.com/",
                },
                {
                    id: '2',
                    projectName: "Zaiqa Delivery",
                    reviewDate: "November 25, 2019",
                    service: "E-commerce",
                    projectLogo: img3,
                    review: "Atriom developed our e-commerce site. They are very professional and patience. Throughout the development, we had numerous requests e.g. trying different fonts, pictures, backgrounds, adding pages etc., every time, they listened and came back with even better ideas. I am very happy and would highly recommend them.",
                    clientImg: img1,
                    clientName: "Salim Khan",
                    clientStatus: "Director",
                    link: "https://zaiqadelivery.com/",
                },
                {
                    id: '3',
                    projectName: "Zaiqa Delivery",
                    reviewDate: "November 25, 2019",
                    service: "E-commerce",
                    projectLogo: img2,
                    review: "Atriom developed our e-commerce site. They are very professional and patience. Throughout the development, we had numerous requests e.g. trying different fonts, pictures, backgrounds, adding pages etc., every time, they listened and came back with even better ideas. I am very happy and would highly recommend them.",
                    clientImg: img1,
                    clientName: "Salim Khan",
                    clientStatus: "Director",
                    link: "https://zaiqadelivery.com/",
                },
                {
                    id: '4',
                    projectName: "Zaiqa Delivery",
                    reviewDate: "November 25, 2019",
                    service: "E-commerce",
                    projectLogo: img2,
                    review: "Atriom developed our e-commerce site. They are very professional and patience. Throughout the development, we had numerous requests e.g. trying different fonts, pictures, backgrounds, adding pages etc., every time, they listened and came back with even better ideas. I am very happy and would highly recommend them.",
                    clientImg: img1,
                    clientName: "Salim Khan",
                    clientStatus: "Director",
                    link: "https://zaiqadelivery.com/",
                },
                // {
                //     pId: '4',
                //     pImg: img4,
                //     pTitle: 'a2z dsfdy',
                //     pCategory: 'wordpress',
                //     pLink: 'https://atriom.co.uk/',
                // },
            ],
            targetEdit: [],
            newProject: {},
            modal: false,
            modal2: false,
            modal3: false,
            modal4: false
        };
    }

    // Edit Project
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    toggle2 = () => {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    targetProject = (e) => {
        let eleId = e.target.id;
        let result = this.state.reviews.find(({ id }) => id === eleId);
        this.setState({
            targetEdit: result
        });
        this.toggle();
    }

    editImg = (e) => {
        let targetName = e.target.name;
        const targetFile = e.target.files[0];
        if (!targetFile) return;
        const newImgUrl = URL.createObjectURL(targetFile)
        this.setState(prevState => ({
            targetEdit: { ...prevState.targetEdit, [targetName]: newImgUrl }
        }));
    }

    editValue = (e) => {
        let targetName = e.target.name;
        let editNewValue = e.target.value;
        this.setState(prevState => ({
            targetEdit: { ...prevState.targetEdit, [targetName]: editNewValue }
        }));
    }

    editProjectConfirm = () => {
        this.toggle2();
    }

    editProject = () => {
        const newOne = this.state.targetEdit;
        const reviews = this.state.reviews;
        reviews[reviews.findIndex(el => el.id === newOne.id)] = newOne;
        this.toggle();
        this.toggle2();
    }

    // Add Project

    toggle3 = () => {
        this.setState({
            modal3: !this.state.modal3
        });
    }

    toggle4 = () => {
        this.setState({
            modal4: !this.state.modal4
        });
    }

    addValue = (e) => {
        let keyName = e.target.name;
        let inputValue = e.target.value;
        this.setState(prevState => ({
            newProject: { ...prevState.newProject, [keyName]: inputValue }
        }));
    }

    addImg = (e) => {
        let keyName = e.target.name;
        const inputFile = e.target.files[0];
        if (!inputFile) return;
        const ImgUrl = URL.createObjectURL(inputFile)
        this.setState(prevState => ({
            newProject: { ...prevState.newProject, [keyName]: ImgUrl }
        }));
    }

    addProjectConfirm = () => {
        var newId = Math.random().toString(16).slice(2)
        this.setState(prevState => ({
            newProject: { ...prevState.newProject, pId: newId }
        }));
        this.toggle4();
    }

    addProject = () => {
        const newOne = this.state.newProject;
        // const portfolio = this.state.portfolio;
        this.setState(prevState => ({
            portfolio: [...prevState.portfolio, newOne]
        }));
        this.toggle3();
        this.toggle4();
    }

    render() {
        // console.log(this.state)
        const targetEdit = this.state.targetEdit;
        return (
            <>
                <CRow>
                    {this.state.reviews.map((v, i) => {
                        return (
                            <CCol key={i} xs="12" sm="12" md="6">
                                <div className="card client_review_col">
                                    <div className="client_info_div">
                                        <div className="client_Project_Name_div">
                                            {v.projectName.length > 12 ?
                                                (
                                                    <div className="client_Project_Name_2">
                                                        {`${v.projectName.substring(0, 12)}...`}
                                                    </div>
                                                ) :
                                                <p className="client_Project_Name_2">{v.projectName}</p>
                                            }
                                            <p className="client_Project_Name">{v.projectName}</p>
                                            <p className="client_review_date">{v.reviewDate}</p>
                                            {v.service.length > 12 ?
                                                (
                                                    <div className="client_get_service_2">
                                                        {`${v.service.substring(0, 12)}...`}
                                                    </div>
                                                ) :
                                                <p className="client_get_service_2">{v.projectName}</p>
                                            }
                                            <p className="client_get_service">{v.service}</p>
                                        </div>
                                        <div className="client_project_logo_div">
                                            <img className="client_project_logo" src={v.projectLogo} alt={v.projectName} />
                                        </div>
                                    </div>
                                    <div className="client_review_detail">
                                        {v.review.length > 140 ?
                                            (
                                                <div className="review">
                                                    <ReadMoreReact
                                                        text={v.review}
                                                        min={20}
                                                        ideal={100}
                                                        max={140}
                                                        readMoreText={<span className="review_readmore_btn">ReadMore</span>}
                                                    />
                                                </div>
                                            ) :
                                            <p className="review2">{v.review}</p>
                                        }
                                    </div>
                                    <div className="client_info_div">
                                        <div className="client_img_div">
                                            <img className="client_img" src={v.clientImg} alt={v.clientName} />
                                        </div>
                                        <div className="client_Name_div">
                                            <p className="client_Name_p">{v.clientName}</p>
                                            <p className="client_Name_p2">
                                                <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                                <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                            </p>
                                            <p className="client_status">{v.clientStatus}</p>
                                        </div>
                                        <div className="client_Project_visit_div">
                                            <button type="button" className="btn edit_project_btn"><a className="visit_project_btn" href={v.link} target="_blank" rel="noopener noreferrer" >Visit Project</a></button>
                                            <button id={v.id} onClick={this.targetProject} type="button" className="btn edit_project_btn_2">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </CCol>
                        )
                    })}
                    <CModal
                        show={this.state.modal}
                        onClose={this.toggle}
                    >
                        <CModalHeader closeButton>Edit {targetEdit.projectName}</CModalHeader>
                        <CModalBody>
                            <CForm className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Fields</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <p className="form-control-static">Inputs</p>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Project Name</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="projectName" onChange={this.editValue} value={targetEdit.projectName || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Review Date</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="reviewDate" onChange={this.editValue} value={targetEdit.reviewDate || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Service</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="service" onChange={this.editValue} value={targetEdit.service || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Change Project Logo</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" multiple={false} type="file" ref={targetEdit.projectLogo} onChange={this.editImg} name="projectLogo" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">Change Review</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="review"
                                            id="review"
                                            rows="5"
                                            onChange={this.editValue}
                                            value={targetEdit.review || ''}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Change Client Img</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" multiple={false} type="file" ref={targetEdit.clientImg} onChange={this.editImg} name="clientImg" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Client Name</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="clientName" onChange={this.editValue} value={targetEdit.clientName || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Client Status</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="clientStatus" onChange={this.editValue} value={targetEdit.clientStatus || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change link</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="link" onChange={this.editValue} value={targetEdit.link || ''} />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CModalBody>
                        <CModalFooter>
                            <CButton
                                color="danger"
                                onClick={this.toggle}
                            ><CIcon name="cil-ban" /> Cancel</CButton>
                            <CButton onClick={this.editProjectConfirm} color="primary"><CIcon name="cil-scrubber" /> Save changes</CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal
                        show={this.state.modal2}
                        onClose={this.toggle2}
                    >
                        <CModalHeader closeButton>Confirmation</CModalHeader>
                        <CModalBody>
                            Are You Sure You Want To Save Changes!
                        </CModalBody>
                        <CModalFooter>
                            <CButton
                                color="danger"
                                onClick={this.toggle2}
                            ><CIcon name="cil-ban" />NO</CButton>
                            <CButton onClick={this.editProject} color="primary"><CIcon name="cil-scrubber" /> Yes</CButton>
                        </CModalFooter>
                    </CModal>

                    <CButton className="add_Project_btn" onClick={this.toggle3} ><AddIcon style={{ fontSize: 40 }} /></CButton>

                    <CModal
                        show={this.state.modal3}
                        onClose={this.toggle3}
                    >
                        <CModalHeader closeButton>Add Project</CModalHeader>
                        <CModalBody>
                            <CForm className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Fields</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <p className="form-control-static">Inputs</p>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Project Title</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pTitle" onChange={this.addValue} placeholder="project Title..." />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Project Category</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pCategory" onChange={this.addValue} placeholder="project Category..." />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Project Link</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pLink" onChange={this.addValue} placeholder="project Link..." />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Project Image</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" multiple={false} type="file" ref={targetEdit.pImg} onChange={this.addImg} name="pImg" />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CModalBody>
                        <CModalFooter>
                            <CButton
                                color="danger"
                                onClick={this.toggle3}
                            ><CIcon name="cil-ban" /> Cancel</CButton>
                            <CButton onClick={this.addProjectConfirm} color="primary"><CIcon name="cil-scrubber" /> Save</CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal
                        show={this.state.modal4}
                        onClose={this.toggle4}
                    >
                        <CModalHeader closeButton>Confirmation</CModalHeader>
                        <CModalBody>
                            Are You Sure You Want To Save Changes!
                        </CModalBody>
                        <CModalFooter>
                            <CButton
                                color="danger"
                                onClick={this.toggle4}
                            ><CIcon name="cil-ban" />NO</CButton>
                            <CButton onClick={this.addProject} color="primary"><CIcon name="cil-scrubber" /> Yes</CButton>
                        </CModalFooter>
                    </CModal>
                </CRow>
            </>
        )
    }
}

export default ClientReviews;
