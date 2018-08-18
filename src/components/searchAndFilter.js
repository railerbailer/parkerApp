import React, { Component } from 'react';
import '../App.css';
import { AutoComplete, Radio, Icon, Input } from 'antd';
import 'antd/dist/antd.css';


class SearchAndFilter extends Component {
  constructor(){
    super()

    this.state={
    
      ort: ''
    }
  }
  

  


  render() {
    let RadioButton = Radio.Button;
    let RadioGroup = Radio.Group;
    let dataSource = ['Arlanda', 'Skavsta', 'Bromma']
    return (
      <div className="searchWrapper">

       

    

        <div className="radioDiv">
        
          <RadioGroup defaultValue="asd" size="sm">
            <RadioButton onClick={(e)=>this.props.handleRadioChange(e.target.value)} value="billigast">Billigast</RadioButton>
            <RadioButton onClick={(e)=>this.props.handleRadioChange(e.target.value)} value="billigastDag">Bäst dagspris</RadioButton>
            <RadioButton onClick={(e)=>this.props.handleRadioChange(e.target.value)} value="snabbast">Snabbast</RadioButton>
            <RadioButton onClick={(e)=>this.props.handleRadioChange(e.target.value)} value="bäst">Bäst</RadioButton>
          </RadioGroup>
        </div>
        
   

      </div>
    );
  }
}

export default SearchAndFilter;
