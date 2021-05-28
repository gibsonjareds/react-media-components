///<reference types="cypress">

import * as React from "react";
import {mount} from "@cypress/react";
import StepOne from "./StepOne.tsx";

describe("StepOne", ()=>{
    it("renders buttons",()=>{
        mount(<StepOne />);

        cy.get('div button').first().should("have.text", "Record from Webcam")
          .next().should('have.text',"Upload Video File");
    });
});
