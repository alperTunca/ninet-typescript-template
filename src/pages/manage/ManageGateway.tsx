import React, { CSSProperties, useEffect, useState } from 'react';
import { Card, DatePicker } from 'antd';
import moment from 'moment';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../interfaces/page-data';

let isLoadReadOnlyServices = false

const ManageGateway = (props) => {
    const { onSetPage } = props;

    const pageData: IPageData = {
        title: 'Gateway Yönetimi',
        loaded: true,
        breadcrumbs: [
            {
                title: 'Yönetim',
                route: 'dashboard'
            },
            {
                title: 'Gateway'
            }
        ]
    };

    useEffect(() => onSetPage(pageData), []);

    return (
        <div className='component-demo-card'>
            <Card title='Gateway Yönetimi' className='component-demo-card'>
                <div>
                    TEST
                </div>
            </Card>
        </div>
    )
}

export default ManageGateway;