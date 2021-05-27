///<reference types="cypress">

import React from "react";
import {mount} from "@cypress/react";
import Camera from "../../src/components/Camera/Camera"

describe("Camera", ()=>{
    it("renders buttons",()=>{
        mount(<Camera />);

        cy.get('div button').first().should("have.text", "Record from Webcam")
        .next().should('have.text',"Upload Video File");
    });
});
