// Function to generate random hexadeicmal number
const generateHexadecimalNumber = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1,
    name: "Jack",
    phone: 88885555,
    bookingTime: new Date(), // time when booking was made
    bookingReferenceNumber: "abc123", // unique booking reference number
    email: "jack@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Jill",
    emergencyContactPhone: 88886666,
    remarks: "Nil",
  },
  {
    id: 2,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 3,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 4,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 5,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 6,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 7,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 8,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
  {
    id: 9,
    name: "Rose",
    phone: 88884444,
    bookingTime: new Date(),
    bookingReferenceNumber: "def456",
    email: "rose@email.com",
    nationality: "Singaporean",
    emergencyContactName: "Richard",
    emergencyContactPhone: 32823434,
    remarks: "Handicap",
  },
];

// CONSTANTS
const CAPACITY = 10;

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
      <td>{traveller.bookingTime.toLocaleString()}</td>
      <td>{traveller.bookingReferenceNumber}</td>
      <td>{traveller.email}</td>
      <td>{traveller.nationality}</td>
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
      {travellers.length === 0 ? (
        <h3>There are no travellers booked yet.</h3>
      ) : (
        <table className="bordered-table">
          <thead>
            <tr>
              {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Booking Time</th>
              <th>Booking Reference Number</th>
              <th>Email</th>
              <th>Nationality</th>
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

    const traveller = {
      name: submittedForm.travellername.value,
      phone: submittedForm.phone.value,
      bookingTime: new Date(),
      bookingReferenceNumber: generateHexadecimalNumber(),
      email: submittedForm.email.value,
      nationality: submittedForm.nationality.value,
      emergencyContactName: submittedForm.emergencyContactName.value,
      emergencyContactPhone: submittedForm.emergencyContactPhone.value,
      remarks: submittedForm.remarks.value,
    };
    this.props.bookTraveller(traveller);
    submittedForm.reset();
  }

  render() {
    return (
      <div id="add-traveller">
        <h1>Add Traveller Booking</h1>
        {this.props.travellers.length === CAPACITY ? (
          <h3>
            The train is fully booked. No further reservations are allowed.
          </h3>
        ) : (
          <form name="addTraveller" onSubmit={this.handleSubmit}>
            {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
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
            <div className>
              <label htmlFor="phone" className>
                Phone Number <span className="required-field">*</span>
              </label>
              <input
                type="tel"
                required
                name="phone"
                placeholder="Phone Number"
                id="phone"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email <span className="required-field">*</span>
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
              <label htmlFor="nationality">
                Nationality <span className="required-field">*</span>
              </label>
              <input
                type="text"
                required
                name="nationality"
                placeholder="Nationality"
                id="nationality"
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
            <div className>
              <label htmlFor="emergencyContactPhone">
                Emergency Contact Phone Number{" "}
                <span className="required-field">*</span>
              </label>
              <input
                type="tel"
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
              disabled={this.props.travellers.length === CAPACITY}
            >
              Add
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

  deleteTravellerHandler(e) {
    if (confirm("Are you sure you want to delete this booking?") === true) {
      this.props.deleteTraveller(this.state.fetchedTraveller);
      this.setState({ fetchedTraveller: null });
    }
  }

  fetchBooking(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const submittedForm = e.target;
    const bookingReferenceId = submittedForm.bookingReferenceId.value;
    const traveller = this.props.travellers.find(
      (traveller) => traveller.bookingReferenceNumber === bookingReferenceId
    );
    if (!traveller) {
      this.setState({ showErrorMessage: true });
      return;
    }
    this.setState({ fetchedTraveller: traveller });
    submittedForm.reset();
    this.setState({ showErrorMessage: false });
  }
  render() {
    return (
      <div id="delete-traveller">
        <h1>Delete Traveller Booking</h1>

        {this.props.travellers.length === 0 ? (
          <h3>
            There are no more passengers to delete. Please add a passenger
            first.
          </h3>
        ) : (
          <>
            <form name="deleteTraveller" onSubmit={this.fetchBooking}>
              {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
              <div>
                <label
                  htmlFor="deleteBookingReferenceId"
                  className="form-label"
                >
                  Booking Reference Id
                </label>
                <input
                  type="text"
                  name="bookingReferenceId"
                  placeholder="Booking Reference Id"
                  id="deleteBookingReferenceId"
                  className="form-control"
                  required
                />
              </div>
              {this.state.showErrorMessage && (
                <p className="error-text">Passenger not found</p>
              )}
              <button type="submit">Fetch Booking Details</button>
            </form>
            {this.state.fetchedTraveller && (
              <div className="fetched-details">
                <h3>Traveler Details</h3>
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
                  <strong>Email:</strong> {this.state.fetchedTraveller.email}
                </p>
                <p>
                  <strong>Booking Reference Number:</strong>{" "}
                  {this.state.fetchedTraveller.bookingReferenceNumber}
                </p>
                <p>
                  <strong>Nationality:</strong>{" "}
                  {this.state.fetchedTraveller.nationality}
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
    const passengerId = this.state.maxId + 1;
    passenger.id = passengerId;
    this.setState((prevState) => ({
      travellers: [...prevState.travellers, passenger],
      maxId: prevState.maxId + 1,
    }));
    alert("Traveller added successfully");
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
    const travellers = this.state.travellers.filter(
      (traveller) => traveller.id !== passenger.id
    );
    this.setState({ travellers });
    alert("Traveller deleted successfully");
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
              travellers={this.state.travellers}
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
