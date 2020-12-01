
import React, { Component } from "react";
import axios from "axios";
import Map from "../../components/map/map";
import Login from '../../components/login/login';
import Filters from '../../components/filters/filters';
import List from '../../components/list/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import "./frontPage.css";
import CategoryChoice from "../../components/wine-categories/category-choice";


function frontPage() {
  return (
    <Jumbotron fluid className="body">
      <Row className="wine">
          <Login className='center'/>
      </Row>
      <Row>
        <Col lg={8}>
          <Jumbotron fluid>
            <Map/>
          </Jumbotron>
        </Col>
        <Col lg={4}>
          <Row>
            <Jumbotron fluid>
              <Filters/>
            </Jumbotron>
          </Row>
          <Row>
            <Jumbotron fluid>
              <List/>
            </Jumbotron>
          </Row>
        </Col>
      </Row>
      </Jumbotron>
 
  );
}


export default frontPage;


//////////////// KEEP FOR JULIAN///////////////////////////////

// class frontPage extends Component {
//   state = {
//     categories: null
//   }


//   getChoices = (e) => {
//     e.preventDefault();
//     const category = e.target.elements.wineCategory.value;
//     axios.get(`https://quiniwine.com/api/pub/wineCategory/${category}/0/5?access_token=xbhysxe4p3gpeznr8kpn`)
//     .then((res) => {
//       const categories = res.data.items[0].Name + ", " + res.data.items[0].Winery + ", " + res.data.items[0].Country + ", " + res.data.items[0].id;
//       this.setState({ categories });
//       console.log(categories);
//       console.log(res);
//     })
//   }

//   render(){
//     return (
//       <div className="wine">
//       <Row>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <Login className='center'/>,
//           <Map className='center'/>
//         </Col>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <CategoryChoice getChoices={this.getChoices} />
//           { this.state.categories ? <p>Wine info based off your selection: {this.state.categories}</p> : <p>Please select a category</p>}
//         </Col>
//       </Row>
        
//       </div>
//     );
//   }
// };

///////////////////////////////////////////////////////////////////
