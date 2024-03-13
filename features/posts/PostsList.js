import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./Time";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="font-oswald bg-zinc-900">
            <section className="max-w-screen-xl mx-auto py-16 px-4 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="font-oswald mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Recently Watched Films:</h2>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {orderedPosts.map(post => (
                        <motion.article
                            key={post.id}
                            className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 overflow-hidden" // Added overflow-hidden class here
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}>
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="text-sm"><TimeAgo timestamp={post.date} /></span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h2>
                            <p className="mb-5 font-light text-gray-700 dark:text-gray-400">{post.content}</p>
                            <div className="flex justify-between items-center">
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PostsList;