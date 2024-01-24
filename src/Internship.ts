import { faker } from "@faker-js/faker";

export class Internship {
    businessName: string;
    location: { lat: number; lon: number };
  
    constructor(businessName: string, location: { lat: number; lon: number }) {
        this.businessName = businessName;
        this.location = location;
    }

    makeNewInternship(): Internship {
        const businessName = faker.company.name();
        const lat = faker.location.latitude({ max: 49, min: 24 });
        const lon = faker.location.longitude({ max: -66, min: -125});

        return new Internship(businessName, {lat, lon});
    }
  }