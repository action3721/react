import React,{Component} from 'react'
import confirm from '../Confirm'

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    async componentDidMount(){
        let res = await confirm("确定删除吗")
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }

    get isControl(){
		return 'value' in this.props
	}

	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
    }
    
    handleChange(e) {
        if(!this.isControl){
                this.setState({
                    innerValue: e.target.value
                })
        }
        this.props.onChange(e)
    }

    render() {
        return (
            <input value={this.state.value} onChange={e => this.handleChange(e)}/>
        )
    }
}
export default InputNumber