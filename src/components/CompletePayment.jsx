import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../images/yoga6.jpg'
const CompletePayment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const name = searchParams.get('name') || '';
  const age = searchParams.get('age') || '';
  const batch = searchParams.get('batch') || '';
  return (
    <StyledContainer>
    <ReceiptContainer>
      <ReceiptHeader>
        <h2>Yoga Class Payment Receipt</h2>
        <p>Thank you for your payment!</p>
      </ReceiptHeader>

      <ReceiptDetails>
        <Item>
          <span>Date:</span>
          <span>December 18, 2023</span>
        </Item>
        <Item>
          <span>Invoice Number:</span>
          <span>#123456</span>
        </Item>
        <Item>
          <span>Customer Name:</span>
          <span>{name}</span>
        </Item>
        <Item>
          <span>Age:</span>
          <span>{age}</span>
        </Item>
        <Item>
          <span>Batch:</span>
          <span>{batch}</span>
        </Item>
        <Item>
          <span>Amount Paid:</span>
          <span>Rs 500.00</span>
        </Item>
      </ReceiptDetails>
      <Total>
        <span>Total Paid:</span>
        <span>Rs 500.00</span>
      </Total>
    </ReceiptContainer>
    </StyledContainer>

  );
  }

  const ReceiptContainer = styled.div`
  background-color:#fff;
  border: 6px solid #6c757d;
  border-radius : 6px;
  padding: 50px;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 30px;
  color:black;
`;

const ReceiptHeader = styled.div`
  text-align: center;
`;

const ReceiptDetails = styled.div`
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Total = styled.div`
  text-align:center;
  font-weight: bold;
  margin-top: 10px;
`;

const StyledContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;
export default CompletePayment;
