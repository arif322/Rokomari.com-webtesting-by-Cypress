export class BaseUrl {
    url ="https://www.wafilife.com/";

    URL(){
        
        Cypress.on("uncaught: expectation" , (err, runnable) => {
            return false;
        });

        cy.visit(this.url);
        cy.url().should("include" , "wafilife");
        cy.url().should("eq","https://www.wafilife.com/");
        cy.url().should("contain", "wafilife");

    }
}