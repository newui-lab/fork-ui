import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Text from './demo/Text';
import IconDemo from './demo/Icon';
import DirectionTitle from './demo/DirectionTitle';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="divider-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="WITH ICON" href="divider-with-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="TEXT" href="divider-text" code={Text.code}>
          <Text />
        </Codebox>
        <Codebox className="mb-5" header="DIRECTION OF TITLE" href="divider-direction" code={DirectionTitle.code}>
          <DirectionTitle />
        </Codebox>
      </div>
    </div>
  );
};
