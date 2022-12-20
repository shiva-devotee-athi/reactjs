
{
  constructor()
  {
        super();
     this.state={name:"Kumar"};
  }
    // update=(childData)=>{this.setState({name:childData})};
  render()
  {
    return(
      <div> 
          {this.state.name}
      </div>
      )
  }
}
export default Child;