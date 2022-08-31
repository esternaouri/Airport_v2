import React, { Component } from 'react';

class Flights extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.Flights = [];
      this.state = {};
      this.state.filterText = "";
      this.state.Flights = [
        {
          id: 1,
          category: 'Sporting Goods',
          price: '49.99',
          qty: 12,
          name: 'אסתר'
        }, {
          id: 2,
          category: 'Sporting Goods',
          price: '9.99',
          qty: 15,
          name: 'נפתלי'
        }, {
          id: 3,
          category: 'Sporting Goods',
          price: '29.99',
          qty: 14,
          name: 'מוטי'
        }, {
          id: 4,
          category: 'Electronics',
          price: '99.99',
          qty: 34,
          name: 'עידן'
        }, {
          id: 5,
          category: 'Electronics',
          price: '399.99',
          qty: 12,
          name: 'נפתלי'
        }, {
          id: 6,
          category: 'Electronics',
          price: '199.99',
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
        arcfid: "",
        date: "",
        destination: "",
        time:"",
        fuel:""
      }
      this.state.Flights.push(product);
      this.setState(this.state.Flights);
  
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
        <div style={{width:"100%"
        }}>
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
        <div style={{width:"100%"
      }}>
  
          <input type="text" placeholder="חיפוש לפי שם טייס..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
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
        <div style={{width:"100%"
      }}>
  <br></br>
  <br></br>
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right"> שדר טיסה חדשה למודיעין הטייס</button>
        <br></br>
        <br></br>
<div class="card">
          <table style={{display:"inline-flex",flexWrap: "wrap" }}>
          
         
=  
            <tbody cscope="row">
              {product}
  
            </tbody>
  
          </table>
          </div>
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
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "arcfid",
            value: this.props.product.arcfid,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "date",
            value: this.props.product.date,
            id: this.props.product.id
          }}/>
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "destination",
            value: this.props.product.destination,
            id: this.props.product.id
          }}/>
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "time",
            value: this.props.product.time,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "fuel",
            value: this.props.product.fuel,
            id: this.props.product.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="🛢️" className="del-btn"/>
          </td>
        </tr>
      );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
        <td style={{display:"inline-flex",flexWrap: "wrap"}}>
          <input type='text' placeholder= {this.props.cellData.type} name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }
  
 export default Flights  ;
  