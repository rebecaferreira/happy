/// <reference types="cypress"/>
/// <reference path="../support/index.d.ts" />

describe('Show orphanages available on the map and its details', () => {

    before(() => {
        cy.visit('/');
        cy.get('.enter-app').click();
    });

    it('Should be able to show orphanages markers on the map', () => {
        cy.get('.leaflet-marker-icon').should('be.visible');
    });

    it('Should be able to show orphanages details', () => {
        //Choose an orphanage
        cy.clickOrphanage(1)
        cy.get('.leaflet-popup-content > a').click()

        cy.getOrphanage("Casa dos Meninos")
        cy.get('.images').should('be.visible')
                         .find('button')
                         .should('have.class', 'active');

        cy.get('.leaflet-container').should('be.visible')

        cy.get('.map-container > footer').should('have.text', "Ver rotas no Google Maps")
                                         .find('a')
                                         .and('have.attr', 'href')

        cy.get('h2').should('have.text', "Instruções para visita" )

        cy.get('.orphanage-details-content').should('be.visible')
                                            .find('p').eq(1)
                                            .and('have.text', "Venha nos visitar!" );

        cy.get('.hour').should('be.visible').and('have.text', "Segunda à Sexta 10h as 20h")
        cy.get('.open-on-weekends').should('be.visible')
                                   .and('have.text', "Atendemos fim de semana");

        cy.get('footer > button').click();

        //Choose another orphanage
        cy.clickOrphanage(0)
        cy.get('.leaflet-popup-content > a').click()
        cy.getOrphanage("Lar das Crianças")

        cy.get('.images').should('be.visible')
                         .find('button')
                         .should('have.class', 'active');  
                         
        cy.get('.leaflet-container').should('be.visible')
        cy.get('.map-container > footer').should('have.text', "Ver rotas no Google Maps")
                                         .find('a')
                                         .and('have.attr', 'href')

        cy.get('h2').should('have.text', "Instruções para visita" )
        cy.get('.orphanage-details-content').should('be.visible')
                                            .find('p')
                                            .eq(1)
                                            .and('have.text', "Venha nos visitar!" );

        cy.get('.hour').should('be.visible').and('have.text', "Segunda à Sexta 10h as 20h")
        cy.get('.open-on-weekends').should('be.visible').and('have.text', "Não atendemos fim de semana");
    });
});
 