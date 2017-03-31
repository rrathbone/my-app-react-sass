import React, { PropTypes } from 'react';

const TextArea = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';

  return (
    <div className={wrapperClass}>
      {error ? <label id="error-label" htmlFor={name}>{label}<i id="warning-icon-message" className="fa fa-exclamation-triangle" aria-hidden="true"></i>{error}</label> : <label htmlFor={name}>{label}</label>}
      {error ?
        <div className="field">
          <textarea
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
          <textarea
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

TextArea.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextArea;
