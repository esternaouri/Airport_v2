import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link, Routes,BrowserRouter,Navigate,} from "react-router-dom";

class Flights extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.Flights = [];
    this.state = {};
    this.state.filterText = "";
    this.state.Flights = [
      {
        id: 1,
        destination: 'LLBG',
        
        qty: 12,
        name: 'עידן'
      }, {
        id: 2,
        destination: 'LLBG',
        price: '',
        qty: 15,
        name: 'אסתר'
      }, {
        id: 3,
        destination: 'LLHA',
        price: '',
        qty: 14,
        name: 'מוטי'
      }, {
        id: 4,
        destination: 'LLIB',
        price: '',
        qty: 34,
        name: 'נפתלי'
      }, {
        id: 5,
        destination: 'LLIB',

        price: '',
        qty: 12,
        name: 'נפתלי'
      }, {
        id: 6,
        destination: 'LLHZ',
        price: '',
        qty: 23,
        name: 'נפתלי'
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.Flights.indexOf(product);
    this.state.Flights.splice(index, 1);
    this.setState(this.state.Flights);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      destination: "",
      aircraft: "",
      arival_date: "",
      travel_time: "",
      fuel: ""

    }
    this.state.Flights.push(product);
    this.setState(this.state.Flights);

  }
  filterbyDest(e) {
    const basic=this.state.Flights
    const result =  this.state.Flights.filter((item)=>item.destination==this.state.filterText2);
    console.log(result)
    this.setState({Flights: result});
    if (this.state.filterText2==""){
      this.setState({Flights: basic});
    }
  };
  refreshPage() {
    window.location.reload(false);
  }

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
  render() {

    return (
      <div>
         <input type="text" placeholder="חיפוש לפי יעד "  onChange={(e)=>this.setState({filterText2 : e.target.value})}/>
          <button  onClick={this.filterbyDest.bind(this)}>חפש לפי יעד</button>
          <button onClick={this.refreshPage.bind(this)}>חזור</button>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} Flights={this.state.Flights} filterText={this.state.filterText}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="חפש לפי שם טייס" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

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
          <thead>
            <tr>
          
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>
          <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">שדר טיסה חדשה למודיעין הטייס </button>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <div class="card">
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "destination",
          value: this.props.product.destination,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "aircraft",
          value: this.props.product.aircraft,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "arival_date",
          value: this.props.product.arival_date,
          id: this.props.product.id
        }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "travel_time",
          value: this.props.product.travel_time,
          id: this.props.product.id
        }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "fuel",
          value: this.props.product.fuel,
          id: this.props.product.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="🛢️" className="del-btn"/>
          {
              (this.props.product.destination=="LLBG")&&<Link to ="/flightRegist/LLBG">LLBG/פרטים</Link>}{ 
              (this.props.product.destination=="LLHZ")&&<Link to ="/flightRegist/LLHZ">LLHZ/פרטים</Link>}{
              (this.props.product.destination=="LLIB")&&<Link to ="/flightRegist/LLIB">LLIB/פרטים</Link>}{
              (this.props.product.destination=="LLHA")&&<Link to ="/flightRegist/LLHA">LLHA/פרטים</Link>
               }
        </td>
      </tr>
      </div>);

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td style={{display:"inline-flex",flexWrap: "wrap"}}>
        <input type='text'  placeholder= {this.props.cellData.type}  name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}
export default Flights;