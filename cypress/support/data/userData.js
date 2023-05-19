import { faker } from '@faker-js/faker';

export class UserData {
    constructor() {
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.word = faker.word.adverb()
    }
}