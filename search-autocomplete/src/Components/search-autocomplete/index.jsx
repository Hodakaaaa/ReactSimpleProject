import { useState, useEffect } from "react"; // Import necessary React hooks
import Suggestions from "./suggestions"; // Import the Suggestions component
import './styles.css';

// Main functional component for SearchAutocomplete
export default function SearchAutocomplete() {
    // State variables
    const [loading, setLoading] = useState(false); // Track loading status
    const [users, setUsers] = useState([]); // Store fetched users
    const [error, setError] = useState(null); // Track any errors
    const [searchParam, setSearchParam] = useState(''); // Store user input for search
    const [showDropdown, setShowDropDown] = useState(false); // Control dropdown visibility
    const [filteredUsers, setFilteredUsers] = useState([]); // Store filtered users based on search

    // Event handler for input changes
    function handleChange(event) {
        const query = event.target.value.toLowerCase(); // Convert user input to lowercase
        setSearchParam(query); // Update the searchParam state with user input

        if (query.length > 1) { // If the input has more than 1 character
            const filteredData = users && users.length ? 
                users.filter(item => item.toLowerCase().indexOf(query) > -1) : []; // Filter users based on input
            setFilteredUsers(filteredData); // Update filtered users state
            setShowDropDown(true); // Show dropdown if users are filtered
        } else {
            setShowDropDown(false); // Hide dropdown if input is less than 2 characters
        }
    }

    // Async function to fetch the list of users
    async function fecthListOfUsers() {
        try {
            const response = await fetch(`https://dummyjson.com/users`); // Fetch user data from API
            const data = await response.json(); // Convert response to JSON
            console.log(data); // Log the response data for debugging

            if (data && data.users && data.users.length) { // Check if user data exists
                setUsers(data.users.map((userItem) => userItem.firstName)); // Extract and store first names of users
                setLoading(false); // Set loading to false after data is fetched
                setError(null); // Reset error state
            }
        } catch (error) {
            setLoading(false); // Stop loading if an error occurs
            console.log(error); // Log the error for debugging
            setError(error); // Set error state with the caught error
        }
    }

    // useEffect hook to fetch users when the component mounts
    useEffect(() => {
        fecthListOfUsers(); // Call the function to fetch users
    }, []); // Empty dependency array ensures this runs only once, on mount

    console.log(users, filteredUsers); // Log users and filteredUsers for debugging

    // JSX return block to render the UI
    return (
        <div className="search-autocomplete-container">
            {
                loading ? <h1>Loading Data ! Please wait</h1> : // Show loading message if data is being fetched
                <input
                    onChange={handleChange} // Attach the handleChange function to the input
                    value={searchParam} // Bind the input value to searchParam state
                    name="search-users"
                    placeholder="Search users here ..." // Input placeholder text
                />
            }
            {
                showDropdown && <Suggestions data={filteredUsers} /> // Show dropdown with filtered users if applicable
            }
        </div>
    );
}
