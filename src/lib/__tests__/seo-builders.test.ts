/**
 * Unit Tests for SEO Builders
 * Tests Builder Pattern implementation with defensive programming
 */

import {
  OrganizationSchemaBuilder,
  BreadcrumbSchemaBuilder,
  LocalBusinessSchemaBuilder,
  FAQPageSchemaBuilder,
} from '../seo-builders';
import { IllegalArgumentException } from '../exceptions';

describe('OrganizationSchemaBuilder', () => {
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
        .build();
    }).toThrow('Organization URL is required before building');
  });

  it('should throw when building without name', () => {
    expect(() => {
      new OrganizationSchemaBuilder()
        .setUrl('https://example.com')
        .build();
    }).toThrow('Organization name is required before building');
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

  it('should set logo with valid URL', () => {
    const schema = new OrganizationSchemaBuilder()
      .setName('Test Company')
      .setUrl('https://example.com')
      .setLogo('https://example.com/logo.png')
      .build();

    expect(schema.logo).toBe('https://example.com/logo.png');
  });

  it('should throw when logo URL is invalid', () => {
    expect(() => {
      new OrganizationSchemaBuilder().setLogo('bad-logo');
    }).toThrow(IllegalArgumentException);
  });

  it('should set address with valid data', () => {
    const schema = new OrganizationSchemaBuilder()
      .setName('Test Company')
      .setUrl('https://example.com')
      .setAddress('123 Main St', 'CA', 'US')
      .build();

    expect(schema.address).toBeDefined();
    expect(schema.address['@type']).toBe('PostalAddress');
    expect(schema.address.streetAddress).toBe('123 Main St');
    expect(schema.address.addressRegion).toBe('CA');
    expect(schema.address.addressCountry).toBe('US');
  });

  it('should throw when address fields are empty', () => {
    expect(() => {
      new OrganizationSchemaBuilder().setAddress('', 'CA', 'US');
    }).toThrow(IllegalArgumentException);
  });
});

describe('LocalBusinessSchemaBuilder', () => {
  it('should build a valid local business schema', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setName('Test Business')
      .setUrl('https://business.com')
      .build();

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('LocalBusiness');
    expect(schema.name).toBe('Test Business');
    expect(schema.url).toBe('https://business.com');
  });

  it('should set image', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setImage('https://business.com/photo.jpg')
      .build();

    expect(schema.image).toBe('https://business.com/photo.jpg');
  });

  it('should set description', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setDescription('A great business')
      .build();

    expect(schema.description).toBe('A great business');
  });

  it('should set price range', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setPriceRange('$$')
      .build();

    expect(schema.priceRange).toBe('$$');
  });

  it('should set area served', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setAreaServed('MX', 'Mexico')
      .build();

    expect(schema.areaServed).toEqual({
      '@type': 'Country',
      name: 'Mexico',
      identifier: 'MX',
    });
  });

  it('should set address', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setAddress('456 Business Ave', 'Jalisco', 'MX')
      .build();

    expect(schema.address).toEqual({
      '@type': 'PostalAddress',
      streetAddress: '456 Business Ave',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    });
  });

  it('should add social profiles', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .addSocialProfile('https://instagram.com/biz')
      .addSocialProfile('https://facebook.com/biz')
      .build();

    expect(schema.sameAs).toHaveLength(2);
    expect(schema.sameAs).toContain('https://instagram.com/biz');
    expect(schema.sameAs).toContain('https://facebook.com/biz');
  });

  it('should build with all fields set', () => {
    const schema = new LocalBusinessSchemaBuilder()
      .setName('Full Business')
      .setUrl('https://full.com')
      .setImage('https://full.com/img.jpg')
      .setDescription('Full description')
      .setPriceRange('$$$')
      .setAreaServed('US', 'United States')
      .setAddress('789 Full St', 'NY', 'US')
      .addSocialProfile('https://twitter.com/full')
      .build();

    expect(schema.name).toBe('Full Business');
    expect(schema.url).toBe('https://full.com');
    expect(schema.image).toBe('https://full.com/img.jpg');
    expect(schema.description).toBe('Full description');
    expect(schema.priceRange).toBe('$$$');
    expect(schema.areaServed.name).toBe('United States');
    expect(schema.address.streetAddress).toBe('789 Full St');
    expect(schema.sameAs).toHaveLength(1);
  });

  it('should support fluent chaining', () => {
    const builder = new LocalBusinessSchemaBuilder();
    const result = builder.setName('Chain Test');
    expect(result).toBe(builder);
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

describe('FAQPageSchemaBuilder', () => {
  it('should build a valid FAQ schema with one question', () => {
    const schema = new FAQPageSchemaBuilder()
      .addQuestion('What is Chiikö?', 'A design studio.')
      .build();

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(1);
    expect(schema.mainEntity[0]['@type']).toBe('Question');
    expect(schema.mainEntity[0].name).toBe('What is Chiikö?');
    expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe('A design studio.');
  });

  it('should build with multiple questions', () => {
    const schema = new FAQPageSchemaBuilder()
      .addQuestion('Q1?', 'A1')
      .addQuestion('Q2?', 'A2')
      .addQuestion('Q3?', 'A3')
      .build();

    expect(schema.mainEntity).toHaveLength(3);
    expect(schema.mainEntity[0].name).toBe('Q1?');
    expect(schema.mainEntity[1].name).toBe('Q2?');
    expect(schema.mainEntity[2].name).toBe('Q3?');
  });

  it('should throw when question is empty', () => {
    expect(() => {
      new FAQPageSchemaBuilder().addQuestion('', 'Answer');
    }).toThrow('FAQ question cannot be empty');
  });

  it('should throw when answer is empty', () => {
    expect(() => {
      new FAQPageSchemaBuilder().addQuestion('Question?', '');
    }).toThrow('FAQ answer cannot be empty');
  });

  it('should throw when building without questions', () => {
    expect(() => {
      new FAQPageSchemaBuilder().build();
    }).toThrow('FAQ questions list cannot be empty');
  });

  it('should support fluent chaining', () => {
    const builder = new FAQPageSchemaBuilder();
    const result = builder.addQuestion('Q?', 'A');
    expect(result).toBe(builder);
  });
});
