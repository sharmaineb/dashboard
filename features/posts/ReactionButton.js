import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    thumbsDown: '👎',
    wow: '🤯',
    heart: '❤️',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const handleReactionClick = (name) => {
        dispatch(reactionAdded({ postId: post.id, reaction: name }));
    };

    return (
        <div className="flex space-x-2">
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <motion.button
                    key={name}
                    type="button"
                    className="reactionButton inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={() => handleReactionClick(name)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}>
                    <span className="mr-1">{emoji}</span> 
                    <span>{post.reactions[name]}</span>
                </motion.button>
            ))}
        </div>
    );
};

export default ReactionButtons;