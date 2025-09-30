import axios from "axios";
import type { login, Usuario } from "../helper/Types";

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
           
            localStorage.setItem('user', response.data.token);

            return 'ok';

        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    static async register(data: Usuario): Promise<string | undefined> {
        console.log('Body:', data);
        try {
            const response = await axios.post(
                'https://apinoticia.onrender.com/api/auth/registro',
                data
            );

            localStorage.setItem('user', response.data.token);

            return 'ok';

        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}