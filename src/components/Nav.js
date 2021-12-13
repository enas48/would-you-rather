import React from 'react'
import { Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

export default function NavBar () {
  return (
<Nav variant="tabs" defaultActiveKey="/" as="ul">
  <Nav.Item >
    <Nav.Link as={Link} to="/"> Home</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link as={Link}  to='/add'>New Question</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link as={Link} to='/leaderboard' >Leader Board</Nav.Link>
  </Nav.Item>
</Nav>

  )
} 
  