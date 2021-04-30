import React from 'react';
import { render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { axe as jestAxe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations)

test('no a11y errors on load', async () => {
  render(<App />);

  const { incomplete, violations } = await axe.run(document);

  expect(violations.length).toEqual(0)
});



//test('noViolations: no a11y errors on load', async () => {
//  render(<App />);
//  expect(await noViolations(document)).toBe(true);
//});

//interface NoViolations {
//  (html: axe.ElementContext): Promise<boolean>
//}

//const noViolations: NoViolations = async (html) => {
//  const { violations } = await axe.run(html);
//  const hasViolations = violations.length > 0;

//  if (hasViolations) {
//    console.error(
//      `${violations.length} a11y error(s) found:\n\n` +
//      violations.map(v =>
//        `  Impact: ${v.impact}\n` +
//        `  Description: ${v.description}\n` +
//        `  Help: ${v.help}\n` +
//        `  Help URL: ${v.helpUrl}`
//      ).join(`\n\n  *****\n\n`)
//    );
//  }

//  return !hasViolations
//}



//test('jest-axe: no a11y errors on load', async () => {
//  render(<App />);
//  expect(await jestAxe(document.body)).toHaveNoViolations()
//});



//import React from 'react';
//import { mount } from '@cypress/react';
//import App from './App';

//beforeEach(() => {
//  cy.injectAxe();
//});

//it('cy: renders learn react link', () => {
//  mount(<App />);
//  cy.get('a').contains('Learn React');
//});

//it('cy: it is accessible on load', () => {
//  mount(<App />);
//  cy.checkA11y()
//})

//it('cy: it is accessible after color flipping', () => {
//  mount(<App />);
//  cy.get('button').contains('Flip colors').click();
//  cy.checkA11y()
//})
