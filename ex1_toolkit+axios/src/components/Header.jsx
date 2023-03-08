import styled from "styled-components";

const Header = ()=>{
  return(
  <Nav className='nav'>
    <div className='nav_contain'>
      <p className='nav_title_L'>MY TO DO LIST</p>
      <p className='nav_title_R'>REACT</p>
    </div>
  </Nav>
  )
};

const Nav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffec99;
  display: flex;
  align-items: center;  
  .nav_contain{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 24px;
    color: #f59f00;
    text-shadow: 1px 1px 2px lightgray;
}
`
export default Header;