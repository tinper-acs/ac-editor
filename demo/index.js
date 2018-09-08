
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 富文本编辑器","code":"/**\n *\n * @title 富文本编辑器\n * @description 美观易用的React富文本编辑器，基于draft-js开发\n *\n */\n\nimport React, { Component } from 'react';\n// 引入编辑器以及EditorState子模块\nimport AcEditor, { EditorState } from 'ac-editor';\n// 引入编辑器样式\nimport 'ac-editor/dist/index.css';\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            editorState: null\n        }\n    }\n    componentDidMount() {\n        // 假设此处从服务端获取html格式的编辑器内容\n        const htmlContent = `<p><b>欢迎使用富文本编辑器</b></p>`\n        // 使用EditorState.createFrom将html字符串转换为编辑器需要的editorState数据\n        this.setState({\n            editorState: EditorState.createFrom(htmlContent)\n        })\n    }\n    submitContent = async () => {\n        // 在编辑器获得焦点时按下ctrl+s会执行此方法\n        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容\n        const htmlContent = this.state.editorState.toHTML();\n        console.log(htmlContent);\n    }\n    handleEditorChange = (editorState) => {\n        this.setState({ editorState });\n    }\n    render() {\n        const { editorState  } = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <AcEditor\n                    value={editorState}\n                    onChange={this.handleEditorChange}\n                    onSave={this.submitContent}\n                />\n            </div>\n        )\n    }\n}\n\n\n","desc":" 美观易用的React富文本编辑器，基于draft-js开发"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
