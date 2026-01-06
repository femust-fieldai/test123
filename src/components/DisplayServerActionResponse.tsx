type Props = {
    result: {
        data?:{
            message?:string,
        },
serverError?:string,
validationErrors?: Record<string, string[] | undefined>,
    }
}

import React from "react";

type MessageBoxProps = {
    type: "success" | "error";
    content: React.ReactNode;
};

const MessageBox: React.FC<MessageBoxProps> = ({ type, content }) => (
    <div
        className={
            `bg-accent px-4 py-2 my-2 rounded-lg` +
            (type === "error" ? " text-red-500" : " text-green-700")
        }
    >
        {content}
    </div>
);

    export function DisplayServerActionResponse({ result }: Props) {
        const { data, serverError, validationErrors } = result;
        return (
            <div>
                {data?.message && (
                    <MessageBox type="success" content={`Success: ${data.message}`} />
                )}
                {serverError && (
                    <MessageBox type="error" content={`Error: ${serverError}`} />
                )}
                {validationErrors && Object.keys(validationErrors).length > 0 && (
                    <MessageBox
                        type="error"
                        content={
                            <ul>
                                {Object.entries(validationErrors).map(([field, errors]) =>
                                    errors?.map((msg, idx) => (
                                        <li key={`${field}-${idx}`}>
                                            {field}: {msg}
                                        </li>
                                    ))
                                )}
                            </ul>
                        }
                    />
                )}
            </div>
        );
    }