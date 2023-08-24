import styled from "@emotion/styled";

const NoticeWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const NoticeInput = styled.div`
  font-size: 13px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  > div {
    input {
      border: 1px solid #bbb;
      border-radius: 3px;
      width: 200px;
      height: 24px;
      padding-left: 5px;
      margin-right: 5px;
    }
    button {
      width: 3vw;
      height: 24px;
      line-height: 1;
      background: #fff;
      border: 1px solid #bbb;
      border-radius: 3px;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  button {
    width: 4vw;
    height: 24px;
    line-height: 1;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

const NoticeBoard = styled.div`
  position: relative;
  height: 71vh;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: auto;
  > thead > tr > td {
    text-align: center;
    color: #fff;
    height: 4vh;
    background: #176b87;
  }
  > tbody {
    > tr {
      > td {
        text-align: center;
        border-top: 1px solid #e7e7e7;
        :nth-of-type(2) {
          text-align: left;
          height: 4.75vh;
          /* line-height: 4.75vh; */
        }
      }
    }
  }
  > tr > td {
    /* height: 4.5vh; */
  }
  > tbody > tr > th {
    cursor: pointer;
    text-align: left;
    border-top: 1px solid #e7e7e7;
  }
  .important-notice {
    /* background-color: skyblue; */
    font-weight: bold;
    color: black;
    /* display: flex;
    justify-content */
    > td {
      :first-of-type {
        /* color: red; */
        display: inline-block;
        width: 40px;
        height: 25px;
        background: #ffe7ea;
        font-size: 15px;
        font-weight: 900;
        line-height: 25px;
        color: #ff5e5e;
        border-radius: 3px;
        padding: 0 4px;
        margin-top: 10.5px;
      }
    }
  }
  .table-numer {
    width: 4vw;
    padding: auto;
    text-align: center;
  }
  .table-title {
    width: 60vw;
    padding: auto;
    text-align: center;
    padding-left: 6vw;
  }
  .table-writer {
    width: 7vw;
    padding: auto;
    text-align: center;
  }
  .table-creationdate {
    width: 10vw;
    padding: auto;
    text-align: center;
  }
  .table-views {
    width: 5vw;
    padding: auto;
    text-align: center;
  }
`;
const NoticeTitle = styled.div`
  margin-bottom: 20px;
`;

const NoticeWhite = styled.div`
  > p {
    width: 30%;
  }
  input {
    width: 70%;
  }
`;

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 32px;
  left: 57%;
  transform: translateX(-57%);
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .pagination {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .pagination li {
    display: inline;
    margin: 0 5px;
    cursor: pointer;
    color: #333;

    &.active {
      font-weight: bold;
      color: blue;
      text-decoration: underline;
    }
  }
`;
export {
  NoticeWrap,
  NoticeBoard,
  NoticeTitle,
  NoticeInput,
  PaginationContainer,
  NoticeWhite,
};
