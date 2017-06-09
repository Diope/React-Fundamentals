const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

function SelectLanguage (props) {
    var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
        <ul className="languages">
                {languages.map(function(lang) {
                    return (
                        <li 
                            style={lang === props.selectedLanguage ? {color: '#FC615D'}: null}
                            onClick={props.onSelect.bind(null,lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
    )

}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage (lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then(function(repos) {
                this.setState(function() {
                    return {
                        repos
                    }
                })
            }.bind(this));
             
    }

    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
            
        )
    }
}

module.exports = Popular;