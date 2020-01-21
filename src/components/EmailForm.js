import React, {useState} from 'react';
import styled from "@emotion/styled"

function EmailForm(){
  const [ valid, setValid ] = useState(true)
  const [ email, setEmail ] = useState('')



  const isValid = function() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(re.test(email.value)){
      return true
    } else {
      return false
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email');
    setEmail(email)
    setValid(isValid)
  }

  const Warning = styled.p(
    {
      color: 'var(--soft-red)',
      display: valid ? 'none' : 'block'
    }
  )

  const Input = styled.input(
    {

    }
  )

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <Input id="email" type="text" name="email" 
        placeholder="Your email address..." aria-label="Email input"/>
      <input className="submit" type="submit" value="Notify me" aria-label="Submit button"/>
      <Warning id="warning">Please provide a valid email</Warning>
    </form>
  );
}

// class EmailForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     const email = document.getElementById('email');
//     const warning = document.getElementById('warning');
//     const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
//     if(!re.test(email.value)){
//       email.classList.add('error');
//       warning.style.visibility = 'visible';
//     } else {
//       email.classList.remove('error');
//       warning.style.visibility = 'hidden';
//     }
//     event.preventDefault();
//   }


//   render() {
//     return (
//       <form className="email-form" onSubmit={this.handleSubmit}>
//         <input id="email" className="email" type="text" name="email" 
//           placeholder="Your email address..." aria-label="Email input"
//           value={this.state.value} onChange={this.handleChange}/>
//         <Warning id="warning">Please provide a valid email</Warning>
//         <input className="submit" type="submit" value="Notify me" aria-label="Submit button"/>
//       </form>
//     );
//   }
// }

export default EmailForm;
