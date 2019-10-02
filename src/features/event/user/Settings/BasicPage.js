import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../../assets/app/common/form/TextInput';



class BasicPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size='large' content='Basics' />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Known As'
          />          
         
          <Divider />
          <Button
            disabled={pristine || submitting}
            size='large'
            positive
            content='Update Profile'
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: 'userProfile',
  enableReinitialize: true,
  destroyOnUnmount: false
})(BasicPage);