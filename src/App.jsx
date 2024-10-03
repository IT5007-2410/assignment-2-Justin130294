// Function to generate random hexadeicmal number for unique booking reference number
const generateHexadecimalNumber = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

// CONSTANTS
const CAPACITY = 10; // Maximum number of passengers allowed
const TRAIN_REFERENCE_NUMBER = "TR321"; // Train reference number (since only single train is available)
const PHONE_VALIDATION_REGEX =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/; // Regex to validate phone number

/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1,
    name: "Jack",
    phone: 88885555,
    bookingTime: new Date().toLocaleString(), // time when booking was made
    bookingReferenceNumber: generateHexadecimalNumber(), // unique booking reference number
    email: "jack@email.com",
    departureLocation: "Bangkok Train Station", // departure location (fixed since only 1 train)
    departureTime: new Date(2024, 11, 20, 14, 0, 0).toLocaleString(), // departure time (fixed since only 1 train)
    arrivalLocation: "Jurong Train Station", // arrival location (fixed since only 1 train)
    arrivalTime: new Date(2024, 11, 22, 14, 0, 0).toLocaleString(), // arrival time (fixed since only 1 train)
    emergencyContactName: "Jill",
    emergencyContactPhone: 88886666,
    remarks: "Nil",
  },
  {
    id: 2,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date().toLocaleString(),
    bookingReferenceNumber: generateHexadecimalNumber(),
    email: "rose@email.com",
    departureLocation: "Bangkok Train Station",
    departureTime: new Date(2024, 11, 20, 14, 0, 0).toLocaleString(),
    arrivalLocation: "Jurong Train Station",
    arrivalTime: new Date(2024, 11, 22, 14, 0, 0).toLocaleString(),
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicapped",
  },
];

