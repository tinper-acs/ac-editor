import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 引入编辑器以及EditorState子模块
import BraftEditor, { EditorState } from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
const propTypes = {
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null
    }
  }


  submitContent() {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    console.log(htmlContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }


  render() {
    const { editorState } = this.state
    return (
      <div>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}

export default Editor;