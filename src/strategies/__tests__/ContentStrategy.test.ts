/**
 * Unit Tests for Content Strategy Pattern
 * Tests Strategy Pattern implementation for i18n
 */

import { SpanishContactContent, EnglishContactContent } from '../ContactContentStrategy';
import { ContentStrategyFactory } from '../ContentStrategyFactory';
import type { IContentStrategy } from '../ContactContentStrategy';

describe('ContactContentStrategy', () => {
  describe('SpanishContactContent', () => {
    const strategy = new SpanishContactContent();

    it('should return Spanish title and subtitle', () => {
      expect(strategy.getTitle()).toBe('Comienza un proyecto pensado');
      expect(strategy.getSubtitle()).toBe('Trabaja con Chiikö');
    });

    it('should return Spanish intro and form title', () => {
      expect(strategy.getIntro()).toContain('número limitado de proyectos');
      expect(strategy.getFormTitle()).toBe('Cuéntanos sobre tu proyecto');
    });

    it('should return Spanish form field labels', () => {
      expect(strategy.getFullName()).toBe('Nombre completo');
      expect(strategy.getEmail()).toBe('Email');
      expect(strategy.getProjectType()).toBe('Tipo de proyecto');
      expect(strategy.getProjectTypePlaceholder()).toBe('Selecciona un tipo de proyecto');
      expect(strategy.getDescription()).toBe('Descripción del proyecto');
      expect(strategy.getDescriptionPlaceholder()).toContain('Cuéntanos sobre tu proyecto');
    });

    it('should return Spanish project types', () => {
      expect(strategy.getWebsite()).toBe('Sitio web');
      expect(strategy.getBranding()).toBe('Branding');
      expect(strategy.getEcommerce()).toBe('Ecommerce');
      expect(strategy.getOther()).toBe('Otro');
    });

    it('should return Spanish budget labels in MXN', () => {
      expect(strategy.getBudget()).toBe('Presupuesto estimado');
      expect(strategy.getBudgetPlaceholder()).toBe('Selecciona un rango de presupuesto');
      expect(strategy.getBudget1()).toContain('MXN');
      expect(strategy.getBudget2()).toContain('MXN');
      expect(strategy.getBudget3()).toContain('MXN');
    });

    it('should return Spanish submit and success messages', () => {
      expect(strategy.getSubmit()).toBe('Enviar proyecto');
      expect(strategy.getSuccessMessage()).toContain('Gracias');
    });

    it('should return Spanish contact and footer text', () => {
      expect(strategy.getContactEmail()).toBe('Para consultas inmediatas:');
      expect(strategy.getFooterText()).toContain('Chiikö');
    });
  });

  describe('EnglishContactContent', () => {
    const strategy = new EnglishContactContent();

    it('should return English title and subtitle', () => {
      expect(strategy.getTitle()).toBe('Start a thoughtful project');
      expect(strategy.getSubtitle()).toBe('Work with Chiikö');
    });

    it('should return English intro and form title', () => {
      expect(strategy.getIntro()).toContain('limited number of projects');
      expect(strategy.getFormTitle()).toBe('Tell us about your project');
    });

    it('should return English form field labels', () => {
      expect(strategy.getFullName()).toBe('Full name');
      expect(strategy.getEmail()).toBe('Email');
      expect(strategy.getProjectType()).toBe('Project type');
      expect(strategy.getProjectTypePlaceholder()).toBe('Select a project type');
      expect(strategy.getDescription()).toBe('Project description');
      expect(strategy.getDescriptionPlaceholder()).toContain('Tell us about your project');
    });

    it('should return English project types', () => {
      expect(strategy.getWebsite()).toBe('Website');
      expect(strategy.getBranding()).toBe('Branding');
      expect(strategy.getEcommerce()).toBe('Ecommerce');
      expect(strategy.getOther()).toBe('Other');
    });

    it('should return English budget labels in USD', () => {
      expect(strategy.getBudget()).toBe('Estimated budget');
      expect(strategy.getBudgetPlaceholder()).toBe('Select a budget range');
      expect(strategy.getBudget1()).toContain('USD');
      expect(strategy.getBudget2()).toContain('USD');
      expect(strategy.getBudget3()).toContain('USD');
    });

    it('should return English submit and success messages', () => {
      expect(strategy.getSubmit()).toBe('Submit project');
      expect(strategy.getSuccessMessage()).toContain('Thank you');
    });

    it('should return English contact and footer text', () => {
      expect(strategy.getContactEmail()).toBe('For immediate inquiries:');
      expect(strategy.getFooterText()).toContain('Chiikö');
    });
  });

  describe('IContentStrategy contract', () => {
    const strategies: [string, IContentStrategy][] = [
      ['Spanish', new SpanishContactContent()],
      ['English', new EnglishContactContent()],
    ];

    it.each(strategies)('%s strategy should return non-empty strings for all getters', (_name, strategy) => {
      const results = [
        strategy.getTitle(), strategy.getSubtitle(), strategy.getIntro(),
        strategy.getFormTitle(), strategy.getFullName(), strategy.getEmail(),
        strategy.getProjectType(), strategy.getProjectTypePlaceholder(),
        strategy.getWebsite(), strategy.getBranding(), strategy.getEcommerce(),
        strategy.getOther(), strategy.getBudget(), strategy.getBudgetPlaceholder(),
        strategy.getBudget1(), strategy.getBudget2(), strategy.getBudget3(),
        strategy.getDescription(), strategy.getDescriptionPlaceholder(),
        strategy.getSubmit(), strategy.getSuccessMessage(),
        strategy.getContactEmail(), strategy.getFooterText(),
      ];

      for (const result of results) {
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
      }
    });
  });

  describe('ContentStrategyFactory', () => {
    it('should return Spanish strategy for "es" language', () => {
      const strategy = ContentStrategyFactory.getContactContent('es');
      expect(strategy.getTitle()).toBe('Comienza un proyecto pensado');
    });

    it('should return English strategy for "en" language', () => {
      const strategy = ContentStrategyFactory.getContactContent('en');
      expect(strategy.getTitle()).toBe('Start a thoughtful project');
    });

    it('should default to English for unknown language', () => {
      const strategy = ContentStrategyFactory.getContactContent('fr');
      expect(strategy.getTitle()).toBe('Start a thoughtful project');
    });

    it('should handle case-insensitive language codes', () => {
      const strategy = ContentStrategyFactory.getContactContent('ES');
      expect(strategy.getTitle()).toBe('Comienza un proyecto pensado');
    });

    it('should handle language codes with region', () => {
      const strategy = ContentStrategyFactory.getContactContent('es-MX');
      expect(strategy.getTitle()).toBe('Comienza un proyecto pensado');
    });

    it('should register and use a custom strategy', () => {
      const customStrategy: IContentStrategy = {
        getTitle: () => 'Custom Title',
        getSubtitle: () => 'Custom Subtitle',
        getIntro: () => 'Custom Intro',
        getFormTitle: () => 'Custom Form',
        getFullName: () => 'Name',
        getEmail: () => 'Email',
        getProjectType: () => 'Type',
        getProjectTypePlaceholder: () => 'Select',
        getWebsite: () => 'Web',
        getBranding: () => 'Brand',
        getEcommerce: () => 'Ecom',
        getOther: () => 'Other',
        getBudget: () => 'Budget',
        getBudgetPlaceholder: () => 'Select budget',
        getBudget1: () => '$1',
        getBudget2: () => '$2',
        getBudget3: () => '$3',
        getDescription: () => 'Desc',
        getDescriptionPlaceholder: () => 'Describe',
        getSubmit: () => 'Send',
        getSuccessMessage: () => 'Success',
        getContactEmail: () => 'Contact:',
        getFooterText: () => 'Footer',
      };

      ContentStrategyFactory.registerStrategy('en', customStrategy);
      const strategy = ContentStrategyFactory.getContactContent('en');
      expect(strategy.getTitle()).toBe('Custom Title');

      // Restore original
      ContentStrategyFactory.registerStrategy('en', new EnglishContactContent());
    });
  });
});
