import React, { FC, useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearToast } from '../actions/app.actions';
import { RootState } from '../reducers';

const CustomToast: FC = () => {
  const [toastVisibility, setToastVisibility] = useState(false);
  const { toastMessage } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    toastMessage.length ? setToastVisibility(true) : setToastVisibility(false);
  }, [toastMessage]);
  const onCloseHandler = () => {
    dispatch(clearToast());
  };

  return (
    <ToastContainer className="p-3" position={'middle-center'}>
      <Toast show={toastVisibility} onClose={onCloseHandler} delay={3000}>
        <Toast.Header>
          <strong className="me-auto">Error</strong>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
