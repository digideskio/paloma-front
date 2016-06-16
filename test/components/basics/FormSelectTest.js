/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import FormSelect from 'components/basics/FormSelect';

describe('CheckboxComponent', () => {
    let SelectComponent;
    let SelectChildren;
    let propsCreateComponent = {'id':'1', 'listSelect': [{'value':'value1', 'label':1}, {'value':'value2', 'label':2}], 'labelText': 'mySelect'};

    beforeEach(() => {
      SelectComponent = createComponent(FormSelect, propsCreateComponent);
    });

    it('should have FormGroup as main type', () => {
      expect(SelectComponent.type).to.equal(FormGroup);
    });

    it('should have 2 children', () => {
      expect(SelectComponent.props.children.length).to.equal(2);
    });

    it('should have ControlLabel as first child', () => {
      SelectChildren = SelectComponent.props.children[0];
      expect(SelectChildren.type).to.equal(ControlLabel);
      expect(SelectChildren.props.children).to.equal(propsCreateComponent.labelText);
    });

    it('should have FormControl as second child', () => {
      SelectChildren = SelectComponent.props.children[1];
      expect(SelectChildren.type).to.equal(FormControl);
      expect(SelectChildren.props.componentClass).to.equal('select');
    });

    it('check right number of <option> in the select', () => {
       let propsSelectChildren = SelectComponent.props.children[1].props;
       expect(propsSelectChildren.children.length).to.equal(propsCreateComponent.listSelect.length);
    });

    it('should have first <option> with the right params', () => {
       let firstOptionComponent = SelectComponent.props.children[1].props.children[0];

       expect(firstOptionComponent.key).to.equal('option0');
       expect(firstOptionComponent.props.value).to.equal(propsCreateComponent.listSelect[0].value);
       expect(firstOptionComponent.props.children).to.equal(propsCreateComponent.listSelect[0].label);
    });

});
