import type About from "../models/About";
import { BaseRepository } from "./BaseRepository"

export default class API extends BaseRepository {
    constructor() {
        super('https://localhost:8080/v1/portfolio', {
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
        });
    }

    async getAbout(): Promise<About> {
        return this.get<About>('/')
    }

}