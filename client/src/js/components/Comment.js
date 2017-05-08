/**
 * Created by zeman on 08-May-17.
 */
import React from "react";
export default class Comment extends React.Component {

    constructor(props){
        super(props)
    }
    render(){
        let data = this.props.data;
        return(
            <div style={{padding:"10px 20px 10px 20px"}}>
                <h3>
                    {data.message}
                </h3>

                <span>
                    {data.CreatedAt}
                </span>
                <span>sent:
                    {data.User.name}
                </span>
            </div>
        )
    }

}