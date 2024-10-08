import { Children, forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextArea(
    { className = "", isFocused = false, children, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm resize-none " +
                className
            }
            ref={input}
        >
            {children}
        </textarea>
    );
});
