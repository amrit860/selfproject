import React, { Component } from 'react';
import AddProductForm from "./../ProductForm/add.productForm";
import axios from "axios";
import  {Loader}  from '../../common/loader/loader.component';


export default class EditProductComponents extends Component {
    constructor(){
        super();
        this.State={
            isLoading:false,
            product:''
        };
    }
    componentDidMount(){
    this.productId=this.props.match.params["id"];
    this.setState({
        isLoading:true
    })
    axios.get
    (`http://localhost:2020/api/product/${this.productId}`,
    this.state.data,{
        headers:{
        "content-Type":"application/json",
        'Authorization':localStorage.getItem('token')
         
    },
    params:{},
    responseType:"json"
}
)

.then(response => {
    console.log("editproduct>>",response);
    this.setState({
        product:response.data
    })

  })
  .catch(err => {
      console.log("error >>",err);

  })
  .finally(()=>{
    this.setState({
        isLoading:true
    })
  })

 
}
    

    
    render() {
        let content=this.state.isLoading
        ?<Loader></Loader>
        : <AddProductForm></AddProductForm>
        return (
            <>
         {content}
         </>
        )
    }
}