function TravellerRow(props) {
  {
    /*Q3. Placeholder to initialize local variable based on traveller prop.*/
  }
  const { traveller } = props;

  return (
    <tr>
      {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
      <td>{traveller.id}</td>
      <td>{traveller.name}</td>
      <td>{traveller.phone}</td>
      <td>{traveller.bookingTime}</td>
      <td>{traveller.bookingReferenceNumber}</td>
      <td>{traveller.email}</td>
      <td>{traveller.departureLocation}</td>
      <td>{traveller.departureTime}</td>
      <td>{traveller.arrivalLocation}</td>
      <td>{traveller.arrivalTime}</td>
      <td>{traveller.emergencyContactName}</td>
      <td>{traveller.emergencyContactPhone}</td>
      <td>{traveller.remarks}</td>
    </tr>
  );
}

function Display(props) {
  /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  const { travellers } = props;
  return (
    <div id="display-travellers">
      <h1>Travellers</h1>
      <h2>Train Reference Number: {TRAIN_REFERENCE_NUMBER}</h2>
      {travellers.length === 0 ? (
        <h3>There are no travellers booked yet.</h3>
      ) : (
        <table>
          <thead>
            <tr>
              {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Booking Time</th>
              <th>Booking Ref. No.</th>
              <th>Email</th>
              <th>Departure Location</th>
              <th>Departure Time</th>
              <th>Arrival Location</th>
              <th>Arrival Time</th>
              <th>Emergency Contact Name</th>
              <th>Emergency Contact Phone</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
            {travellers.map((traveller) => (
              <TravellerRow key={traveller.id} traveller={traveller} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const submittedForm = e.target;

    // Validate phone numbers
    if (!PHONE_VALIDATION_REGEX.test(submittedForm.phone.value)) {
      alert("Please enter a valid phone number");
      return;
    } else if (
      !PHONE_VALIDATION_REGEX.test(submittedForm.emergencyContactPhone.value)
    ) {
      alert("Please enter a valid emergency contact phone number");
      return;
    }
    // Create a new traveller object
    const traveller = {
      name: submittedForm.travellername.value,
      phone: submittedForm.phone.value,
      bookingTime: new Date().toLocaleString(),
      bookingReferenceNumber: generateHexadecimalNumber(),
      email: submittedForm.email.value,
      departureLocation: submittedForm.departureLocation.value,
      departureTime: submittedForm.departureTime.value,
      arrivalLocation: submittedForm.arrivalLocation.value,
      arrivalTime: submittedForm.arrivalTime.value,
      emergencyContactName: submittedForm.emergencyContactName.value,
      emergencyContactPhone: submittedForm.emergencyContactPhone.value,
      remarks: submittedForm.remarks.value,
    };
    // Check if the booking is successful before resetting the form
    const outcome = this.props.bookTraveller(traveller);
    if (outcome) submittedForm.reset();
  }

  render() {
    return (
      <div id="add-traveller">
        <h1>Add Traveller Booking</h1>
        {this.props.numTravellers === CAPACITY ? (
          <h3>
            The train is fully booked. No further reservations are allowed.
          </h3>
        ) : (
          <form name="addTraveller" onSubmit={this.handleSubmit}>
            {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
            <div>
              {/* Display the departure/arrival locations and timings. This should be fixed as we are 
              only considering the booking for one train ride. Display so the user knows what he is booking*/}
              <label htmlFor="departureLocation">Departure Location</label>
              <input
                type="text"
                disabled
                name="departureLocation"
                value="Bangkok Train Station"
                id="departureLocation"
              />
            </div>
            <div>
              <label htmlFor="departureTime">Departure Time (dd/mm/yyyy)</label>
              <input
                type="text"
                disabled
                name="departureTime"
                value={new Date(2024, 11, 20, 14, 0, 0).toLocaleString()}
                id="departureTime"
              />
            </div>
            <div>
              <label htmlFor="arrivalLocation">Arrival Location</label>
              <input
                type="text"
                disabled
                name="arrivalLocation"
                value="Jurong Train Station"
                id="arrivalLocation"
              />
            </div>
            <div>
              <label htmlFor="arrivalTime">Arrival Time (dd/mm/yyyy)</label>
              <input
                type="text"
                disabled
                name="arrivalTime"
                value={new Date(2024, 11, 22, 14, 0, 0).toLocaleString()}
                id="arrivalTime"
              />
            </div>
            <div>
              <label htmlFor="travellername">
                Name <span className="required-field">*</span>
              </label>
              <input
                type="text"
                required
                name="travellername"
                placeholder="Name"
                id="travellername"
              />
            </div>
            <div>
              <label htmlFor="phone">
                Phone Number <span className="required-field">*</span>
              </label>
              <input
                type="text"
                required
                name="phone"
                placeholder="Phone Number"
                id="phone"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email <span className="required-field">*</span> (Note: Each
                booking must have a unique email)
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="emergencyContactName">
                Emergency Contact Name <span className="required-field">*</span>
              </label>
              <input
                type="text"
                required
                name="emergencyContactName"
                placeholder="Emergency Contact Name"
                id="emergencyContactName"
              />
            </div>
            <div>
              <label htmlFor="emergencyContactPhone">
                Emergency Contact Phone Number{" "}
                <span className="required-field">*</span>
              </label>
              <input
                type="text"
                required
                name="emergencyContactPhone"
                placeholder="Emergency Contact Phone Number"
                id="emergencyContactPhone"
              />
            </div>
            <div>
              <label htmlFor="remarks">Remarks</label>
              <textarea
                type="text"
                name="remarks"
                placeholder="Remarks"
                id="remarks"
                rows="3"
              />
            </div>
            <p>
              <span className="required-field">*</span> Required field
            </p>
            <button
              type="submit"
              // Additional disabled attribute to prevent adding more passengers than the capacity
              // But unnecessary as the form is hidden when the train is fully booked
              disabled={this.props.numTravellers === CAPACITY}
            >
              Add Booking
            </button>
          </form>
        )}
      </div>
    );
  }
}

class Delete extends React.Component {
  constructor() {
    super();
    this.fetchBooking = this.fetchBooking.bind(this);
    this.deleteTravellerHandler = this.deleteTravellerHandler.bind(this);
    this.state = { showErrorMessage: false, fetchedTraveller: null };
  }

  // Function to delete the fetched traveller with confirmation
  deleteTravellerHandler(e) {
    if (confirm("Are you sure you want to delete this booking?") === true) {
      this.props.deleteTraveller(this.state.fetchedTraveller);
      this.setState({ fetchedTraveller: null });
    }
  }

  // Function to fetch the booking details of the passenger to be deleted (retrieve the booking first to verify before deletion)
  fetchBooking(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const submittedForm = e.target;
    const bookingReferenceId = submittedForm.bookingReferenceId.value;
    // Search for the traveller with the booking reference number
    const traveller = this.props.travellers.find(
      (traveller) => traveller.bookingReferenceNumber === bookingReferenceId
    );
    // If the traveller is not found, show an error message
    if (!traveller) {
      this.setState({ showErrorMessage: true });
      return;
    }
    // If the traveller is found, display the details to allow the user to delete the booking
    this.setState({ fetchedTraveller: traveller });
    submittedForm.reset();
    // Hide the error message if it was previously shown
    this.setState({ showErrorMessage: false });
  }
  render() {
    return (
      <div id="delete-traveller">
        <h1>Delete Traveller Booking</h1>
        {/* Show message if there are no more passengers booked */}
        {this.props.travellers.length === 0 ? (
          <h3>
            There are no more bookings to delete. Please add a booking first.
          </h3>
        ) : (
          <>
            <form name="deleteTraveller" onSubmit={this.fetchBooking}>
              {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
              <div>
                <label htmlFor="deleteBookingReferenceId">
                  Booking Reference Id
                </label>
                <input
                  type="text"
                  name="bookingReferenceId"
                  placeholder="Booking Reference Id"
                  id="deleteBookingReferenceId"
                  required
                />
              </div>
              {this.state.showErrorMessage && (
                <p className="error-text">Booking not found</p>
              )}
              <button type="submit">Fetch Booking Details</button>
            </form>
            {this.state.fetchedTraveller && (
              <div className="fetched-details">
                <h3>Traveller Details</h3>
                <p>
                  <strong>ID:</strong> {this.state.fetchedTraveller.id}
                </p>
                <p>
                  <strong>Name:</strong> {this.state.fetchedTraveller.name}
                </p>
                <p>
                  <strong>Phone:</strong> {this.state.fetchedTraveller.phone}
                </p>
                <p>
                  <strong>Booking Reference Number:</strong>{" "}
                  {this.state.fetchedTraveller.bookingReferenceNumber}
                </p>
                <p>
                  <strong>Email:</strong> {this.state.fetchedTraveller.email}
                </p>
                <p>
                  <strong>Departure Location:</strong>{" "}
                  {this.state.fetchedTraveller.departureLocation}
                </p>
                <p>
                  <strong>Departure Time:</strong>{" "}
                  {this.state.fetchedTraveller.departureTime}
                </p>
                <p>
                  <strong>Arrival Location:</strong>{" "}
                  {this.state.fetchedTraveller.arrivalLocation}
                </p>
                <p>
                  <strong>Arrival Time:</strong>{" "}
                  {this.state.fetchedTraveller.arrivalTime}
                </p>
                <p>
                  <strong>Emergency Contact Name:</strong>{" "}
                  {this.state.fetchedTraveller.emergencyContactName}
                </p>
                <p>
                  <strong>Emergency Contact Phone:</strong>{" "}
                  {this.state.fetchedTraveller.emergencyContactPhone}
                </p>
                <p>
                  <strong>Remarks:</strong>{" "}
                  {this.state.fetchedTraveller.remarks}
                </p>
                <button onClick={this.deleteTravellerHandler}>
                  Delete Booking
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="overview">
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
        <h1>Bookings Overview</h1>
        <div>
          <p>Train Reference: {TRAIN_REFERENCE_NUMBER}</p>
          <p>Total number of seats: {CAPACITY}</p>
          <p>Number of travellers: {this.props.numTravellers}</p>
          <p>
            Number of available seats: {CAPACITY - this.props.numTravellers}
          </p>
          <p>
            Occupancy: {Math.round((this.props.numTravellers / CAPACITY) * 100)}
            %
          </p>
        </div>
        {/* JSX to show the train seats */}
        <div className="train">
          <h3>Rear</h3>
          <div className="seat-container">
            {Array.from({ length: CAPACITY }, (_, i) => (
              <div
                className={`seat ${
                  i + 1 <= this.props.numTravellers ? "occupied" : ""
                }`}
                key={i}
              ></div>
            ))}
          </div>
          <h3>Front ➤</h3>
        </div>
        {/* JSX to show the legend */}
        <div className="legend">
          <h4>Legend: </h4>
          <div className="legend-symbol">
            <div className="seat"></div>
            <span>Empty seat</span>
          </div>
          <div className="legend-symbol">
            <div className="seat occupied"></div>
            <span>Occupied seat</span>
          </div>
        </div>
      </div>
    );
  }
}

class TicketToRide extends React.Component {
  constructor() {
    super();
    // Use the maxId to generate unique IDs for each passenger and selector to manage the view
    this.state = { travellers: [], selector: "homepage", maxId: 0 };
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value) {
    /*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({ selector: value });
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        travellers: initialTravellers,
        maxId: initialTravellers?.at(-1)?.id || 0,
      });
    }, 500);
  }

  bookTraveller(passenger) {
    /*Q4. Write code to add a passenger to the traveller state variable.*/
    if (this.state.travellers.length >= CAPACITY) return;
    // Each booked passenger must have a unique email. Check if there is already a booking with the same email
    const findDuplicatePassenger = this.state.travellers.find(
      (traveller) => traveller.email === passenger.email
    );
    if (findDuplicatePassenger) {
      alert("There is already a booking with the same email. Please try again");
      return;
    }
    // Set the passenger ID to the next available ID
    const passengerId = this.state.maxId + 1;
    passenger.id = passengerId;
    // Add the passenger to the list of travellers
    // Increase the max id by 1
    this.setState((prevState) => ({
      travellers: [...prevState.travellers, passenger],
      maxId: prevState.maxId + 1,
    }));
    alert("Traveller booking added successfully");
    return true;
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
    // Filter out the passenger to be deleted
    const travellers = this.state.travellers.filter(
      (traveller) => traveller.id !== passenger.id
    );
    this.setState({ travellers });
    alert("Traveller booking deleted successfully");
  }

  render() {
    return (
      <div>
        <header>
          {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}

          <h1>🚅 SEA Express</h1>
          <nav>
            <ul id="header-tabs">
              <li onClick={() => this.setSelector("homepage")}>Home</li>
              <li onClick={() => this.setSelector("displayTravellers")}>
                Travellers
              </li>
              <li onClick={() => this.setSelector("addTraveller")}>
                Add Traveller Booking
              </li>
              <li onClick={() => this.setSelector("deleteTraveller")}>
                Delete Traveller Booking
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {this.state.selector === "homepage" && (
            <Homepage numTravellers={this.state.travellers.length} />
          )}
          {/*Q3. Code to call component that Displays Travellers.*/}
          {this.state.selector === "displayTravellers" && (
            <Display travellers={this.state.travellers} />
          )}
          {/*Q4. Code to call the component that adds a traveller.*/}
          {this.state.selector === "addTraveller" && (
            <Add
              bookTraveller={this.bookTraveller}
              numTravellers={this.state.travellers.length}
            />
          )}
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {this.state.selector === "deleteTraveller" && (
            <Delete
              deleteTraveller={this.deleteTraveller}
              travellers={this.state.travellers}
            />
          )}
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById("contents"));
