import React from 'react';
import { Modal } from 'antd';


interface ModalProps{
    content:React.ReactNode;
    open:boolean;
    width:number;
    title:string;
    onOpenHandler:(open:boolean)=>void;
}
const Index=(props:ModalProps) => {
const {content,open,width,title,onOpenHandler} = props;
  return (
    <>

      <Modal
        title={title}
        centered
        open={open}
        onOk={() => onOpenHandler(false)}
        onCancel={() => onOpenHandler(false)}
        width={width}
      >
        {content}
      </Modal>
    </>
  );
};

export default Index;