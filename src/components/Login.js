import React from 'react'
import {Form, Card} from 'react-bootstrap'

export default function Login() {
  return (
<Card>
<Card.Header>
  <h5 className='center'><p>Welcome to would you rather App!</p>
please sign in to continue</h5></Card.Header>
  <Card.Body>
    <img src='logo192.png'/>
  <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </Card.Body>
</Card>


  )
} 
  