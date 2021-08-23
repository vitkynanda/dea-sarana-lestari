import React from "react";
import styled from "styled-components";
import TrackingHistory from "./trackingHistory";
import PackingList from "./packingList";

export default function TrackingData({ data }) {
  const dataTrack = data.data;

  const pl = dataTrack.packing_list;
  return (
    <>
      <Container>
        <Message>{data.message}</Message>
        {data ? (
          <WrapContent>
            <tbody>
              <Wrap>
                <Content>No. Resi</Content>
                <Content>{dataTrack?.resi}</Content>
              </Wrap>
              <Wrap>
                <Content>Origin</Content>
                <Content>{dataTrack?.origin?.origin_name}</Content>
              </Wrap>
              <Wrap>
                <Content>Address</Content>
                <Content>{dataTrack?.origin?.origin_address}</Content>
              </Wrap>
              <Wrap>
                <Content>Destination</Content>
                <Content>{dataTrack?.destination?.destination_name}</Content>
              </Wrap>
              <Wrap>
                <Content>Address</Content>
                <Content>{dataTrack?.destination?.destination_address}</Content>
              </Wrap>
              <Wrap>
                <Content>Status</Content>
                <Content>{dataTrack?.delivery_status?.info}</Content>
              </Wrap>
              <Wrap>
                <Content>Packing List</Content>
                <Content>
                  <PackingList pldata={pl} />
                </Content>
              </Wrap>
            </tbody>
          </WrapContent>
        ) : null}
        <TrackingHistory historyTrack={dataTrack?.history} />
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 10px;
  color: gray;
  border: 3px #f9f9f9 solid;
  font-weight: 600;
  grid-column: 1 / 3;
`;

const Message = styled.p`
  font-size: 12px;
  color: white;
  text-align: center;
  margin: 10px 0;
  background-color: #66de93;
  padding: 10px;
  border-radius: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const WrapContent = styled.table`
  width: 100%;
  margin-top: 20px;
  grid-gap: 2px;
  margin-bottom: 20px;
  line-height: 25px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

const Content = styled.td`
  font-size: 11px;
  border: 1px solid #ddd;
  padding: 8px;
  padding: 8px 8px;
  text-transform: uppercase;
`;

const Wrap = styled.tr`
  width: 100%;
`;
