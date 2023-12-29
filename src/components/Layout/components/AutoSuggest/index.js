import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

function Autocomplete() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (inputValue) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?query=${inputValue}`);
      setSuggestions(response.data); // Assuming response.data is an array of suggestions
      setLoading(false);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial suggestions (e.g., when component mounts)
    fetchSuggestions('');
  }, []);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    fetchSuggestions(value); // Fetch suggestions based on user input
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const inputProps = {
    placeholder: 'Type to search...',
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions.title}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

export default Autocomplete;
