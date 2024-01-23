import { faker } from "@faker-js/faker";

export class Student {
    firstName: string;
    lastName:string;
    location: { lat: number; lon: number };

    constructor(firstName: string, lastName: string, location: { lat: number; lon: number }){
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

    makeNewStudent(): Student {
        const fn = faker.person.firstName();
        const ln = faker.person.lastName();
        const lat = faker.location.latitude();
        const lon = faker.location.longitude();

        return new Student(fn,ln, {lat, lon});
    }
}
