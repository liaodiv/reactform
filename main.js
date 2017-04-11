/**
 * Created by 27353 on 2017/4/11.
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:'1256454',helptxt:"",mode:null}
    }
    handleChange(event) {
    this.setState({value: event.target.value});
        let num=event.target.value;
        if(!(/^1[34578]\d{9}$/.test(num))){
            this.setState({helptxt:"号码输入不正确",mode:false})
        }else{
            alert("验证成功")
            this.setState({helptxt:"成功",mode:true})
        }

    }
    render(){
        let classname="";                ///对显示样式进行修改
        if(this.state.mode === true){
            classname="has-success";
        }else if(this.state.mode === false){
            classname="has-error";
        }
        return(
            <div className={classname+" form-group form-inline"}>
                <label className="control-label">电话</label>
                <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <span className="help-block">{this.state.helptxt}</span>
            </div>
        )
    }

}

class Name extends React.Component{

}
class Form extends React.Component{
    render(){
        return(
            <form>
                <Phone/>
            </form>
        )
    }
}


ReactDOM.render(<Form />,document.getElementById('main'));