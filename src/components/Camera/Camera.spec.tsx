///<reference types="cypress">

import * as React from "react";
import {mount} from "@cypress/react";
import Camera from "./Camera.tsx";

describe("Camera", ()=>{
    it("passes className properly",()=>{
        let className = "container";
        mount(<Camera className={className} />);

        cy.get('[data-cy=camera]').should('have.class', className);
    });
});
