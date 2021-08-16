/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <div>
        <p>This is a sample message</p>
      </div>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
