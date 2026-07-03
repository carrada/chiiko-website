// Builder Pattern for constructing SEO Schema objects
// Follows Open/Closed Principle - can extend without modifying
import { Validator } from "./validators";

interface SchemaObject {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export class OrganizationSchemaBuilder {
  private schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Organization"
  };

  setName(name: string): this {
    Validator.requireNonEmptyString(name, "Organization name");
    this.schema.name = name;
    return this;
  }

  setUrl(url: string): this {
    Validator.requireValidUrl(url, "Organization URL");
    this.schema.url = url;
    return this;
  }

  setLogo(logoUrl: string): this {
    Validator.requireValidUrl(logoUrl, "Logo URL");
    this.schema.logo = logoUrl;
    return this;
  }

  setDescription(description: string): this {
    Validator.requireNonEmptyString(description, "Description");
    this.schema.description = description;
    return this;
  }

  addSocialProfile(url: string): this {
    Validator.requireValidUrl(url, "Social profile URL");
    
    if (!this.schema.sameAs) {
      this.schema.sameAs = [];
    }
    this.schema.sameAs.push(url);
    return this;
  }

  setContactPoint(email: string, phone: string, languages: string[]): this {
    Validator.requireValidEmail(email, "Contact email");
    Validator.requireNonEmptyString(phone, "Contact phone");
    Validator.requireNonEmptyArray(languages, "Available languages");
    
    this.schema.contactPoint = {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email,
      telephone: phone,
      availableLanguage: languages
    };
    return this;
  }

  setAddress(streetAddress: string, addressRegion: string, addressCountry: string): this {
    Validator.requireNonEmptyString(streetAddress, "Street address");
    Validator.requireNonEmptyString(addressRegion, "Address region");
    Validator.requireNonEmptyString(addressCountry, "Address country");
    
    this.schema.address = {
      "@type": "PostalAddress",
      streetAddress,
      addressRegion,
      addressCountry
    };
    return this;
  }

  setGeo(latitude: number, longitude: number): this {
    this.schema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
    return this;
  }

  build(): SchemaObject {
    // Validate required fields before building (Postcondition)
    Validator.require(!!this.schema.name, "Organization name is required before building");
    Validator.require(!!this.schema.url, "Organization URL is required before building");
    
    return { ...this.schema };
  }
}

export class LocalBusinessSchemaBuilder {
  private schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness"
  };

  setName(name: string): this {
    this.schema.name = name;
    return this;
  }

  setUrl(url: string): this {
    this.schema.url = url;
    return this;
  }

  setImage(imageUrl: string): this {
    this.schema.image = imageUrl;
    return this;
  }

  setDescription(description: string): this {
    this.schema.description = description;
    return this;
  }

  setPriceRange(priceRange: string): this {
    this.schema.priceRange = priceRange;
    return this;
  }

  setAreaServed(countryCode: string, countryName: string): this {
    this.schema.areaServed = {
      "@type": "Country",
      name: countryName,
      identifier: countryCode
    };
    return this;
  }

  setAddress(streetAddress: string, addressRegion: string, addressCountry: string): this {
    this.schema.address = {
      "@type": "PostalAddress",
      streetAddress,
      addressRegion,
      addressCountry,
    };
    return this;
  }

  setGeo(latitude: number, longitude: number): this {
    this.schema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
    return this;
  }

  addSocialProfile(url: string): this {
    if (!this.schema.sameAs) {
      this.schema.sameAs = [];
    }
    this.schema.sameAs.push(url);
    return this;
  }

  build(): SchemaObject {
    return { ...this.schema };
  }
}

export class BreadcrumbSchemaBuilder {
  private breadcrumbs: Array<{ name: string; url: string }> = [];

  addBreadcrumb(name: string, url: string): this {
    // Defensive programming: validate inputs (Preconditions)
    Validator.requireNonEmptyString(name, "Breadcrumb name");
    Validator.requireNonEmptyString(url, "Breadcrumb URL");
    
    this.breadcrumbs.push({ name, url });
    return this;
  }

  build(): SchemaObject {
    // Precondition: Must have at least one breadcrumb
    Validator.requireNonEmptyArray(this.breadcrumbs, "Breadcrumb list");

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: this.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }
}

export class FAQPageSchemaBuilder {
  private questions: Array<{ question: string; answer: string }> = [];

  addQuestion(question: string, answer: string): this {
    Validator.requireNonEmptyString(question, "FAQ question");
    Validator.requireNonEmptyString(answer, "FAQ answer");
    this.questions.push({ question, answer });
    return this;
  }

  build(): SchemaObject {
    Validator.requireNonEmptyArray(this.questions, "FAQ questions list");

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: this.questions.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    };
  }
}
