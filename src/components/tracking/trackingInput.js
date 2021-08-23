import React, { useState } from "react";
import styled from "styled-components";
import TrackingData from "./trackingData";

export default function TrackingInput({ accessToken }) {
  const baseURL = "https://tracking.foreverprogrammer.com";
  const [data, setData] = useState([]);
  const [resi, setResi] = useState("");

  const SearchHandler = (event) => {
    event.preventDefault();
    async function fetchData() {
      const request = await fetch(baseURL + "/api/check_resi", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          Authorization: "Bearer " + accessToken,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          no_resi: resi,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });

      return request;
    }

    fetchData();
  };

  return (
    <Container>
      <form onSubmit={SearchHandler}>
        <InputResi
          onChange={({ target }) => setResi(target.value)}
          value={resi}
          type="string"
          placeholder="Input Resi"
        />
        <SearchResi type="submit">Search</SearchResi>
        {!data.success ? (
          <Message>Masukan Nomor Resi</Message>
        ) : data.success === true && data.data.length === 0 ? (
          <Message>{data.message}</Message>
        ) : (
          <TrackingData data={data} />
        )}
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  form {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;
const InputResi = styled.input`
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 5px;
  border: 3px solid #f9f9f9;
  color: gray;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  &::placeholder {
    color: #efefef;
    opacity: 1; /* Firefox */
  }
`;

const SearchResi = styled.button`
  padding: 10.8px 10px;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 30px;
  color: white;
  font-size: 12px;
  background-color: #005792;
  border-radius: 10px;
  margin-left: -10px;
  word-spacing: 1.5px;
  border: 3px solid #f9f9f9;
`;

const Message = styled.p`
  font-size: 11px;
  border-radius: 5px;
  text-align: center;
  margin-top: 30px;
  border: 3px #d83a56 solid;
  font-weight: 600;
  padding: 7px;
  color: white;
  background-color: #ff616d;
  grid-column: 1 / 3;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;
