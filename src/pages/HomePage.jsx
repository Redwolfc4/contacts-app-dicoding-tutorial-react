import React from "react";
import { deleteContact, getContacts } from "../utils/data";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SeachBar";
import { useSearchParams } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeyWordChangedHandler = this.onKeyWordChangedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onKeyWordChangedHandler(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  onDeleteHandler(id) {
    deleteContact(id);

    this.setState({ contacts: getContacts() });
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeyWordChangedHandler}
        />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={filteredContacts}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

const HomePageWrapper = () => {
  const [searchParamsContact, setSearchParamsContact] = useSearchParams();

  const keyword = searchParamsContact.get("keyword") || "";

  const onKeywordChangeHandler = (keyword) => {
    setSearchParamsContact({ keyword });
  };

  return (
    <HomePage defaultKeyword={keyword} keywordChange={onKeywordChangeHandler} />
  );
};

export default HomePageWrapper;
