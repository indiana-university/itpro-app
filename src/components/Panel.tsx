/** 
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from "react";
import { Col, Row } from "rivet-react";

export const Panel: React.SFC<IProps> = ({ title, children }) => (
  <Row>
    <Col
      className="rvt-border-all rvt-border-radius rvt-bg-white"
      style={{ overflow: "auto" }}
    >
      <Row>
        <Col
          className="rvt-bg-cream rvt-border-bottom rvt-p-all-xs rvt-p-left-md rvt-p-right-md rvt-ts-18 rvt-text-bold"
          style={{ color: "#333" }}
        >
          {title}
        </Col>
      </Row>
      <Row>
        <Col className="rvt-p-all-md">{children}</Col>
      </Row>
    </Col>
  </Row>
);
interface IProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
}
