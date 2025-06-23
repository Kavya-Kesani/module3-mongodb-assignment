// src/routes/userRoutes.ts
import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';

const router = express.Router();

// Register User
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json({
      message: 'Registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
});

// Get User by ID
router.get('/user/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
});

// Get All Users
router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

export default router;
