import {
    Request,
    Response
} from 'express';
import {
    UpdateUserService
} from '../services/UpdateUserService';

class UpdateUserController { //PUT usuário
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();

        const {
            id,
            name,
            email
        } = request.body

        if (id === undefined) {
            return response.status(400).json({
                msg: 'Enter ID'
            })
        }

        if (name === undefined) {
            return response.status(400).json({
                msg: 'Enter name'
            })
        }

        await updateUserService.execute({
            id,
            name,
            email
        })

        return response.status(204).json()
    }
}

export {
    UpdateUserController
}