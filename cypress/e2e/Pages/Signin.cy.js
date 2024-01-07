//  **************LogIn xpath********
///<reference types="cypress-xpath" />
export class SignInPage {
    signin ="//a[@title='আমার অ্যাকাউন্ট']";
    email = "//input[@id='username']";
    password = "//input[@id='password']";
    LoginButton= "//input[@name='login']";

//********Gamil Login */

SignFirst(){
    cy.xpath(this.signin).click();
    cy.xpath(this.email).type("arifshumon@yopmail.com");
    cy.wait(3000);
    cy.xpath(this.password).type('Arif123');
    cy.wait(3000);
    cy.xpath(this.LoginButton).click({force:true});
    cy.wait(3000)

}
   

 }