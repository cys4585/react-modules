import './App.css';

import React, { useState } from 'react';

import Modal from './lib/Modal/Modal';
import styled from 'styled-components';

// import { AlertModal, ConfirmModal, Modal, PromptModal } from '@cys4585/react-modal';

function App() {
  const [isOpenCenterModal, setIsOpenCenterModal] = useState(false);
  // const [isOpenBottomModal, setIsOpenBottomModal] = useState(false);

  // const [isOpenSmallModal, setIsOpenSmallModal] = useState(false);
  // const [isOpenMediumModal, setIsOpenMediumModal] = useState(false);
  // const [isOpenLargeModal, setIsOpenLargeModal] = useState(false);

  // const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
  // const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  // const [isOpenPromptModal, setIsOpenPromptModal] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenCenterModal(true)}>Center Modal</button>

      <Modal
        isOpen={isOpenCenterModal}
        // config={{ position: 'center', size: 'medium' }}
        // config={{ position: 'center' }}
        // config={{ position: 'bottom' }}
        // config={{ size: 'small' }}
        // config={{ size: 'medium' }}
        config={{ size: 'large' }}
        zIndex={100}
        onClose={() => setIsOpenCenterModal(false)}
      >
        <Modal.Header
          title="Modal"
          hasCloseButton={true}
          onClose={() => setIsOpenCenterModal(false)}
        />
        <Modal.Content>
          <Form>
            <InputCheckBox>
              <input
                name="checkbox-1"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
            </InputCheckBox>
            <InputCheckBox>
              <input
                name="checkbox-2"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
            </InputCheckBox>
          </Form>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Footer.Button onClick={() => setIsOpenCenterModal(false)}>
            닫기
          </Modal.Footer.Button>
        </Modal.Footer>
      </Modal>
    </>
    // <>
    //   <h1>Modal Component Module</h1>
    //   <p>React 기반의 간단한 모달 컴포넌트입니다.</p>

    //   <div className="button-container">
    // <button onClick={() => setIsOpenCenterModal(true)}>Center Modal</button>
    //     <button onClick={() => setIsOpenBottomModal(true)}>Bottom Modal</button>

    //     <button onClick={() => setIsOpenSmallModal(true)}>Small Modal</button>
    //     <button onClick={() => setIsOpenMediumModal(true)}>Medium Modal</button>
    //     <button onClick={() => setIsOpenLargeModal(true)}>Large Modal</button>

    //     <button onClick={() => setIsOpenAlertModal(true)}>Alert Modal</button>
    //     <button onClick={() => setIsOpenConfirmModal(true)}>Confirm Modal</button>
    //     <button onClick={() => setIsOpenPromptModal(true)}>Prompt Modal</button>
    //   </div>

    //   {/* Center Modal */}
    //   <Modal
    //     isOpen={isOpenCenterModal}
    //     position="center"
    //     zIndex={100}
    //     onClose={() => setIsOpenCenterModal(false)}
    //   >
    //     <Modal.Header
    //       title="Center Modal"
    //       hasCloseButton={true}
    //       onClose={() => setIsOpenCenterModal(false)}
    //     />
    //     <Modal.Content>
    //       <Form>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-1"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
    //         </InputCheckBox>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-2"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
    //         </InputCheckBox>
    //       </Form>
    //     </Modal.Content>
    //   </Modal>

    //   {/* Bottom Modal */}
    //   <Modal
    //     isOpen={isOpenBottomModal}
    //     position="bottom"
    //     onClose={() => setIsOpenBottomModal(false)}
    //   >
    //     <Modal.Header
    //       title="Bottom Modal"
    //       hasCloseButton={false}
    //       onClose={() => setIsOpenCenterModal(false)}
    //     />
    //     <Modal.Content>
    //       <Form>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-1"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
    //         </InputCheckBox>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-2"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
    //         </InputCheckBox>
    //       </Form>
    //     </Modal.Content>
    //     <Modal.Footer>
    //       <Modal.Footer.Button
    //         style="primary"
    //         onClick={() => setIsOpenBottomModal(false)}
    //       >
    //         동의하고 저장하기
    //       </Modal.Footer.Button>
    //       <Modal.Footer.Button
    //         key="secondary-button"
    //         style="secondary"
    //         onClick={() => setIsOpenBottomModal(false)}
    //       >
    //         닫기
    //       </Modal.Footer.Button>
    //     </Modal.Footer>
    //   </Modal>

    //   {/* Small Modal */}
    //   <Modal
    //     isOpen={isOpenSmallModal}
    //     size="small"
    //     onClose={() => setIsOpenSmallModal(false)}
    //   >
    //     <Modal.Header
    //       title="Small Modal"
    //       hasCloseButton={false}
    //       onClose={() => setIsOpenSmallModal(false)}
    //     />
    //     <Modal.Content>
    //       <Form>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-1"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
    //         </InputCheckBox>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-2"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
    //         </InputCheckBox>
    //       </Form>
    //     </Modal.Content>
    //     <Modal.Footer>
    //       <Modal.Footer.Button
    //         style="primary"
    //         onClick={() => setIsOpenSmallModal(false)}
    //       >
    //         동의하고 저장하기
    //       </Modal.Footer.Button>
    //       <Modal.Footer.Button
    //         key="secondary-button"
    //         style="secondary"
    //         onClick={() => setIsOpenSmallModal(false)}
    //       >
    //         닫기
    //       </Modal.Footer.Button>
    //     </Modal.Footer>
    //   </Modal>

    //   {/* Medium Modal */}
    //   <Modal
    //     isOpen={isOpenMediumModal}
    //     size="medium"
    //     onClose={() => setIsOpenMediumModal(false)}
    //   >
    //     <Modal.Header
    //       title="Medium Modal"
    //       hasCloseButton={false}
    //       onClose={() => setIsOpenMediumModal(false)}
    //     />
    //     <Modal.Content>
    //       <Form>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-1"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
    //         </InputCheckBox>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-2"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
    //         </InputCheckBox>
    //       </Form>
    //     </Modal.Content>
    //     <Modal.Footer>
    //       <Modal.Footer.Button
    //         style="primary"
    //         onClick={() => setIsOpenMediumModal(false)}
    //       >
    //         동의하고 저장하기
    //       </Modal.Footer.Button>
    //       <Modal.Footer.Button
    //         key="secondary-button"
    //         style="secondary"
    //         onClick={() => setIsOpenMediumModal(false)}
    //       >
    //         닫기
    //       </Modal.Footer.Button>
    //     </Modal.Footer>
    //   </Modal>

    //   {/* Large Modal */}
    //   <Modal
    //     isOpen={isOpenLargeModal}
    //     size="large"
    //     onClose={() => setIsOpenLargeModal(false)}
    //   >
    //     <Modal.Header
    //       title="Large Modal"
    //       hasCloseButton={false}
    //       onClose={() => setIsOpenLargeModal(false)}
    //     />
    //     <Modal.Content>
    //       <Form>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-1"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
    //         </InputCheckBox>
    //         <InputCheckBox>
    //           <input
    //             name="checkbox-2"
    //             type="checkbox"
    //             value=""
    //           />
    //           <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
    //         </InputCheckBox>
    //       </Form>
    //     </Modal.Content>
    //     <Modal.Footer>
    //       <Modal.Footer.Button
    //         style="primary"
    //         onClick={() => setIsOpenLargeModal(false)}
    //       >
    //         동의하고 저장하기
    //       </Modal.Footer.Button>
    //       <Modal.Footer.Button
    //         key="secondary-button"
    //         style="secondary"
    //         onClick={() => setIsOpenLargeModal(false)}
    //       >
    //         닫기
    //       </Modal.Footer.Button>
    //     </Modal.Footer>
    //   </Modal>

    //   <AlertModal
    //     isOpen={isOpenAlertModal}
    //     title="Alert Modal"
    //     message="alert modal 입니다."
    //     onCheck={() => setIsOpenAlertModal(false)}
    //     onClose={() => setIsOpenAlertModal(false)}
    //   />

    //   <ConfirmModal
    //     isOpen={isOpenConfirmModal}
    //     title="Confirm Modal"
    //     message="confirm modal 입니다."
    //     onConfirm={() => setIsOpenConfirmModal(false)}
    //     onCancel={() => setIsOpenConfirmModal(false)}
    //     onClose={() => setIsOpenConfirmModal(false)}
    //   />

    //   <PromptModal
    //     isOpen={isOpenPromptModal}
    //     title="Prompt Modal"
    //     onSubmit={(value) => {
    //       alert(value);
    //       setIsOpenPromptModal(false);
    //     }}
    //     onCancel={() => setIsOpenPromptModal(false)}
    //     onClose={() => setIsOpenPromptModal(false)}
    //   />
    // </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputCheckBox = styled.div`
  margin-bottom: 4px;
  text-align: left;
`;

export default App;
