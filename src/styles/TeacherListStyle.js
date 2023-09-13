import styled from "@emotion/styled";

export const TeacherListWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  .pagiWrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TeacherListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0 0.5% 0;
  .title-left {
    display: flex;
    align-items: center;
    gap: 15px;
    h3 {
      font-size: 30px;
      padding-left: 10px;
    }
    button {
      width: 120px;
      height: 30px;
      font-size: 17px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background: #64ccc5;
      color: #fff;
    }
  }
  .title-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    margin-right: 20px;
    > div {
      line-height: 1;
      > select {
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100px;
        height: 25px;
        text-align: center;
        cursor: pointer;
      }
    }
    form {
      display: flex;
      gap: 5px;
      input {
        padding-left: 5px;
        height: 25px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
    }
  }
`;

export const TeacherListDiv = styled.div`
  position: relative;
  height: 74.9vh;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-bottom: 15px;
  overflow: hidden;
  .list-title {
    position: sticky;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 0.3fr 0.4fr 0.5fr 0.7fr 1.1fr 0.6fr 0.4fr;
    grid-template-rows: 1fr;
    li {
      line-height: 42px;
      background: #176b87;
      color: #fff;
      :not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }
  }
  .data-list {
    height: 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(17, 42px);
    > li {
      border-top: 1px solid #ccc;
      :last-of-type {
        border-bottom: 1px solid #ccc;
      }
      > ul {
        display: grid;
        grid-template-columns: 0.3fr 0.4fr 0.5fr 0.7fr 1.1fr 0.6fr 0.4fr;
        > li {
          line-height: 2;
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
          > button {
            width: 60px;
            height: 30px;
            font-size: 17px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background: #176b87;
            color: #fff;
          }
        }
        .student-name {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;
