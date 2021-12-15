import React from 'react'
import { Card, Form, Button} from 'semantic-ui-react'

export default function NewQuestion() {
  return (
   <Card className="m-auto">
    <Card.Content  textAlign='center'>
      <Card.Header>Create New Question</Card.Header>
      <Card.Description>
      <span>Complete the question:</span>
      <h4>Would you rather ...</h4>
  <Form>
    <Form.Field>
      <input placeholder='Enter Option One Text Here' />
    </Form.Field>
    <p style={{color: '#e03997'}}>OR</p>
    <Form.Field>
      <input placeholder='Enter Option Two Text Here' />
    </Form.Field>
    <Button basic color='pink' type='submit' fluid>Submit</Button>
  </Form>
   
      </Card.Description>
    </Card.Content>
  </Card>
  )
} 
  