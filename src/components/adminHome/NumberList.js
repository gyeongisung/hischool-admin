import React, { useEffect, useState } from "react";
import { NumberListWrap } from "../../styles/AdminHomeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { SaveNumverModal } from "../Modal";

const NumberList = () => {
  const [admNum, setAdmNum] = useState("2154");
  const [tcNum, setTcNum] = useState("5126");
  const [prcpNum, setPrcpNum] = useState("5124");
  const [mainNum, setMainNum] = useState("5123");
  const [machineNum, setMachineNum] = useState("5121");
  const [faxNum, setFaxNum] = useState("052)5465546");
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const tempList = {
    admNum: admNum,
    tcNum: tcNum,
    prcpNum: prcpNum,
    mainNum: mainNum,
    machineNum: machineNum,
    faxNum: faxNum,
  };

  const handleEditNumber = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleSaveNumber = () => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && (
        <SaveNumverModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setEditMode={setEditMode}
          tempList={tempList}
        />
      )}
      <NumberListWrap>
        <div className="number-list-header">
          <h3>교내 비상연락망</h3>
          <button>
            {editMode ? (
              <span className="save-btn" onClick={handleSaveNumber}>
                저장
              </span>
            ) : (
              <FontAwesomeIcon
                icon={faPencil}
                className="icon-arrow"
                onClick={handleEditNumber}
              />
            )}
          </button>
        </div>
        <div className="number-list-top">
          <div className="main-number-list">
            <ul>
              <li>
                <ul>
                  <li>행정실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="행정실 번호"
                        value={tempList.admNum}
                        onChange={e => setAdmNum(e.target.value)}
                      />
                    ) : (
                      tempList.admNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>교무실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="교무실 번호"
                        value={tempList.tcNum}
                        onChange={e => setTcNum(e.target.value)}
                      />
                    ) : (
                      tempList.tcNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>교장실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="교장실 번호"
                        value={tempList.prcpNum}
                        onChange={e => setPrcpNum(e.target.value)}
                      />
                    ) : (
                      tempList.prcpNum
                    )}
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <ul>
                  <li>관리실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="관리실 번호"
                        value={tempList.mainNum}
                        onChange={e => setMainNum(e.target.value)}
                      />
                    ) : (
                      tempList.mainNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>기계실</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="기계실 번호"
                        value={tempList.machineNum}
                        onChange={e => setMachineNum(e.target.value)}
                      />
                    ) : (
                      tempList.machineNum
                    )}
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Fax</li>
                  <li>
                    {editMode ? (
                      <input
                        type="text"
                        placeholder="팩스 번호"
                        value={tempList.faxNum}
                        onChange={e => setFaxNum(e.target.value)}
                      />
                    ) : (
                      tempList.faxNum
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </NumberListWrap>
    </>
  );
};

export default NumberList;
