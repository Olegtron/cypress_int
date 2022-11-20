class MainPage
{
//input fields
loginFieldFill(value){
    const loginFill = cy.get('#user-name')
    loginFill.type(value)
    return this
}
passwordFieldFill(value){
    const loginFill = cy.get('#password')
    loginFill.type(value)
    return this
}

//buttons
    loginButton(){
        const logInButton = cy.get('#login-button')
        logInButton.click()
    }

}

export default MainPage