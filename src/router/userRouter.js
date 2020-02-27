import { Router } from 'express';
const router = Router();

function fetchUsers(req, res) {
  let users = ['one', 'two', 'three'];
  res.send(users);
}
router.get('/', fetchUsers);
export default router;
