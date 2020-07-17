const router = require('express').Router();
const { 
    addComment, 
    removeComment,
    addReply,
    removeReply 
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaID>/<commentID>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/<pizzaId>/<commentId>/<replyId>

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;