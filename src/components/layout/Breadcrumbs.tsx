import * as React from "react";
import * as Rivet from "rivet-react";
import { Content } from "./Content";

export const Breadcrumbs: React.SFC<IBreadcrumbsProps> = ({ crumbs }) => (
  <Content>
    <Rivet.Row>
      <Rivet.Col>
        <Rivet.Breadcrumbs>
          <Rivet.List variant="plain" orientation="inline">
            {crumbs &&
              crumbs.length > 0 &&
              crumbs.map((crumb, i) => (
                <li key={"crumb:" + i}>
                  {typeof crumb === "string" ? (
                    crumb
                  ) : crumb.href ? (
                    <a href={crumb.href}>{crumb.text}</a>
                  ) : (
                    crumb.text
                  )}
                </li>
              ))}
          </Rivet.List>
        </Rivet.Breadcrumbs>
      </Rivet.Col>
    </Rivet.Row>
  </Content>
);

export interface IBreadcrumbsProps {
  crumbs: Array<string | { text: string; href: string }>;
}