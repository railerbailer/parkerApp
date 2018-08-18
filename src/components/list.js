  import React, { Component } from 'react';
import { List, Avatar, Icon, Checkbox, Layout, Button } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';




const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);




class Lists extends Component {


  render() {
    console.log(this.theData)

    let filteredData = this.props.listData.filter(
        (i) => {

          if(this.props.biltvätt){
            return i.biltvätt===true
          }
          if(this.props.sistadygn){
            return i.sistadygn===true
          }
          if(this.props.kostnadsfriTransfer){
            return i.kostnadsfriTransfer===true
          }
          if(this.props.klädförvaring){
            return i.klädförvaring===true
          }
          if(this.props.bilservice){
            return i.bilservice===true
          }
          if(this.props.privatTransfer){
            return i.privatTransfer===true
          }
          
          if(this.props.inomhusparkering){
            return i.inomhusparkering===true
          }

          else return (i) 
        }       
      )
    console.log('filteredData',filteredData)
 
 

    return (
      <List
      
      itemLayout="horizontal"
      size="large"
    >
    {filteredData.map(item=>
      <Layout className="listClass" key={item.title}>
        <Layout className="innerListClass">
          
            <Layout.Content className="titleDescription">
              <div className="pic">
              {item.avatar.length>10?
                <img src={item.avatar} className="avatarText" style={{backgroundColor: item.avatarWhite?'#1890ff':'transparent'}}/>
                :
                <Layout.Content className="avatarText"><h1>{item.avatar}</h1></Layout.Content>
                 }
              </div>
              
            </Layout.Content>
              
              
          
          <Layout.Content className="priceTrueFalse">
            <div className="price">
                <h2>Priser</h2>
                
                <span className="veckoPris"><span>Vecka 1</span> <span className="priceTag">{item.pris.vecka}:-</span> </span>
                <span className="veckoPris"><span>Vecka 2</span><span className="priceTag">{item.pris.vecka2}:-</span></span>
                <span className="veckoPris"><span>Vecka 3</span><span className="priceTag">{item.pris.vecka3}:-</span></span>
                <span className="veckoPris"><span>Vecka 4</span><span className="priceTag">{item.pris.vecka4}:-</span> </span>
                <span style={{padding: '5%'}}/>
                <span className="veckoPris"><span>Extradag</span><span  className="priceTag">{item.pris.extradag}:-</span></span>
                <span className="veckoPris"><span>Dygn</span><span className="priceTag">{item.pris.dygnPris}:-</span></span>
            </div>
           

            <div className="trueFalseDiv" >
            <h2>Extra</h2>
            <div className="trueFalse">

              <span  className='restid'><IconText type={item.restid?'check': 'close'} text={`${item.restid} minuters restid`} /></span>
              <IconText type={item.kostnadsfriTransfer?'check': 'close'} text="Gratis transfer" />
              <IconText type={item.privatTransfer?'check': 'close'} text="Privat transfer" />
              <IconText type={item.klädförvaring?'check': 'close'} text="Klädförvaring" />
              <IconText type={item.bilservice?'check': 'close'} text="Bilservice" />
              <IconText type={item.biltvätt?'check': 'close'} text="Biltvätt" />
              
              <IconText type={item.dygnetrunt?'check': 'close'} text="Öppet dygnet runt" />
              <IconText type={item.sistadygnpris?'check': 'close'} text={`${item.sistadygnpris} kr varmgarage sista dygn`} />
              
              <IconText type={item.inomhusparkering?'check': 'close'} text="Inomhusparkering" />
            </div>
            </div>   
          </Layout.Content>
        </Layout>
      </Layout>
      )}


    </List>
    );
  }
}

export default Lists;