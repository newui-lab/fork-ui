import React from 'react';
import Codebox from '../../../components/Codebox';

import Pure from './demo/Pure';
import Basic from './demo/Basic';
import Push from './demo/Push';
import Duration from './demo/Duration';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="PURE NOTIFICATION" href="notification-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-5" header="BASIC" href="notification-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="AUTO CLOSE" href="notification-Duration" code={Duration.code}>
          <Duration />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="PUSH" href="notification-push" code={Push.code}>
          <Push />
        </Codebox>
      </div>
    </div>
  );
};
