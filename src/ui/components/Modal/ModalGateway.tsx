import React, { createRef, useRef, useState } from 'react';
import { Modal, Input, Form, Button } from 'antd';

interface Props {

    visibleModal: boolean;
    onClose: Function;
    mdmAPI: {
        mdmId?: number;
        gatewayId?: number;
        lightId?: number;
        cellId?: number;
        shelfId?: number;
    };
}

const ListItem: React.FC<Props> = props => {
    const { mdmAPI, visibleModal, onClose } = props;
    let formRef = useRef();
    //let formRef = createRef<HTMLFormElement>();

    // Close modal without saving
    const handleCancelModal = e => {
        //console.log("handleCancel");
        e.preventDefault();
        onClose && onClose(0, 'cancel');
    }


    // if there is an error, function trigger validates
    const onFinish = values => {
        console.log('ModalGateway: Success Table in Modal:' + JSON.stringify(values));
        onClose && onClose(values, 'put')
    };

    return (
        <div>

            <Modal
                destroyOnClose
                title={"Isik Duzenleme"}
                visible={visibleModal}
                maskClosable={false}
                closable={false}
                centered
                footer={
                    <Form.Item>
                        <Button key="cancel" onClick={e => handleCancelModal(e)} >Iptal</Button>
                        <Button key='confirm' type='primary' htmlType="submit" form="myForm" >Onayla</Button>
                    </Form.Item>}>

                <Form
                    ref={formRef}
                    id="myForm"
                    onFinish={onFinish}
                    labelAlign="left"
                    labelCol={{ span: 9 }}
                    colon={false}
                    preserve={false}
                    autoComplete="off"
                    requiredMark="optional">

                    <Form.Item
                        label="Mdm"
                        name={["mdmId"]}
                        initialValue={mdmAPI.mdmId}
                        rules={[{
                            required: true,
                            message: "Mdm alaný boþ býrakýlamaz."
                        }]}>
                        <Input
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        label="Gateway"
                        name={["gatewayId"]}
                        initialValue={mdmAPI.gatewayId}
                        rules={[{
                            required: true,
                            message: "Gateway alanı boş bırakılamaz."
                        }]}>
                        <Input
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        label="Isik Kodu"
                        name={["lightId"]}
                        initialValue={mdmAPI.lightId}
                        rules={[{
                            required: true,
                            message: "Işık kodu alanı boş bırakılamaz."
                        }]}>
                        <Input
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        label="Göz Kodu"
                        name={["cellId"]}
                        initialValue={mdmAPI.cellId}
                        rules={[{
                            required: true,
                            message: "Göz Kodu alanı boş bırakılamaz."
                        }]}>
                        <Input
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        label="Raf Kodu"
                        name={["shelfId"]}
                        initialValue={mdmAPI.shelfId}
                        rules={[{
                            required: true,
                            message: "Sepet Kodu alanı boş bırakılamaz."
                        }]}>
                        <Input
                        ></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ListItem;
