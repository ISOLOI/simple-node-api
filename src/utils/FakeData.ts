import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: 'name',
            email: 'email@gmail.com',
        })

        await this.createUserService.execute({
            id: uuid(),
            name: 'name2',
            email: 'email2@gmail.com',
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'name',
            email: 'email@gmail.com',
        })

        return user
    }
}

export { FakeData }
