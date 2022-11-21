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

//errors
loginError(){
    const loginError = cy.get('form>div>h3')
    loginError.contains("Epic sadface: Username and password do not match any user in this service")
    return this
}
}

export default MainPage