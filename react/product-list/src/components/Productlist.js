
import React, {Component} from 'react';
import Product from './Product';

export default class Content extends Component{
    render(){
        return(
            <div>
              <h1>popular products</h1>
              <hr/ > 
              <Product heading ='first product'/>
              <Product heading1 = 'second product'/>
              <Product heading2 = 'third product'/>
              <Product heading3 = 'forth product'/>
            </div>
        )
    }
}