import React, { useState, useEffect, useRef, useContext } from 'react';
import { Table, Input, Form } from 'antd';

interface TableGatewayProps {
    mdmAPI: JSON;
    onCallback: JSON;
    isLoaded: Boolean;
    editCell: Function;
}

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />                   {/*tablo içindeki değerler/ satırlar++++*/}
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        console.log("1")
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };


    const save = async () => {
        try {
            console.log("2")
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};


const TableGateway: React.FC<TableGatewayProps> = props => {
    const { mdmAPI, onCallback, isLoaded, editCell } = props;
    const [dataForTable, setDataForTable] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [dataForModal, setDataForModal] = useState([]);

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = this.columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: this.handleSave,
            }),
        };
    });

    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                dataSource={dataForTable}
                columns={columns}
                pagination={{ defaultPageSize: 10 }}
                rowKey={'Id'}
                onChange={this.handleChangeTable}
                scroll={{ x: 1000 }}
                loading={!this.props.isLoaded}
            />
            <ModalGateway
                mdmAPI={this.state.dataForModal}
                visibleModal={visibleModal}
                onClose={this.onCloseCallback}
            ></ModalGateway>
        </div>
    );
};

export default TableGateway;
