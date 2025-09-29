import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
    this.onChangeTagHandler = this.onChangeTagHandler.bind(this);
  }

  onSubmitEventHandler(e) {
    e.preventDefault();

    this.props.addContactHandler(this.state);
  }

  onChangeNameHandler() {
    this.setState({ name: event.target.value });
  }

  onChangeTagHandler() {
    this.setState({ tag: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler} className="contact-input">
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onChangeNameHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onChangeTagHandler}
        />
        <button type="submit">Tambah Kontak</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
};

export default ContactInput;
