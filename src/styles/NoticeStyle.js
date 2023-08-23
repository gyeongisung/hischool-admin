import styled from "@emotion/styled";

const NoticeInput = styled.div`
  font-size: 13px;
  width: 95%;
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
  font-size: 13px;
  width: 95%;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  > thead > tr > td {
    border-top: 1px solid #ccc;
    text-align: center;
    height: 4vh;
    background: #cfc7c7;
  }
  > tbody > tr > td {
    text-align: center;
    border-top: 1px solid #e7e7e7;
    height: 5vh;
  }
  > tbody > tr > th {
    cursor: pointer;
    text-align: left;
    border-top: 1px solid #e7e7e7;
    height: 5vh;
  }
  .important-notice {
    background-color: skyblue;
    font-weight: bold;
  }
  .table-numer {
    width: 6vw;
    padding: auto;
    text-align: center;
  }
  .table-title {
    width: 60vw;
    padding: auto;
    text-align: center;
  }
  .table-writer {
    width: 6vw;
    padding: auto;
    text-align: center;
  }
  .table-creationdate {
    width: 7vw;
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
  bottom: 20px;
  left: 54%;
  transform: translateX(-54%);
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
    }
  }
`;
export { NoticeBoard, NoticeTitle, NoticeInput, PaginationContainer };
