/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import {Checkbox, FormGroup} from 'react-bootstrap';

import CheckBox from 'components/basics/CheckBox';

describe('CheckboxComponent', () => {
    let CheckboxComponent;
    let CheckboxChildren;
    let propsCreateComponent = {'id':'1', 'listCheckBox':['MISSION', 'TEST'], 'inline':false};

    beforeEach(() => {
      CheckboxComponent = createComponent(CheckBox, propsCreateComponent);
    });

    it('should have FormGroup as main type', () => {
      expect(CheckboxComponent.type).to.equal(FormGroup);
    });

    it('should have Checkbox as first child', () => {
      CheckboxChildren = CheckboxComponent.props.children[0];
      expect(CheckboxChildren.type).to.equal(Checkbox);
      expect(CheckboxChildren.props.inline).to.equal(false);
      expect(CheckboxChildren.props.children).to.equal(propsCreateComponent.listCheckBox[0]);
    });

    it('should have Checkbox as second child', () => {
      CheckboxChildren = CheckboxComponent.props.children[1];
      expect(CheckboxChildren.type).to.equal(Checkbox);
      expect(CheckboxChildren.props.inline).to.equal(false);
      expect(CheckboxChildren.props.children).to.equal(propsCreateComponent.listCheckBox[1]);
    });
});
