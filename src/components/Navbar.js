import { Link } from 'react-router-dom'
import logo from '../cosmetics.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ChatBubble from '@material-ui/icons/ChatBubbleTwoTone'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import React, { Component } from 'react'
import ModalComponent from './Cart/ModalComponent'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
    }
  }

  openModal = () => {
    console.log('Opening Modal')
    this.setState({ showModal: true })
  }

  closeModal = () => {
    console.log('Closing Modal')
    this.setState({ showModal: false })
  }
  render() {
    const { showModal } = this.state
    return (
      <>
        <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
          <Link to='/'>
            <img
              src={logo}
              alt='store'
              className='navbar-brand'
              height='50px'
            />
          </Link>
          <ul className='navbar-nav align-items center'>
            <li className='navbar-nav align-items-center'>
              <Link to='/' className='nav-link'>
                Products
              </Link>
            </li>
          </ul>

          <ButtonContainer
            className='mx-4'
            onClick={this.openModal}
            variant='outlined'
          >
            <span className='mr-2'>
              <ChatBubble />
            </span>
            Prompt Recommendation
          </ButtonContainer>

          <Link to='/cart' className='ml-auto'>
            <ButtonContainer variant='outlined'>
              <span className='mr-2'>
                <ShoppingCartIcon />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
        <ModalComponent show={showModal} closeModal={this.closeModal} />
      </>
    )
  }
}

export default Navbar

const NavWrapper = styled.nav`
  background: var(--mainPink);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: captilize !important;
  }
`
