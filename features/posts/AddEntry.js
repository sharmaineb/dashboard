import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";

const AddEntryForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content));
            setTitle('');
            setContent('');
        }
    };

    const canSave = title && content;

    return (
        <div className="font-oswald bg-zinc-900">
            <section className="max-w-2xl mx-auto bg-zinc-200 p-6 rounded-lg shadow-md">
            {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">Still figuring out whether I need this h2 or not, lmao.</h2>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Entry</h2> */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="postTitle" className="block text-gray-800 mb-1">Movie Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 bg-neutral-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="postContent" className="block text-gray-800 mb-1">Entry:</label>
                        <textarea
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                            className="border border-gray-300 rounded px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500 bg-neutral-100"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                        className={`bg-cyan-200 text-black px-4 py-2 rounded ${canSave ? 'hover:bg-pink-300 cursor-pointer' : 'cursor-not-allowed'}`}
                    >
                        Add Entry
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddEntryForm;