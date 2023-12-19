import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import styled from 'styled-components'
import backgroundImage from '../images/yoga4.jpg'
const UserForm = () => {
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        age: '',
        selectedBatch: '',
      });

      const handleChange = (e) => {
        setFormData({ 
          ...formData, [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(FormData));
        setIsSubmit(true);

      const response = await fetch('https://backend-losu.onrender.com/api/submitUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(response)
      };
      
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(JSON.stringify(formData));
        }
      }, [formErrors]);

      const validate = () => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formData.name) {
          errors.name = "Name is required!";
        }
        const ageValue = parseInt(formData.age, 10);
        if (isNaN(ageValue) || ageValue <= 0) {
          errors.age = "age is required!";
        }else if(ageValue < 18 || ageValue > 65){
          errors.age = "Your age should be greater than 18 or less than 65";
        }
        if (formData.selectedBatch.trim() === '') {
          errors.selectedBatch = "Please select batch as per your convenience!";
        }
        return errors;
      };
    return (
      <>
      <StyledContainer>
      
      <FormContainer>
      <FormTitle>Yoga Class Admission Form</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
        <p>{formErrors.name}</p>

        <FormGroup>
            <Label htmlFor="age">Age:</Label>
            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </FormGroup>
        <p>{formErrors.age}</p>


        <Label htmlFor="age">Batch:</Label>
        <StyledSelect name="selectedBatch" value={formData.selectedBatch} onChange={handleChange}>
        <Option value="" disabled selected>
          Select an option
        </Option>
        <Option value="6-7AM">6-7AM</Option>
        <Option value="7-8AM">7-8AM</Option>
        <Option value="8-9AM">8-9AM</Option>
        <Option value="5-6PM">5-6PM</Option>
      </StyledSelect>
        <br />
        <p>{formErrors.selectedBatch}</p>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      <br />
      <div className='pay'>
        <StyledNavLink to={{
          pathname: "/receipt-details",
          search: `?name=${formData.name}&age=${formData.age}&batch=${formData.selectedBatch}`,
        }}>Payment</StyledNavLink>
      </div>
      </FormContainer>
      </StyledContainer>
      </>
    );
};

const FormContainer = styled.div`
  background-color:#fff;
  color:black;
  max-width: 400px;
  margin: 0 auto;
  margin-top:40px;
  padding: 20px;
  border: 5px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.7);
  }
`;

const Option = styled.option`
  padding: 10px;
`;

const StyledContainer = styled.div`
  height: 100vh;
  width:100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;
export default UserForm;
