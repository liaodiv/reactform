/**
 * Created by 27353 on 2017/4/12.
 */
import React from 'react'
import ReactDOM from 'react-dom'

class FF extends React.Component{
    constructor() {
        super()
        //this.state ={phone:{value:''},name:{value:''}};
        //this.state = [{name: 'phone', value:''}, {name:'name',value:''}];
        this.state = {
            name: "",
            phone: "",
            nameWarning: ["",""],
            phoneWarning: ["",""]
        }
    }


    getdefault(sta){   //获取数据库已存储的值

    }
    handleChang(event){
        let key = event.target.name;
        let value = event.target.value;
        this.checking(key, value);
        this.setState({[key]:value});


        //this.setState([])

    }
    checking(key,value){        ////验证
        switch (key){
            case 'phone':{

                if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){

                    this.setState({phoneWarning:["输入不正确","has-error"]})
                    return false;
                }else{
                    this.setState({phoneWarning:["成功","has-success"]})
                    return true;
                }
            }
            break;
            case 'name':{
                if(value){
                    this.setState({nameWarning:["成功","has-success"]})
                    return false;
                }else {
                    this.setState({nameWarning:["输入不正确","has-error"]})
                    return true;
                }
            }
            break;
        }
    }
    subcheck(){
        if(this.checking('phone',this.state.phone)&& this.checking('name',this.state.name)){
            ///提交
        }
       /* this.checking('phone');
        this.checking('name');*/
    }
    render(){
        ///渲染时验证，方便处理样式
        return(
            <form>
                <div className={"form-group "+this.state.phoneWarning[1]}>
                    <label className="control-label">电话</label>
                    <input className="form-control"type="text" name='phone' onChange={this.handleChang.bind(this)}/>
                    <span className="help-block">{this.state.phoneWarning[0]}</span>
                </div>
                <div className={"form-group "+this.state.nameWarning[1]}>
                    <label className="control-label">姓名</label>
                    <input className="form-control"type="text" name='name' onChange={this.handleChang.bind(this)}/>
                    <span className="help-block">{this.state.nameWarning[0]}</span>
                </div>
                <button type="button"  onClick={this.subcheck.bind(this)}>提交</button>
            </form>
        )
    }
}

ReactDOM.render(<FF />,document.getElementById('main'));
