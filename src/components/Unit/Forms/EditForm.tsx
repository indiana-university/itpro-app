import * as React from 'react';
import { reduxForm, InjectedFormProps, FieldArray, Field } from 'redux-form';
import * as unit from '../store';
import { Breadcrumbs, Content, PageTitle } from 'src/components/layout';
import { Section, List, Button, Row, Col, ModalBody } from 'rivet-react';
import { Modal, closeModal } from '../../layout/Modal'
import { RivetInputField, RivetInput, RivetTextarea, RivetTextareaField, required, url } from 'src/components/form';
import { TrashCan, ArrowUp, ArrowDown } from 'src/components/icons';
import AddMemeberForm from './AddMemeberForm';
import { connect } from 'react-redux';
import UpdateParentForm from './UpdateParentForm';
import AddChildForm from './AddChildForm';
import AddDepartmentForm from './AddDepartmentFrom';

interface IFormActions {
    save: typeof unit.saveRequest;
    cancel: typeof unit.cancel;
    closeModal: typeof closeModal
}

interface IFormProps extends unit.IUnitProfile, IFormActions, InjectedFormProps<unit.IUnitProfile, IFormActions> { }

interface IMemberField extends unit.IUnitMember { fieldId: number };
let modalClose = () => { };
let EditForm: React.SFC<IFormProps> | any = (props: IFormProps) => {
    modalClose = props.closeModal;
    return <>
        <Breadcrumbs
            crumbs={[
                { text: "Home", href: "/" },
                { text: "Units", href: "/units" },
                props.name
            ]} />
        <Content className="rvt-bg-white rvt-p-tb-lg rvt-m-bottom-xxl" >
            <PageTitle>Edit Unit</PageTitle>
            <Section>
                <form onSubmit={props.save}>
                    <div>
                        <RivetInputField name="name" component={RivetInput} label="Name" validate={[required]} />
                    </div>
                    <div>
                        <RivetTextareaField name="description" component={RivetTextarea} label="Description" validate={[required]} />
                    </div>
                    <div>
                        <RivetInputField name="url" component={RivetInput} label="URL" validate={[url]} />
                    </div>

                    <hr />
                    <h2>Members</h2>
                    <div>
                        <FieldArray name="members" component={renderMembers} />
                    </div>

                    <hr />
                    <h2>Parent</h2>
                    <div>
                        <Field name="parent" component={renderParent} />
                    </div>

                    <hr />
                    <h2>Children</h2>
                    <div>
                        <FieldArray name="children" component={renderChildren} />
                    </div>

                    <hr />
                    <h2>Supported departments</h2>
                    <div>
                        <FieldArray name="supportedDepartments" component={renderDepartments} />
                    </div>
                    <div>
                        <Button onClick={props.cancel}>Cancel</Button>
                        <Button type="submit" disabled={props.invalid}>Save</Button>
                    </div>

                </form>
            </Section>
        </Content>
    </>
};


const renderMembers = ({ fields }: any) => {
    let members = fields.map((target: any, index: number) => {
        let member = fields.get(index) as unit.IUnitMember;
        return { ...member, fieldId: index };
    }) as IMemberField[];
    let leaders = members.filter((m) => (m.role == unit.ItProRole.Admin || m.role == unit.UitsRole.Leader))
    let standardMember = members.filter((m) => (m.role == unit.ItProRole.Pro || m.role == unit.UitsRole.Member || m.role == unit.UitsRole.Sublead))
    let others = members.filter((m) => (m.role == unit.ItProRole.Aux || m.role == unit.UitsRole.Related))

    return <>
        <h2>Leadership</h2>
        <List variant="plain">
            {
                leaders.map((member, index) => {
                    const moveDown = leaders[index + 1] ? () => { fields.swap(member.fieldId, leaders[index + 1].fieldId) } : undefined;
                    const moveUp = leaders[index - 1] ? () => { fields.swap(member.fieldId, leaders[index - 1].fieldId) } : undefined;
                    const remove = () => { fields.remove(index) };
                    return renderMember(member, index, remove, moveUp, moveDown)
                })}
        </List>

        <h2>Members</h2>
        <List variant="plain">
            {
                standardMember.map((member, index) => {
                    const moveDown = standardMember[index + 1] ? () => { fields.swap(member.fieldId, standardMember[index + 1].fieldId) } : undefined;
                    const moveUp = standardMember[index - 1] ? () => { fields.swap(member.fieldId, standardMember[index - 1].fieldId) } : undefined;
                    const remove = () => { fields.remove(index) };
                    return renderMember(member, index, remove, moveUp, moveDown)
                })}
        </List>

        <h2>Other</h2>
        <List variant="plain">
            {
                others.map((member, index) => {
                    const moveDown = others[index + 1] ? () => { fields.swap(member.fieldId, others[index + 1].fieldId) } : undefined;
                    const moveUp = others[index - 1] ? () => { fields.swap(member.fieldId, others[index - 1].fieldId) } : undefined;
                    const remove = () => { fields.remove(index) };
                    return renderMember(member, index, remove, moveUp, moveDown)
                })}
        </List>
        <Modal
            id="Add member to unit"
            title="Modal Dialog"
            buttonText="Add Member"
        >
            <ModalBody>
                <AddMemeberForm onSubmit={(member: any) => {
                    fields.push(member);
                    console.log(member)
                    modalClose();
                }} />
            </ModalBody>
        </Modal>
    </>;
}

