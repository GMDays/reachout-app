import React from "react";
import "./../assets/css/blk-design-system-react.css";
import {
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Button } from "galio-framework";

export default function ReachoutNavbar(props: any) {
  const { currUser, logIn } = props;
  let button;

  if (currUser) {
    button = (
      <div class="header-menu">
        Sign Out <div className="header-current-user"></div>
      </div>
    );
  } else {
    button = <div class="header-menu">Sign In</div>;
  }

  return (
    <Navbar className="bg-info" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand href="./../assets/img/apple-icon.png">Logo</NavbarBrand>
          <button
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <Collapse isOpen={false} navbar toggler="#">
          <Nav navbar>
            <NavItem className="active">
              <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                Todo List
              </NavLink>
            </NavItem>
          </Nav>
          <Form className="form-inline ml-auto">
            <FormGroup className="no-border">
              <Input placeholder="Search" type="text" />
            </FormGroup>
          </Form>
        </Collapse>
      </Container>
    </Navbar>
  );
}
