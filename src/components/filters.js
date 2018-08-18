import React, { Component } from 'react';
import '../App.css';
import {Divider, Layout,Slider, Rate, Checkbox, Icon, AutoComplete, Radio, Button } from 'antd';
import 'antd/dist/antd.css';


class Filters extends Component {
  state={
      rateValue: 0,
      
    }
  


  handleRateChange = (e) => {
    this.setState({ rateValue: e });
  }


  render() {

    let RadioButton = Radio.Button;
    let RadioGroup = Radio.Group;
    let dataSource = ['Arlanda', 'Skavsta', 'Bromma']
    return (
      <Layout className="wrapper">
        <Divider>Filter</Divider>
       
      <div className="row">
        
        <div className="sliderDiv">
          <h3>Pris: {this.props.prisVal[0]?<span>{this.props.prisVal[0]}-{this.props.prisVal[1]}kr</span>
          : <span>alla</span>}</h3>
          <Slider max={1500} min={0} onAfterChange={(e)=>this.props.handlePrisChange(e)} range 
          defaultValue={[0, 1500]} onChange={this.props.handlePrisChange}/>  
        </div>

        <div className="sliderDiv">
          <h3>Reslängd {this.props.resaVal[0]?<span>{this.props.resaVal[0]}-{this.props.resaVal[1]}min</span>
          : <span>alla</span>}</h3>
          <Slider onAfterChange={(e)=>this.props.handleResaChange(e)} range 
          defaultValue={[1, 30]} onChange={this.props.handleResaChange}/>  
        </div>

      </div>


        <Layout.Content className="checkBoxLeft">
          <Button value="biltvätt" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6" >
            
              <Checkbox className="checkBox" value="biltvätt" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)}  checked={this.props.biltvätt}/>
              Biltvätt
            

          </Button>

          <Button value="kostnadsfriTransfer" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6">
            
              <Checkbox className="checkBox" value="kostnadsfriTransfer" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.kostnadsfriTransfer}/>
              Kostnadsfri transfer
            
          </Button>
         
          <Button value="inomhusparkering" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6">
            
              <Checkbox className="checkBox" value="inomhusparkering" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.inomhusparkering}/>
              Inomhusparkering
            
          </Button>

          <Button value="sistadygn" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6" style={{marginRight: 0 }}>
            
              <Checkbox className="checkBox" value="sistadygn" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.sistadygn}/>
              Inomhus sista dygn
            
          </Button>

           <Button value="klädförvaring" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6" style={{marginRight: 0 }}>
            
              <Checkbox className="checkBox" value="klädförvaring" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.klädförvaring}/>
              Klädförvaring
          </Button>

          <Button value="bilservice" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6" style={{marginRight: 0 }}>
            
              <Checkbox className="checkBox" value="bilservice" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.bilservice}/>
              Bilservice
          </Button>

          <Button value="privatTransfer" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} className="col-6" style={{marginRight: 0 }}>
            
              <Checkbox className="checkBox" value="privatTransfer" onClick={(e)=>this.props.handleCheckboxChange(e.target.value)} checked={this.props.privatTransfer}/>
              Privat transfer
          </Button>
        </Layout.Content>    

      

      </Layout>
    );
  }
}

export default Filters;
