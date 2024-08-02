import styled from 'styled-components';

export const MovieCardContainer = styled.li`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: 0.6s;
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0.5;
    }

    div {
      > div {
        opacity: 1;
        height: 100px;
      }
    }
  }
`;

export const MovieInfos = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(#00000000, #000000 90%);
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px;

  p {
    color: #f1f5f9;
    font-size: 12px;
  }
`;

export const HiddenContent = styled.div`
  margin-top: 8px;
  height: 0px;
  opacity: 0;
  transition: 0.6s;
`;

export const Button = styled.button`
  background: #6046ff;
  padding: 6px 8px;
  border-radius: 6px;
  margin-top: 10px;
  border: none;
  color: #ffffff;
  width: 100%;
`;
