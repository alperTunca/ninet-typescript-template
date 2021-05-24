import React, { CSSProperties, useEffect, useState } from 'react';
import { Card, DatePicker } from 'antd';
import moment from 'moment';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../interfaces/page-data';

let isLoadReadOnlyServices = false

const CoupleCourierCell = (props) => {
    const { onSetPage } = props;

    const pageData: IPageData = {
        title: 'Kurye-Göz Eşleşmeleri',
        loaded: true,
        breadcrumbs: [
            {
                title: 'Eşleşme',
                route: 'dashboard'
            },
            {
                title: 'Kurye-Göz'
            }
        ]
    };

    useEffect(() => onSetPage(pageData), []);

    return (
        <div className='component-demo-card'>
            <Card title='' className='component-demo-card'>
                <div>
                    TEST
                </div>
            </Card>
        </div>
    )
}

export default CoupleCourierCell;