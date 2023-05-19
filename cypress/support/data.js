import { UserData } from "./data/userData";

class Data {
    constructor() {
        this.UserData = new UserData()
    }
}

export const data = new Data()