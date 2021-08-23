import React from "react";
import styled from "styled-components";

export default function TrackingHistory({ historyTrack }) {
  const sortHistory = historyTrack?.sort((a, b) => {
    return b.status - a.status;
  });

  return (
    <>
      {sortHistory ? (
        <Container>
          {sortHistory?.map((status) => (
            <div key={status.id}>
              <StatusWrapper>
                <Image src={`/assets/gambar${status.status}.svg`} alt="svg" />
                <Description>{status.deskripsi}</Description>
                <Time>{status.updated_at}</Time>
              </StatusWrapper>
              <Divider />
            </div>
          ))}
          <Image src={`/assets/gambar0.svg`} alt="svg" />
          <Description>
            <p>Pengiriman diproses</p>
          </Description>
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  margin: 20px 0;
  grid-gap: 20px;
  text-align: center;
  align-items: center;
  padding-bottom: 20px;
  border: 3px #f9f9f9 solid;
  border-radius: 20px;
`;

const StatusWrapper = styled.div`
  padding: 10px;
`;

const Divider = styled.div`
  height: 70px;
  width: 4px;
  background-color: #005792;
  margin: auto;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 110px;
  height: 80px;
  margin: 5px;
`;

const Time = styled.p`
  font-size: 13px;
`;
const Description = styled.div`
  font-size: 13px;
  margin: 10px;
  p {
    width: 50%;
    margin: auto;
    font-size: 14px;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
  }
`;
