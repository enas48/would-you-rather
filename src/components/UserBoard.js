import React from 'react'
import { Card, Feed,Segment,Label,Header} from 'semantic-ui-react'


function UserBoard(props) {
        const {user}=props
        const answerdQustions=Object.keys(user.answers).length
        const createdQuestions=user.questions.length
        const total=answerdQustions + createdQuestions
       
  return (
    <Card className="user-board" fluid>
      <Label corner="left" icon="trophy" />
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image={user.avatarURL} />
            <Feed.Content>
              <Feed.Summary>
                <Card.Header as="h3">{user.name}</Card.Header>
                <Card.Description>
                  <span>Answered questions</span>
                  <span>{answerdQustions}</span>
                </Card.Description>
                <Card.Description>
                  <span>Created questions</span>
                  <span>{createdQuestions}</span>
                </Card.Description>
              </Feed.Summary>
            </Feed.Content>

            <Feed.Content className="feed-summary">
              <Feed.Summary>
                <Header as="h4" textAlign="center" attached="top">
                  Score
                </Header>
                <Segment textAlign="center" attached>
                  <Label circular color="pink" size="big">
                    {total}
                  </Label>
                </Segment>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );

} 
  
  export default UserBoard