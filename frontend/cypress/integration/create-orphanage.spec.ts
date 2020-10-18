/// <reference types="cypress"/>
/// <reference path="../support/index.d.ts" />

let x = Math.floor(Math.random( ) * 199)
let y = Math.floor(Math.random( ) * 199)
let Chance = require('chance')
let chance = new Chance()

let fixtureFiles = [
    'orphanage01.jpg',
    'orphanage02.jpg',
    'orphanage03.jpg',
]

let uploadFile = 'input[type=file]'


describe('Create orphanage', () => {

    before(() => {
        cy.visit('/app')
    });

    it.only('Should be able to create a new orphanage', () => {

        cy.server()
        cy.route('POST', '**/orphanages')
        .as('postNewOrphanage');

        cy.get('.create-orphanage').click();
        cy.url().should('contain','orphanages/create');
        cy.get('.create-orphanage-form').find('legend')
                                        .eq(0)
                                        .should('have.text', "Dados");

        cy.get('.leaflet-control-container').click(x, y, {force: true})
        cy.get('.leaflet-marker-icon').should('be.visible');
        cy.get('input#name').type(chance.name());
        cy.get('textarea#name').type(chance.sentence());
        cy.get(uploadFile).attachFile(fixtureFiles[0], { force:true })
        cy.get('#instructions').type(chance.sentence())
        cy.get('#opening_hours').type(chance.hour())
                                .type(chance.ampm())
                                .type("-")
                                .type(chance.hour())
                                .type(chance.ampm())

        cy.get('.button-select').contains("Não").click();
        cy.get('.confirm-button').click()

        cy.wait('@postNewOrphanage').then((resNewOrphanage) => {
            expect(resNewOrphanage.status).to.eq(201)
        })
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Cadastro realizado com sucesso')
          })

        cy.url().should('contain', '/app')
    });

    it('Should be able to create a new orphanage with multiple images', () => {

        cy.server()
        cy.route('POST', '**/orphanages')
        .as('postNewOrphanage');

        cy.get('.create-orphanage').click();
        cy.url().should('contain','orphanages/create');
        cy.get('.create-orphanage-form').find('legend')
                                        .eq(0)
                                        .should('have.text', "Dados");

        cy.get('.leaflet-control-container').click(x, y, {force: true})
        cy.get('.leaflet-marker-icon').should('be.visible');
        cy.get('input#name').type(chance.name());
        cy.get('textarea#name').type(chance.sentence());
        cy.get(uploadFile).attachFile(fixtureFiles[0], { force:true })
                          .attachFile(fixtureFiles[1], { force:true })
                          .attachFile(fixtureFiles[2], { force:true })

        cy.get('#instructions').type(chance.sentence())
        cy.get('#opening_hours').type(chance.hour())
                                .type(chance.ampm())
                                .type("-")
                                .type(chance.hour())
                                .type(chance.ampm())

        cy.get('.button-select').contains("Sim").click();
        cy.get('.confirm-button').click()

        cy.wait('@postNewOrphanage').then((resNewOrphanage) => {
            expect(resNewOrphanage.status).to.eq(201)
        })
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Cadastro realizado com sucesso')
          })

        cy.url().should('contain', '/app')
    });
});