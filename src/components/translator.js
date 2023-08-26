import React from 'react';
import { withTranslation } from 'react-i18next';

class LanguageSwitcher extends React.Component {
  handleChangeLanguage = (e) => {
      const { i18n } = this.props;
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    console.log(i18n.changeLanguage)
  };

  render() {
    const { i18n } = this.props;
    return (
      <div>
        <label htmlFor="language-select">Select Language:</label>
        <select
          id="language-select"
          value={i18n.language}
          onChange={this.handleChangeLanguage}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    );
  }
}

export default withTranslation('translation')(LanguageSwitcher);
