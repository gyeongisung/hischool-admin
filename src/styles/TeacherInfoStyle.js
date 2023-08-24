import styled from "@emotion/styled";

export const MypageDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 60px 370px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .mypage-top {
      display: flex;
      justify-content: space-between;
      .user-info {
        width: 100%;
        height: 100%;
        .user-info-wrap {
          display: flex;
          gap: 50px;
          .picture-img {
            width: 250px;
            height: 300px;
            border: 1px solid gray;
            background: gray;
            margin-bottom: 10px;
            img {
              width: 250px;
              height: 300px;
            }
          }
        }
      }
    }
  }
`;

export const TcMyPageUserInfo = styled.ul`
  width: 100%;
  font-size: 21px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    label {
      display: inline-block;
      width: 120px;
    }
    input {
      width: 21vw;
      height: 35px;
      border: 1px solid #bbb;
      border-radius: 3px;
      padding-left: 10px;
      margin-right: 5px;
      font-size: 18px;
    }
    .err-message {
      vertical-align: middle;
      font-size: 14px;
      color: crimson;
    }
    :nth-of-type(5) {
      align-items: start;
      .address-wrap {
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        gap: 10px;
        > div {
          display: flex;
          align-items: center;
        }
      }
    }
    :nth-of-type(6) {
      display: flex;
      align-items: start;
      > div {
        > div {
          margin-top: 10px;
          input {
            width: 10.35vw;
          }
        }
      }
    }
  }
`;

export const TcButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 80px;
    height: 35px;
    font-size: 15px;
    color: #fff;
    border: none;
    border-radius: 3px;
    background: #64ccc5;
    cursor: pointer;
  }
  div {
    width: 100%;
    text-align: end;
    button {
      :first-of-type {
        margin-right: 10px;
        background: #176b87;
        border: none;
        color: #fff;
      }
      :last-of-type {
        border: 1px solid #ccc;
        color: #000;
        background: #fff;
      }
    }
  }
`;
