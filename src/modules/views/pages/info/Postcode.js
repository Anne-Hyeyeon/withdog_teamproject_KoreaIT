import React from 'react';
import DaumPostcode from "react-daum-postcode";
import {AccordionSummary, Accordion, AccordionDetails } from '@mui/material';

const Post = (props) => {
  //const address = props.address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          aria-controls="panelbh-content"
          id="panel1a-header"
          variant="text"
        >🔍︎ 주소 검색
        </AccordionSummary>
        <AccordionDetails>
          <DaumPostcode
          onComplete={onCompletePost}
        />
        </AccordionDetails>
      </Accordion>     
    </>
  );
};

export default Post;