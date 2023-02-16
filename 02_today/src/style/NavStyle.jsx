import styled from "styled-components";

export const MainTabBox = styled.div`
  ${({ theme }) => theme.common.flexBetween}
  justify-content: space-between;
`;
export const Tab = styled.p`
  width: 200px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.selectButton ? "2px solid #FFA000" : null};
  color: ${(props) => (props.selectButton ? "#FFA000" : "#aaaaaa")};
  font-weight: 700;
  font-size: 20px;
  p:last-child {
    margin-right: 0;
  }
  p:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const MainNavBox = styled.div`
  height: 60px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.orange};
`;
