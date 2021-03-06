import React, { useEffect } from 'react';

import { Card } from 'antd';
import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageTypography: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Typography',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Typography'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <Card className='mb-0'>
      <h1>H1 theme heading</h1>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>
      <h2>H2 theme heading</h2>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>
      <h3>H3 theme heading</h3>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>
      <h4>H4 theme heading</h4>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>
      <h5>H5 theme heading</h5>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>
      <h6>H6 theme heading</h6>
      <p>
        Scientists now know that the whole northwestern region of the United States was hit by
        gigantic eruptions. They say that there were at least a dozen. Some of which were much
        stronger than previously thought.
      </p>

      <h4>Inline text elements</h4>
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </p>
      <p>
        <u>This line of text will render as underlined</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>

      <h4>Lists</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>
          Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>

      <ol>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>
          Nulla volutpat aliquam velit
          <ol>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ol>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ol>
    </Card>
  );
};

export default PageTypography;
