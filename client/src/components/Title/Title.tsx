import React from "react";
import { Container } from "@mui/material";
import styles from './Title.module.css';

const Title = () => {
    return (
        <Container className={styles.container}>
            <h1 className={styles.title}>tiny.to</h1>
            <p className={styles.subtitle}>
                Saving you the hustle of handling long urls
            </p>
        </Container>
    );
};

export default Title;
