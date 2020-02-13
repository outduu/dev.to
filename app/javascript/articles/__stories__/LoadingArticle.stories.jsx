import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { LoadingArticle } from '..';
import '../../../assets/stylesheets/articles.scss';
import { articleDecorator } from './articleDecorator';

storiesOf('Components/Articles', module)
  .addDecorator(articleDecorator)
  .add('Article Loading', () => <LoadingArticle />);