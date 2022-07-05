import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import styles from './LinkOutput.module.css';
import { Check, ContentCopy as CopyIcon } from "@mui/icons-material";

interface LinkOutputProps {
    shortLink: string;
}

const LinkOutput: React.FC<LinkOutputProps> = ({ shortLink }) => {
    const [isCopied, setIsCopied] = useState<Boolean>(false)
    const fullLink = `${process.env.REACT_APP_BACKEND_URL}/${shortLink}`;
    const handleCopy = async () =>{
        try {
            await navigator.clipboard.writeText(fullLink);
            setIsCopied(true);
          } catch (error) {
            console.error('Failed to copy: ', error);
          }
          setTimeout(()=>{
            setIsCopied(false);
          }, 2000)
    }

    return (
        <Container className={styles.container}  onClick={handleCopy}>
            <Grid container spacing={0} className={styles.grid}>
                <Grid item xs={11} sm={11} md={11} className={`${styles.grid} ${styles.text}`}>
                    {isCopied ? 'Copied!' : fullLink}
                </Grid>
                <Grid item xs={1} sm={1} md={1} className={styles.grid}>
                    {isCopied 
                    ? <Check className={styles.icon} />
                    : <CopyIcon className={styles.icon} />
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

export default LinkOutput;