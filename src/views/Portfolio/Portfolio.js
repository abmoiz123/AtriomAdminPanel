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
import CIcon from '@coreui/icons-react'
import './Portfolio.css'
import img1 from '../../assets/project1.png'

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
                    pImg: img1,
                    pTitle: 'a2z dfsddsd',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '3',
                    pImg: img1,
                    pTitle: 'a2z dfdsf',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
                {
                    pId: '4',
                    pImg: img1,
                    pTitle: 'a2z dsfdy',
                    pCategory: 'wordpress',
                    pLink: 'https://atriom.co.uk/',
                },
            ],
            pImg: '',
            pTitle: '',
            pCategory: '',
            pLink: '',
            targetEdit: [],
            modal: false,
            modal2: false,
        };
    }

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
    editValue = (e) => {
        let targetName = e.target.name;
        let editNewValue = e.target.value;
        this.setState({
            [targetName]: editNewValue
        })
        
    }
    editProjectConfirm = () => {
        this.toggle2();
    }
    editProject = () => {
        // let newEditData;
        const { pTitle, pLink, pImg, pCategory } = this.state;
        const eleId = this.state.targetEdit.pId;
        let result = this.state.portfolio.findIndex((obj => obj.pId === eleId));
        this.state.portfolio[result].pTitle = pTitle;
        console.log(this.state.portfolio)
        console.log("the")
        // this.setState({

        // })
        // if (pTitle || pLink || pImg || pCategory !== "") {
        //     newEditData = {
        //         pTitle: pTitle,
        //         pLink: pLink,
        //         pCategory: pCategory,
        //         pImg: pImg
        //     }
        //     console.log("If==>",newEditData)
        //     const eleId = this.state.targetEdit.pId;
        //     let result = this.state.portfolio.find(({ pId }) => pId === eleId);
        //     this.setState({

        //     })
        // }else {
        //     console.log("else==>",newEditData)
        // }
        // console.log(result)
        // const targetEdit = this.state.targetEdit;
        // this.setState({
        //     portfolio: this.state.portfolio.map(targetEdit => (targetEdit.pId === pId ? { ...el, text } : el))
        // });
        // const editpTitle = this.state.editpTitle;
        // this.setState({
        //     pTitle: editpTitle,
        // });
        // this.toggle();
        // this.toggle2();
    }
    render() {
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
                                        <CInput id="text-input" name="pTitle" onChange={this.editValue} defaultValue={targetEdit.pTitle} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Category</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pCategory" onChange={this.editValue} defaultValue={targetEdit.pCategory} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Change Link</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="pLink" onChange={this.editValue} defaultValue={targetEdit.pLink} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CLabel col md="3" htmlFor="file-input">Change Image</CLabel>
                                    <CCol xs="12" md="9">
                                        <CInputFile id="file-input" onChange={this.editValue} name="pImg" />
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
                </CRow>
            </>
        )
    }
}

export default Portfolio;
