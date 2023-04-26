import styled from '@emotion/styled';
export const FriendList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;
export const FriendItem = styled.li`
  position: relative;
  width: 70px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Chip = styled.span`
  position: absolute;
  bottom: 85%;
  right: 85%;

  flex-direction: row;
  display: block;
  margin-bottom: 5px;

  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline === true) {
      return 'rgb(109, 199, 6);';
    }
  }};
`;
