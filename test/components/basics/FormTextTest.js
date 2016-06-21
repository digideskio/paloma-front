/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import FormText from 'components/basics/FormText';

describe('FormTextComponent', () => {
    let FormTextComponent;
    let SelectChildren;
    let propsCreateComponent = {'id':'1', 'labelText': 'name', 'placeholder': 'my name'};

    beforeEach(() => {
      FormTextComponent = createComponent(FormText, propsCreateComponent);
    });

    it('should have div as main type', () => {
      expect(FormTextComponent.type).to.equal('div');
    });

    it('should have 2 children', () => {
      expect(FormTextComponent.props.children.length).to.equal(2);
    });

    it('should have Col as first child', () => {
      SelectChildren = FormTextComponent.props.children[0];
      expect(SelectChildren.type).to.equal(Col);
      expect(SelectChildren.props.componentClass).to.equal(ControlLabel);
      expect(SelectChildren.props.md).to.equal(2);
      expect(SelectChildren.props.children).to.equal(propsCreateComponent.labelText);
    });

    it('should have Col as second child', () => {
      SelectChildren = FormTextComponent.props.children[1];
      expect(SelectChildren.type).to.equal(Col);
      expect(SelectChildren.props.md).to.equal(3);
    });

    it('should have FormControl and feedback inside the second child', () => {
      let children1 = FormTextComponent.props.children[1].props.children[0];
      let children2 = FormTextComponent.props.children[1].props.children[1];

      expect(children1.type).to.equal(FormControl);
      expect(children1.props.placeholder).to.equal(propsCreateComponent.placeholder);

      expect(children2.type).to.equal(FormControl.Feedback);

    });
});
