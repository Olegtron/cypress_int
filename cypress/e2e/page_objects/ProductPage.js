class ProductPage
{
    //Buttons
    burgerButton(){
        const burgerButton = cy.get('#react-burger-menu-btn')
        burgerButton.click()
    }
    logoutButton(){
        const logoutButton = cy.get('#logout_sidebar_link')
        logoutButton.click()
    }
}

export default ProductPage