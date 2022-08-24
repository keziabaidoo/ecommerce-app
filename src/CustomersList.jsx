import React, { Component } from "react";

class CustomersList extends Component {
  state = {
    pageTitle: "employees",
    customersCount: 5,
    customers: [
      { id: 1, name: "Sam", phone: "020335679", address: { city: "Berlin"}, photo: "https://picsum.photos/id/1010/60" },
      { id: 1, name: "Jones", phone: "05435672", address: { city: "Germany"} , photo: "https://picsum.photos/id/1011/60" },
      { id: 1, name: "Evans", phone: null, address: { city: "London"}, photo: "https://picsum.photos/id/1012/60" },
      { id: 1, name: "Paul", phone: null, address: { city: "Italy"}, photo: "https://picsum.photos/id/1036/60" },
      { id: 1, name: "Rocky", phone: "050335679", address: { city: "Poland" } , photo: "https://picsum.photos/id/1040/60"},
    ],
  };

  // customerNameStyle = (custName) =>{
  //  if(custName.startsWith('S'))return "green-highlight border-left";
  //  else if(custName.startsWith('J'))return "gray-highlight border-right";
  //  else return {};


  // }


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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customersCount: 10,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow =()=> {
      return this.state.customers.map((cust,index) => {
        return (
          <tr key={cust.id}>
            <td>{cust.id}</td>
            <td><img src={cust.photo} alt="Customer"/>
               <div>
                <button className="btn btn-sm btn-secondary" onClick={()=>
                  
                  {this.onChangePictureClick(cust,index);}}>Change Picture</button>
               </div>
            </td>
            {/* <td className={this.customerNameStyle(cust.name)}>{cust.name}</td> */}
            <td>{cust.name}</td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
        );
      });
  
  };
    
  //Excutes when the user clicks  "Chenge Picture" button in the grid
  //Receives the 'customer' object and index of the currently clicked customer
  onChangePictureClick =(cust, index)=>{
    // console.log(cust);
    // console.log(index)

        //get existing cusromers
    var custArr = this.state.customers;
     custArr[index].photo="https://picsum.photos/id/104/60"

     //update 'customers' array in the state
     this.setState({customers:custArr})

  }
          
}
//Executes when the user clicks on the Refresh button
export default CustomersList;
