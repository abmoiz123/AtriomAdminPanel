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
} from '@coreui/react'
import AddIcon from '@material-ui/icons/Add';
import CIcon from '@coreui/icons-react'
import './Portfolio.css'
import img1 from '../../assets/project1.png'
import img2 from '../../assets/project2.png'
import img3 from '../../assets/project3.png'
import img4 from '../../assets/project4.png'

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            portfolio: [
                {
                    pId: '1',
                    pImg: img1,
                    pTitle: 'a2z utility',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '2',
                    pImg: img2,
                    pTitle: 'a2z dfsddsd',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '3',
                    pImg: img3,
                    pTitle: 'a2z dfdsf',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '4',
                    pImg: img4,
                    pTitle: 'a2z dsfdy',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '5',
                    pImg: img1,
                    pTitle: 'a2z utility',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '6',
                    pImg: img2,
                    pTitle: 'a2z dfsddsd',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '7',
                    pImg: img3,
                    pTitle: 'a2z dfdsf',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '8',
                    pImg: img4,
                    pTitle: 'a2z dsfdy',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
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
        let result = this.state.portfolio.find(({ pId }) => pId === eleId);
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
        const portfolio = this.state.portfolio;
        portfolio[portfolio.findIndex(el => el.pId === newOne.pId)] = newOne;
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
                    {this.state.portfolio.map((v, i) => {
                        return (
                            <CCol key={i} xs="6" sm="4" md="3">
                                <div className="card">
                                    <img src={v.pImg} alt={v.pTitle} className="card_img" />
                                    <div className="card-body card_text">
                                        <h4 className="card_title">{v.pTitle}</h4>
                                        <h5 className="card_category">{v.pCategory}</h5>
                                        <p className="card_category">{v.pLink}</p>
                                        <button id={v.pId} onClick={this.targetProject} type="button" className="btn card_btn">Edit</button>
                                    </div>
                                </div>
                            </CCol>
                        )
                    })}
                    <CModal
                        show={this.state.modal}
                        onClose={this.toggle}
                    >
                        <CModalHeader closeButton>Edit {targetEdit.pTitle}</CModalHeader>
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
                                        <CLabel htmlFor="text-input">Change Title</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pTitle" onChange={this.editValue} value={targetEdit.pTitle || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Category</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pCategory" onChange={this.editValue} value={targetEdit.pCategory || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Link</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pLink" onChange={this.editValue} value={targetEdit.pLink || ''} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Change Image</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" multiple={false} type="file" ref={targetEdit.pImg} onChange={this.editImg} name="pImg" />
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

                    <CButton className="add_Project_btn" onClick={this.toggle3} ><AddIcon style={{fontSize: 40}} /></CButton>

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

export default Portfolio;
