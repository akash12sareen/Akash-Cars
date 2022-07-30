import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};



class SimpleForm extends Component {
  render() {
    return (
      <ChatBot 
        steps={[
          {
            id:'q-firstname', 
            message:'Which is your favorite CAR ?', 
            trigger:'firstname',
          },
          {
            id:'firstname', 
            user:true,
            trigger:'q-lastname'
          },
          {
            id:'q-lastname', 
            message:'From where did u come to know about us?', 
            trigger:'lastname',
          },
          {
            id:'lastname', 
            user:true,
            trigger:'q-email'
          },
          {
            id:'q-email', 
            message:'Finally. what is you email?', 
            trigger:'email',
          },
          {
            id:'email', 
            user:true,
            trigger:'q-submit'
          },
          {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
          },
          {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
          },
          {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
               },
                    {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
     
        {...config}
      />
        
        );
      }

    }

    export default SimpleForm;