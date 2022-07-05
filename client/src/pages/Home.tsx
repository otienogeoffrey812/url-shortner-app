import React, { useState } from 'react';
import LinkInput from '../components/LinkInput/LinkInput';
import LinkOutput from '../components/LinkOutput/LinkOutput';
import Title from '../components/Title/Title';
import Error from '../components/Error/Error';

const Home: React.FC = () => {
  const [shortLink, setShortLink] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <>
      <Title />
      <LinkInput setShortLink={setShortLink} setErrorMessage={setErrorMessage}/>
      { shortLink.length > 0 && errorMessage.length === 0 ? <LinkOutput shortLink={shortLink} /> : "" }
      { errorMessage.length > 0 ? <Error errorMessage={errorMessage} /> : "" }
    </>
  );
};

export default Home;
