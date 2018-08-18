/* RATE */

  <div className="rateDiv">
          <h3>Betyg: {this.state.rateValue>0?<span>minst {this.state.rateValue} stjärnor</span>: 'alla'} 
          </h3>
          <Rate onChange={this.handleRateChange} value={this.state.rateValue} />
        </div>   

/* DRAWER + BUTTON + POPOVER + ICON to open filters */
  <Popover placement="bottomRight" title={'text'} content={<Filters/>} trigger="click">
              <Button type="primary" className="popoverButton">
                <Icon  type="filter"/>
              </Button>
            </Popover>


             <Button type="primary" onClick={this.toggleCollapsed} className="collapsibleButton" style={{left: this.state.collapsed?'50%':'0' }}>
            <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
        </Button>
                  <Drawer
          width="50%"
          className="drawer"
          title="Filter"
          placement="left"
          closable={false}
          onClose={this.toggleCollapsed}
          visible={this.state.collapsed}
        >


              <Content  className="startContent">
                <h2>Hitta billiga långtidsparkeringar hos Flygparken.se!</h2>
                <p>Här på denna sida hittar du alla långtidsparkeringar</p>
              </Content>
              <Filters/>
              </Drawer>
          <a onClick={this.toggleCollapsed} className="filterButton">
          Klicka här för att filtrera.
            <Icon   type="filter" />
          </a>



/*FIREBASE TESTS*/
    var citiesRef=db.collection("parkeringar")
    citiesRef.doc("SF").set({
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000 });
    citiesRef.doc("LA").set({
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000 });
    citiesRef.doc("DC").set({
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000 });
    citiesRef.doc("TOK").set({
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000 });
    citiesRef.doc("BJ").set({
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000 });


docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    const test1=db.ref().child('Parkeringar');
    const test2=db.ref().child('test2');
    test1.on('value', snapshot=>{
      console.log('test1',snapshot.val())
      this.setState({
        firstTest: snapshot.val()
      })
    })
    test1.on('value', snapshot=>{
      console.log('test2',snapshot.key)
      this.setState({
        secondTest: snapshot.val()
      })
    })




    /*WINDOWWIDTH*/
      windowWidth = () => {
    
    window.screen.width<500?
    this.setState({windowWidth: 'checkBoxLow'})
    :this.setState({windowWidth: 'checkBox'})
  }




  /* OLDNEW LIST */
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
      <List.Item className="listClass" key={item.title}>
      
        
          <div className="titleDescription">
            <div className="pic">
            {item.avatar.length>10?
              <img src={item.avatar} className="descriptionPic" style={{backgroundColor: item.avatarWhite?'#1890ff':'transparent'}}/>
              :
              <Layout.Content className="avatarText"><h1>{item.avatar}</h1></Layout.Content>
               }
            </div>
            
            <a href={item.href}>{item.title}</a>
            <p>
              {item.description}
            </p>
          </div>
            
            
        
        <div className="priceTrueFalse">
          <div className="price">
              <IconText type="star-o" text={`${item.pris.dygnPris} kr dygnspris`} />
              <IconText type="star-o" text={`${item.pris.vecka} kr 1 vecka`} />
              <IconText type="star-o" text={`${item.pris.vecka2} kr 2:a veckan`} />
              <IconText type="star-o" text={`${item.pris.vecka3} kr 3:e veckan`} />
              <IconText type="star-o" text={`${item.pris.vecka4} kr 4:e veckan`} />
              <IconText type="star-o" text={`${item.pris.extradag} kr per extradag på veckopris`} />
          </div>
          <div className="trueFalse">
            <IconText type={item.restid?'check': 'close'} text={`${item.pris.restid} minuters restid`} />
            <IconText type={item.kostnadsfriTransfer?'check': 'close'} text={`${item.kostnadsfriTransfer} kostnadsfriTransfer`} />
            <IconText type={item.klädförvaring?'check': 'close'} text={`${item.klädförvaring} klädförvaring`} />
            <IconText type={item.bilservice?'check': 'close'} text={`${item.bilservice} bilservice`} />
          </div>
          <div className="trueFalse">
            <IconText type={item.privatTransfer?'check': 'close'} text={`${item.privatTransfer} privatTransfer`} />
            <IconText type={item.dygnetrunt?'check': 'close'} text={`${item.dygnetrunt} dygnetrunt`} />
            <IconText type={item.sistadygnpris?'check': 'close'} text={`${item.sistadygnpris} kr varmgarage sista dygn`} />
            <IconText type={item.biltvätt?'check': 'close'} text={`${item.biltvätt} biltvätt`} />
            <IconText type={item.inomhusparkering?'check': 'close'} text={`${item.inomhusparkering} inomhusparkering`} />
          </div>   
        </div>

      </List.Item>
      )}


    </List>
    );
  }
}

export default Lists;



/*LISTS AUTOCOMPLETE*/
    <div className="autocompleteDiv">
           <AutoComplete
              dataSource={dataSource}
              className="AutoComplete"

              placeholder="Vart vill du parkera?              "
              onSelect={(e)=>this.setState({ort: e})}
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />

            </AutoComplete>