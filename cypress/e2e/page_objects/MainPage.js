class MainPage
{
//input fields
loginFieldFill(value){
    cy.get('#user-name').type(value)
}
passwordFieldFill(value){
    cy.get('#password').type(value)
}

//buttons
loginButton(){
    cy.get('#login-button').click()
}

//errors
loginError(){
    cy.get('form>div>h3').contains("Epic sadface: Username and password do not match any user in this service")
}
}

export default MainPage