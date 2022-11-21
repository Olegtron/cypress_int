class ProductPage
{
    //Buttons
    burgerButton(){
        cy.get('#react-burger-menu-btn').click()
    }
    logoutButton(){
        cy.get('#logout_sidebar_link').click()
    }
}

export default ProductPage