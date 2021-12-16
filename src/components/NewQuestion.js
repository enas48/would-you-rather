import React from 'react'
import { Card, Form, Button} from 'semantic-ui-react'

export default function NewQuestion() {
  return (
    <div className="col-md-7 m-auto">
   <Card fluid>
    <Card.Content  textAlign='center' style={{background:'rgba(0,0,0,.05)'}}>
      <Card.Header>Create New Question</Card.Header>
      </Card.Content>
      <Card.Content  >
      <Card.Description>
      <span><b>Complete the question:</b></span>
      <h4>Would you rather ...</h4>
  <Form>
    <Form.Field>
      <input placeholder='Enter Option One Text Here' />
    </Form.Field>
    <p className='line-through' ><span>OR</span></p>
    <Form.Field>
      <input placeholder='Enter Option Two Text Here' />
    </Form.Field>
    <Button basic color='pink' type='submit' fluid>Submit</Button>
  </Form>
   
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
  )
} 
  