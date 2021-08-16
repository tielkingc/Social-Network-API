const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router  
    .route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;