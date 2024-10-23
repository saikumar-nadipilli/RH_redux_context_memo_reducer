import React, { useReducer } from 'react';

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return { username: '', email: '', password: '' };
    default:
      return state;
  }
};

// Initial state
const initialState = { username: '', email: '', password: '' };

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'change', field: e.target.name, value: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          name="username"
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" value={state.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password: </label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Form;