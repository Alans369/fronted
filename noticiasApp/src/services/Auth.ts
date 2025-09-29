import axios from "axios";
import type { login } from "../helper/Types";

export class AuthService {

    constructor() {

    }

    static async login(data: login): Promise<string | undefined> {
        console.log('Body:', data);
        try {
            const response = await axios.post(
                'https://apinoticia.onrender.com/api/auth/login',
                data
            );
            console.log(response)
            localStorage.setItem('user', response.data.token);

            return 'ok';

        } catch (error) {
            console.log(error)
        }
    }
}