import { Router } from 'express';
import PostController from '../controllers/post.controller';

const router = Router();

const postController = new PostController();

router.get('/search', postController.search);
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.post('/:id', postController.update);
router.delete('/:id', postController.delete);

export default router;