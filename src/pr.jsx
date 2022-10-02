import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import OP from './option';


import { Card } from 'antd';
//this is my flights card classes

class Flights extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.Flights = [];
    this.state = {};
    this.state.filterText = "";
//enter example for show
    this.state.Flights = [
      {
        id: 1,
        departure: 'Rosh-Pina',
        aircraft: "cessna 172",
        name: 'עידן',
        fuel: "85LB",
        arival_date:"12.08.2022",
        travel_time:"5.5hr"
      }, {
        id: 2,
        departure: 'Ben-Gurion',
        aircraft: "BOEING 787",
        name: 'מוטי',
        fuel: "85LB",
        arival_date:"12.08.2022",
        travel_time:"5.5hr"
      }
    
    ];

  }
  //on change for filter by pilot name
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  //this is going to delet from state the card to delete
  handleRowDel(product) {
    var index = this.state.Flights.indexOf(product);
    this.state.Flights.splice(index, 1);
    this.setState(this.state.Flights);
  };
//on adding new flight this will push to the state the new card
  handleAddEvent(evt) {
          var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      departure: "",
      aircraft: "",
      arival_date: "",
      travel_time: "",
      fuel: ""

    }
    this.state.Flights.push(product);
    this.setState(this.state.Flights);
//here is the filter on state by departure
  }
   handleSearch2 = (event) => {

    if (event.target.value === "") {
      this.setState(this.state.Flights);
      return;
    }
    const filteredValues = this.state.Flights.filter(
      (item) =>
        item.departure.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    this.setState({Flights: filteredValues});
  };


  //on click on back button we refresh the page
  refreshPage() {
    window.location.reload(false);
  }
//here im mapping my state includiing filter by name
  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var Flights = this.state.Flights;
    var newFlights = Flights.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState(newFlights);
    console.log(this.state.Flights);
  };
 
  //rendering the cards and filter's
  render() {

    return (
      <div style={{display:"inline-flex", flexWrap:"wrap",  justifyContent: "space-evenly	" }}>
        <div>
       <input  name="query" type="text" placeholder=" 🔎 Filter By Departure" onChange={this.handleSearch2.bind(this)} />
       </div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
      <div>
        <button onClick={this.refreshPage.bind(this)} >Back 🔙</button>
        </div>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} Flights={this.state.Flights} filterText={this.state.filterText}/>
      </div>
    );

  }

}
//make the filter by name class and render it
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder=" 🔎Filter By Pilot Name" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }

}
//making my product(flights) table 
class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.Flights.map(function(product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>


        <table className="table table-bordered">
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right"> New Flight  </button>
          <thead>
            <tr>
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  option(evt) {
    let choseDest=  evt.target.value;
    this.props.product.departure=choseDest;
   }
  //rendering my cell on cards and add links for each airport for more information
  render() {

    return (
      <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
    <h1 style={{fontFamily:"verdana", fontSize:"170%",color:"green"}}>{" Flight Number: "+this.props.product.id}</h1>
          <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
          <img src={require('./barcod.png')}style={{width:"6.5%"}} />
          <img src={require('./logo.png')}style={{width:"6.5%"}} />

          </div>
          
      <div >
      <tr className="eachRow" >
      
      <span ><EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }}/></span>
       <span> <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "departure",
          value: this.props.product.departure,
          id: this.props.product.id
        }}/></span>
        
        <span> <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "aircraft",
          value: this.props.product.aircraft,
          id: this.props.product.id
        }}/></span>
       <span ><EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "arival_date",
          value: this.props.product.arival_date,
          id: this.props.product.id
        }}/></span>
        <span> <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "travel_time",
          value: this.props.product.travel_time,
          id: this.props.product.id
        }}/></span>
          <span ><EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "fuel",
          value: this.props.product.fuel,
          id: this.props.product.id
        }}/></span>
        <td className="del-cell">
          <div style={{display:"flex",  justifyContent: "space-evenly	"}}>
          <lable>Destination:</lable><OP></OP>
          <input type="button" onClick={this.onDelEvent.bind(this)} value="🛢️" className="del-btn"/>
          </div>     
        </td>
        
      </tr>
          </div>
          </div>
          );

  }

}
//this class make my editble cell
class EditableCell extends React.Component {

  render() {
    return (
      <td style={{display:"inline-flex",flexWrap: "wrap"}}>
          <label>{""+this.props.cellData.type+": "}
        <input type='text'  name={this.props.cellData.type} id={this.props.cellData.id} value={(this.props.cellData.value  ) } onChange={this.props.onProductTableUpdate}/>
      </label>
      </td>    );

  }

}
export default Flights;