export { }

describe('service is available', () => {
  const modal = '[data-cy="modal"]';
  const constructorZone = '[data-cy="constructor_list"]';
  const constructorIngredientList = '[data-cy="constructor_ingredient_list"]';

  beforeEach(() => {
    cy.viewport(1920, 1024);
    cy.visit('/');
  });
  it('should open constructor page', () => {
    cy.get('h1').contains('Собери бургер');
  });
  it('should show & hide modal window', () => {
    cy.get(modal).should('not.exist');
    cy.get("[class^=BurgerCardIngredient_image]").first().click();
    cy.get(modal).contains("Детали ингредиента");
    cy.get(modal).should('exist');
    cy.get(modal).find('svg').first().click();
    cy.get(modal).should('not.exist');
  });
  it('DnD', () => {
    const dnd = new DataTransfer();
    cy.get(constructorIngredientList).should('not.exist');
    cy.get("[class^=BurgerCardIngredient_image]").eq(2).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get("[class^=BurgerCardIngredient_image]").eq(3).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get(constructorIngredientList).should('exist');
    cy.get(constructorIngredientList).should('not.be.empty');
  });
  it('should delete ingredients', () => {
    const dnd = new DataTransfer();
    cy.get("[class^=BurgerCardIngredient_image]").eq(2).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get("[class^=BurgerCardIngredient_image]").eq(3).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get(constructorIngredientList).find('li').first().find("[class^=constructor-element__action]").click();
    cy.get(constructorIngredientList).find('li').first().find("[class^=constructor-element__action]").click();
    cy.get(constructorIngredientList).should('not.exist');
  });
  it('should changed sort ingredients', () => {
    const dnd = new DataTransfer();
    const ingredientName = "Соус фирменный Space Sauce";
    cy.get("[class^=BurgerCardIngredient_image]").eq(2).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get("[class^=BurgerCardIngredient_image]").eq(3).trigger('dragstart', { dnd });
    cy.get(constructorZone).trigger('drop', { dnd });
    cy.get(constructorIngredientList).find('li').eq(1).contains(ingredientName);

    cy.get(constructorIngredientList).find('li').eq(1).trigger('dragstart', { dnd });
    cy.get(constructorIngredientList).find('li').eq(0).trigger('drop', { dnd });

    cy.get(constructorIngredientList).find('li').eq(0).contains(ingredientName);
  });
  it('should create new order', () => {
    cy.contains('Оформить заказ').click();
    cy.hash().should('eq', '#/login');
    cy.contains('Войти');
  })
})

describe('login user', () => {
  const inputEmail = 'input[name=email]';
  const inputPassword = 'input[name=password]';
  const testUser = {
    email: 'kivals.90@yandex.ru',
    password: '123456'
  }
  beforeEach(() => {
    cy.viewport(1450, 1100);
    cy.visit('http://localhost:3000/#/login');
  })
  it('should login user', () => {
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy
      .get(inputEmail).click().type(testUser.email)
      .get(inputPassword).click().type(testUser.password);
    cy.contains('button', 'Войти').click();
    cy.location('pathname', { timeout: 1000 }).should('eq', '/');
  })
});
