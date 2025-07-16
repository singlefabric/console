import React from 'react';
import { shallowWithTheme } from '@kubed/tests';
import { Tooltip, Button } from '../index';

describe('@kubed/components/Tooltip', () => {
  it('passes content and placement props to Tooltip component', () => {
    const wrapper = shallowWithTheme(
      <Tooltip content="tooltip content" placement="top" maxWidth={120}>
        <Button style={{ minWidth: '100px' }}>top</Button>
      </Tooltip>,
    );
    expect(wrapper.find(Tooltip).prop('content')).toBe('tooltip content');
    expect(wrapper.find(Tooltip).prop('placement')).toBe('top');
    expect(wrapper.find(Tooltip).prop('maxWidth')).toBe(120);
  });

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@kubed/components/Tooltip');
  });
});
