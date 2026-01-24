/**
 * Unit Tests for SEO Builders
 * Tests Builder Pattern implementation with defensive programming
 */

import { OrganizationSchemaBuilder, BreadcrumbSchemaBuilder } from '../seo-builders';
import { IllegalArgumentException } from '../exceptions';

describe('OrganizationSchemaBuilder', () => {
  // Independent: Each test creates its own builder
  it('should build a valid organization schema', () => {
    const schema = new OrganizationSchemaBuilder()
      .setName('Test Company')
      .setUrl('https://example.com')
      .setDescription('Test description')
      .build();

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Organization');
    expect(schema.name).toBe('Test Company');
    expect(schema.url).toBe('https://example.com');
    expect(schema.description).toBe('Test description');
  });

  // Repeatable: Always produces same result
  it('should build schema with social profiles', () => {
    const schema = new OrganizationSchemaBuilder()
      .setName('Test Company')
      .setUrl('https://example.com')
      .addSocialProfile('https://twitter.com/test')
      .addSocialProfile('https://linkedin.com/test')
      .build();

    expect(schema.sameAs).toHaveLength(2);
    expect(schema.sameAs).toContain('https://twitter.com/test');
  });

  it('should throw when name is empty', () => {
    expect(() => {
      new OrganizationSchemaBuilder().setName('');
    }).toThrow(IllegalArgumentException);
  });

  it('should throw when URL is invalid', () => {
    expect(() => {
      new OrganizationSchemaBuilder().setUrl('not-a-url');
    }).toThrow(IllegalArgumentException);
  });

  it('should throw when building without required fields', () => {
    expect(() => {
      new OrganizationSchemaBuilder()
        .setName('Test Company')
        // Missing URL
        .build();
    }).toThrow('Organization URL is required before building');
  });

  it('should set contact point with valid data', () => {
    const schema = new OrganizationSchemaBuilder()
      .setName('Test Company')
      .setUrl('https://example.com')
      .setContactPoint('test@example.com', '+1-234-567', ['en', 'es'])
      .build();

    expect(schema.contactPoint).toBeDefined();
    expect(schema.contactPoint.email).toBe('test@example.com');
    expect(schema.contactPoint.availableLanguage).toEqual(['en', 'es']);
  });

  it('should throw when contact email is invalid', () => {
    expect(() => {
      new OrganizationSchemaBuilder()
        .setContactPoint('invalid-email', '+1-234-567', ['en']);
    }).toThrow('Contact email must be a valid email address');
  });
});

describe('BreadcrumbSchemaBuilder', () => {
  it('should build a valid breadcrumb schema', () => {
    const schema = new BreadcrumbSchemaBuilder()
      .addBreadcrumb('Home', '/')
      .addBreadcrumb('About', '/about')
      .build();

    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[1].position).toBe(2);
  });

  it('should throw when breadcrumb name is empty', () => {
    expect(() => {
      new BreadcrumbSchemaBuilder().addBreadcrumb('', '/test');
    }).toThrow('Breadcrumb name cannot be empty');
  });

  it('should throw when breadcrumb URL is empty', () => {
    expect(() => {
      new BreadcrumbSchemaBuilder().addBreadcrumb('Test', '');
    }).toThrow('Breadcrumb URL cannot be empty');
  });

  it('should throw when building without breadcrumbs', () => {
    expect(() => {
      new BreadcrumbSchemaBuilder().build();
    }).toThrow('Breadcrumb list cannot be empty');
  });

  // Self-validating: Clear pass/fail assertion
  it('should maintain correct position order', () => {
    const schema = new BreadcrumbSchemaBuilder()
      .addBreadcrumb('First', '/first')
      .addBreadcrumb('Second', '/second')
      .addBreadcrumb('Third', '/third')
      .build();

    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[1].position).toBe(2);
    expect(schema.itemListElement[2].position).toBe(3);
  });
});
