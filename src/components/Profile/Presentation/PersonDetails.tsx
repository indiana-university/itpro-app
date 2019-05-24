import * as React from "react";
import { Panel } from "../../Panel";
import { IPerson } from "../../types";
import { Button, Badge, List, ModalBody } from "rivet-react";
import { Pencil } from "src/components/icons";
import { Modal } from "src/components/layout/Modal";
import EditInterests from "../Forms/EditInterests";

export const PersonDetails: React.SFC<IProps> = (props) => {
  const { location, campus, campusEmail, campusPhone, department, interests, jobClasses, canEdit } = props;
  const interestList = interests.split(";").filter(s => !!s.trim())
  return <>
    <Panel title="Contact Information">
      <div className="list-dividers">
        <div>
          {location &&
            <div>
              <strong>Location: </strong>
              {location}
            </div>}
          {campus &&
            <div>
              <strong>Campus: </strong>
              {campus}
            </div>}
          {campusEmail &&
            <div>
              <strong>Email: </strong>
              <a href={`mailto:${campusEmail}`}>{campusEmail}</a>
            </div>
          }
          {campusPhone &&
            <div>
              <strong>Phone: </strong>
              {campusPhone}
            </div>}
          {department &&
            <div>
              <strong>Department: </strong>
              <a href={`/departments/${department.id}`}>{department.name}</a>
            </div>}
        </div>
        {(jobClasses || canEdit) && (
          <div>
            {canEdit &&
              <div style={{ float: "right" }}>
                <Button variant="plain"><Pencil /></Button>
              </div>
            }
            <h2 className="rvt-ts-23 rvt-text-bold">Responsibilities</h2>
            {jobClasses
              .split(';')
              .filter(s => s.trim())
              .map((r) => (<div>{r}</div>))}
          </div>
        )}
        {(interests || canEdit) && (
          <div>
            {canEdit &&
              <div style={{ float: "right" }}>
                <Modal id="Edit interests" title="Edit interests" buttonText={<Pencil />} variant="plain">
                  <ModalBody><EditInterests person={props} interests={interestList} /> </ModalBody>
                </Modal>
              </div>
            }
            <h2 className="rvt-ts-23 rvt-text-bold">Professional interests</h2>
            <p>Professional interests are topics or skills that are commonly shared throughout this industry. Select a topic below to see who else has the same interests.</p>
            <List variant="plain" orientation="inline">
              {interestList.map((interest) => (<li key={`${interest}-badge`}><Badge>{interest}</Badge></li>))}
            </List>
          </div>
        )}
      </div>
    </Panel>
  </>
}

interface IProps extends IPerson {
  canEdit?: boolean
}