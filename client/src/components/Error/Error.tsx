import React from "react";
import { Container,  } from "@mui/material";
import styles from './Error.module.css';

interface ErrorProps {
    errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
    // const [isCopied, setIsCopied] = useState<Boolean>(false)

    return (
        <Container className={styles.container}>
            Error: {errorMessage}
        </Container>
    );
}

export default Error;