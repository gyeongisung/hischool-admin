import styled from "@emotion/styled";

const NoticeInput = styled.div`
  font-size: 13px;
  margin: auto;
  margin-bottom: 15px;
  > tr > th > input {
    line-height: 23px;
    height: 23px;
  }
  > tr > td > button {
    height: 23px;
    line-height: 20px;
    margin-left: 0.25vw;
  }
  > tr > td > button.writing {
    height: 23px;
    line-height: 20px;
    right: 0;
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
  > tbody > tr > td {
    text-align: center;
    border-top: 1px solid #e7e7e7;
    height: 4.5vh;
  }
  > tbody > tr > th {
    cursor: pointer;
    text-align: left;
    border-top: 1px solid #e7e7e7;
    height: 4.75vh;
  }
  .important-notice {
    background-color: skyblue;
    font-weight: bold;
    color: black;
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
export { NoticeBoard, NoticeTitle, NoticeInput, PaginationContainer };
