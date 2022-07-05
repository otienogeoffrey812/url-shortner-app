import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import styles from './LinkInput.module.css';
import axios from "axios";
import {isValidURL} from "../../helpers/Functions";

interface LinkInputProps {
  setShortLink: React.Dispatch<React.SetStateAction<string>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const LinkInput: React.FC<LinkInputProps> = ({setShortLink, setErrorMessage}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [longLink, setLongLink] = useState<string>("");

  const handleShorten = async () => {
    setErrorMessage("")

    if (isValidURL(longLink.trim())) {
      setLoading(true);
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/shrink`, {
          link: longLink.trim()
        });

        setShortLink(response.data.code)
      } catch (error) {
        console.error("Error shortening link: ", error);
      } finally {
        setLoading(false);
      }
    }else{
      console.log("Invalid URL: ")
      setErrorMessage("Invalid URL")
    }
  };

  return (
    <Container className={styles.container}>
      <Grid container spacing={0} className={styles.grid}>
        <Grid item xs={10} sm={10} md={10} className={styles.grid}>
          <input
            placeholder="Paste your link..."
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
            className={styles.input}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} className={styles.grid}>
          <Button
            onClick={handleShorten}
            disabled={loading}
            className={styles.button}
          >
            {loading ? '...' : 'Shrink'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LinkInput;
