/**
 * Unit Tests for Content Strategy Pattern
 * Tests Strategy Pattern implementation for i18n
 */

import { SpanishContactContent, EnglishContactContent } from '../ContactContentStrategy';
import { ContentStrategyFactory } from '../ContentStrategyFactory';

describe('ContactContentStrategy', () => {
  describe('SpanishContactContent', () => {
    const strategy = new SpanishContactContent();

    it('should return Spanish content', () => {
      expect(strategy.getTitle()).toBe('Comienza un proyecto pensado');
      expect(strategy.getEmail()).toBe('Email');
      expect(strategy.getSubmit()).toBe('Enviar proyecto');
    });

    it('should return Spanish budget labels', () => {
      expect(strategy.getBudget1()).toContain('MXN');
      expect(strategy.getBudget2()).toContain('MXN');
    });
  });

  describe('EnglishContactContent', () => {
    const strategy = new EnglishContactContent();

    it('should return English content', () => {
      expect(strategy.getTitle()).toBe('Start a thoughtful project');
      expect(strategy.getEmail()).toBe('Email');
      expect(strategy.getSubmit()).toBe('Submit project');
    });

    it('should return English budget labels', () => {
      expect(strategy.getBudget1()).toContain('USD');
      expect(strategy.getBudget2()).toContain('USD');
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
  });
});
