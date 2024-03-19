describe('Testes de funcionalidade da aplicação de agenda de contatos', () => {
  it('Deve incluir um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.get('[data-testid=add-contact]').click();

    cy.get('[data-testid=input-name]').type('Novo Contato');
    cy.get('[data-testid=input-email]').type('novo@email.com');
    cy.get('[data-testid=input-phone]').type('123456789');
    cy.get('[data-testid=btn-save]').click();

    cy.contains('Novo Contato').should('exist');
  });

  it('Deve alterar um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.contains('Novo Contato').parent().find('[data-testid=btn-edit]').click();

    cy.get('[data-testid=input-name]').clear().type('Contato Alterado');
    cy.get('[data-testid=input-email]').clear().type('alterado@email.com');
    cy.get('[data-testid=input-phone]').clear().type('987654321');
    cy.get('[data-testid=btn-save]').click();

    cy.contains('Contato Alterado').should('exist');
  });

  it('Deve remover um contato existente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');

    cy.contains('Contato Alterado').parent().find('[data-testid=btn-delete]').click();

    cy.contains('Contato Alterado').should('not.exist');
  });
});
