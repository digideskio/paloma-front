/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import FormText from 'components/basics/FormText';

describe('CheckboxComponent', () => {
    let FormTextComponent;
    let SelectChildren;
    let propsCreateComponent = {'id':'1', 'labelText': 'name', 'placeholder': 'my name'};

    beforeEach(() => {
      FormTextComponent = createComponent(FormText, propsCreateComponent);
    });

    it('should have FormGroup as main type', () => {
      expect(FormTextComponent.type).to.equal(FormGroup);
    });

    it('should have 3 children', () => {
      expect(FormTextComponent.props.children.length).to.equal(3);
    });

    it('should have ControlLabel as first child', () => {
      SelectChildren = FormTextComponent.props.children[0];
      expect(SelectChildren.type).to.equal(ControlLabel);
      expect(SelectChildren.props.children).to.equal(propsCreateComponent.labelText);
    });

    it('should have FormControl as second child', () => {
      SelectChildren = FormTextComponent.props.children[1];
      expect(SelectChildren.type).to.equal(FormControl);
      expect(SelectChildren.props.componentClass).to.equal('input');
      expect(SelectChildren.props.type).to.equal('text');
      expect(SelectChildren.props.placeholder).to.equal(propsCreateComponent.placeholder);
    });

    it('should have FormControl.Feedback as third child', () => {
      SelectChildren = FormTextComponent.props.children[2];
      expect(SelectChildren.type).to.equal(FormControl.Feedback);
    });
});
