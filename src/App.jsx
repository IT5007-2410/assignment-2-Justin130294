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
      <div className="container mx-auto">
        {this.props.travellers.length === CAPACITY ? (
          <h3>The train is fully booked. No reservations are allowed</h3>
        ) : (
          <form name="addTraveller" onSubmit={this.handleSubmit}>
            {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
            <div className="mb-3">
              <label htmlFor="travellername" className="form-label">
                Name
              </label>
              <input
                type="text"
                required
                className="form-control"
                name="travellername"
                placeholder="Name"
                id="travellername"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                required
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                id="phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <input
                type="text"
                required
                name="nationality"
                placeholder="Nationality"
                id="nationality"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emergencyContactName" className="form-label">
                Emergency Contact Name
              </label>
              <input
                type="text"
                required
                name="emergencyContactName"
                placeholder="Emergency Contact Name"
                id="emergencyContactName"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emergencyContactPhone" className="form-label">
                Emergency Contact Phone Number
              </label>
              <input
                type="tel"
                required
                name="emergencyContactPhone"
                placeholder="Emergency Contact Phone Number"
                id="emergencyContactPhone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="remarks" className="form-label">
                Remarks
              </label>
              <textarea
                type="text"
                name="remarks"
                placeholder="Remarks"
                id="remarks"
                className="form-control"
                rows="3"
              />
            </div>
            <button
              type="submit"
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
        Homepage (TBC)
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
    this.setState({ travellers: [...this.state.travellers, passenger] });
    alert("Traveller added successfully");
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
  }
  render() {
    return (
      <div>
        <div>
          {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <h1>Ticket To Ride</h1>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav justify-content-center">
                  <li className="nav-item">
                    <button onClick={() => this.setSelector("homepage")}>
                      Homepage
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => this.setSelector("displayTravellers")}
                    >
                      Travellers
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => this.setSelector("addTraveller")}>
                      Add Traveller
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => this.setSelector("deleteTraveller")}>
                      Delete Traveller
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {this.state.selector === "homepage" && <Homepage />}
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
