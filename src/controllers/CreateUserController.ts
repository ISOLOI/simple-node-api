import {
    Request,
    Response
} from 'express';
import {
    v4 as uuid
} from 'uuid';
import {
    CreateUserService
} from '../services/CreateUserService';

class CreateUserController { // Post
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;
        const id = uuid();
        console.log(name);
        if (name === undefined) {
            return response.status(400).json({
                msg: 'name needed'
            })
        }

        const user = await createUserService.execute({
            id,
            name,
            email
        })

        return response.status(201).json(user)
    }
}

export {
    CreateUserController
}