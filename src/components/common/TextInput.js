import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      {error ? <label id="error-label" htmlFor={name}>{label}<i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i> {error}</label> : <label htmlFor={name}>{label}</label>}
      {error ?
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control error"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
        :
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      }
    </div>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
