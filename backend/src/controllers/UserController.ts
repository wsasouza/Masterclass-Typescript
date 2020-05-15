import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: 'Walter', email: 'wsasouza@hotmail.com'},
  {name: 'Priscila', email: 'prihsouza@hotmail.com'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Walter Souza', 
        email: 'wsasouza@hotmail.com' 
      },
      message: {
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem vindo'
      }
    });

    return res.send('Success!');
  }
};