const renderMember = (
    member: IMemberField,
    index: number,
    remove?: () => any,
    moveUp?: () => any,
    moveDown?: () => any) => (<li key={index}>
        <Row>
            <Col>
                <h4>{member.name}</h4>
                <div>{member.role}</div>
            </Col>
            <Col last={true}>
                {moveUp && <Button
                    className="rvt-button--plain"
                    type="button"
                    title="Move Member"
                    onClick={moveUp}
                ><ArrowUp /></Button>
                }
                {moveDown &&
                    <Button
                        className="rvt-button--plain"
                        type="button"
                        title="Move Member"
                        onClick={moveDown}
                    ><ArrowDown /></Button>
                }
                {remove && <Button
                    className="rvt-button--plain"
                    type="button"
                    title="Remove Member"
                    onClick={remove}
                ><TrashCan /></Button>
                }
            </Col>
        </Row>
    </li>)

const renderParent = ({ input }: any) => {
    return <>
        <Modal
            id="update unit parents"
            title="Update Parent"
            buttonText="Update parent"
        >
            <ModalBody>
                <UpdateParentForm onSubmit={(parent: any) => {
                    input.onChange(parent);
                    modalClose();
                }} />
            </ModalBody>
        </Modal>
        <h4>{input.value.name}</h4>
        <Button
            className="rvt-button--plain"
            type="button"
            title="Remove Member"
            onClick={() => input.onChange(null)}
        ><TrashCan /></Button>
        {input.value.description &&
            <p>{input.value.description}</p>
        }

    </>
}

const renderChildren = ({ fields }: any) => {
    return <>
        <List variant="plain">
            {fields.map((field: any, index: number) => {
                const unit = fields.get(index);
                return (<li key={index}>
                    <Row>
                        <Col>
                            <h4>{unit.name}</h4>
                            {unit.description &&
                                <p>{unit.description}</p>
                            }
                        </Col>
                        <Col>
                            {fields.get(index - 1) &&
                                <Button
                                    variant="plain"
                                    type="button"
                                    title="Move Unit up"
                                    onClick={() => fields.swap(index, index - 1)}
                                ><ArrowUp /></Button>
                            }
                            {fields.get(index + 1) &&
                                <Button
                                    variant="plain"
                                    type="button"
                                    title="Move Unit down"
                                    onClick={() => fields.swap(index, index + 1)}
                                ><ArrowDown /></Button>
                            }
                            <Button
                                variant="plain"
                                type="button"
                                title="Remove Unit"
                                onClick={() => fields.remove(index)}
                            ><TrashCan /></Button>
                        </Col>
                    </Row>
                </li>
                )
            }
            )}
        </List>
        <Modal title="Add child unit" id="Add child unit" buttonText="Add child">
            <ModalBody>
                <AddChildForm onSubmit={(child: any) => {
                    fields.push(child);
                    modalClose()
                }} />
            </ModalBody>
        </Modal>
    </>
}

const renderDepartments = ({ fields }: any) => {
    return <>
        <List variant="plain">
            {fields.map((field: any, index: number) => {
                const department = fields.get(index);
                return (<li key={index}>
                    <Row>
                        <Col>
                            <h4>{department.name}</h4>
                            {department.description &&
                                <p>{department.description}</p>
                            }
                        </Col>
                        <Col>
                            {fields.get(index - 1) &&
                                <Button
                                    variant="plain"
                                    type="button"
                                    title="Move department up"
                                    onClick={() => fields.swap(index, index - 1)}
                                ><ArrowUp /></Button>
                            }
                            {fields.get(index + 1) &&
                                <Button
                                    variant="plain"
                                    type="button"
                                    title="Move department down"
                                    onClick={() => fields.swap(index, index + 1)}
                                ><ArrowDown /></Button>
                            }
                            <Button
                                variant="plain"
                                type="button"
                                title="Remove Department"
                                onClick={() => fields.remove(index)}
                            ><TrashCan /></Button>
                        </Col>
                    </Row>
                </li>
                )
            }
            )}
        </List>
        <Modal id="add department to unit" title="Update Parent" buttonText="Add department">
            <ModalBody>
                <AddDepartmentForm onSubmit={(department: any) => {
                    console.log(department);
                    fields.push(department);
                    modalClose();
                }} />
            </ModalBody>
        </Modal>
    </>
}

EditForm = reduxForm<unit.IUnitProfile, IFormActions>({
    form: "editUnit",
    enableReinitialize: true
})(EditForm);

EditForm = connect(null, {
    closeModal: closeModal
})(EditForm)

export default EditForm;