import { Request, Response } from 'express';
import Contact from '../models/Contact';

export const listContacts = async (req: Request & any, res: Response) => {
  const owner = req.user?.id;
  const contacts = await Contact.find({ owner }).sort({ createdAt: -1 });
  res.json(contacts);
};

export const createContact = async (req: Request & any, res: Response) => {
  const owner = req.user?.id;
  const { name, email, phone } = req.body;
  const contact = new Contact({ name, email, phone, owner });
  await contact.save();
  res.status(201).json(contact);
};