import React from "react";
import styled from "styled-components";
export default function Download({ plString }) {
  return (
    <Container>
      <a
        href={`https://tracking.foreverprogrammer.com/download/packing_list/${plString}`}
        target="_blank"
        rel="noreferrer"
      >
        Download
      </a>
    </Container>
  );
}
const Container = styled.div``;
