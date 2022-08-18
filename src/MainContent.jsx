import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "employees",
    customersCount: 5,
    customers: [
      { id: 1, name: "Sam", phone: "020335679", address: { city: "Berlin" } },
      { id: 1, name: "Jones", phone: "05435672", address: { city: "Germany" } },
      { id: 1, name: "Evans", phone: null, address: { city: "London" } },
      { id: 1, name: "Paul", phone: null, address: { city: "Italy" } },
      { id: 1, name: "Rocky", phone: "050335679", address: { city: "Poland" } },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="bg-warning p-2 text-center">No Phone</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customersCount: 10,
    });
  };
}
//Executes when the user clicks on the Refresh button
export default MainContent;
