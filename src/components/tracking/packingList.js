import React from "react";
import styled from "styled-components";
import Download from "./download";
export default function PackingList({ pldata }) {
  return (
    <Container>
      {pldata?.map((pl, index) => (
        <Wrap key={index}>
          <p>{pl.packing_list_number}</p>
          <Download plString={pl.document_upload}>Download</Download>
        </Wrap>
      ))}
    </Container>
  );
}

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 8px;
    background-color: #e8f6ef;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: gray;
    text-decoration: none;

    &:hover {
      background-color: gray;
      color: #e8f6ef;
    }
  }
`;
