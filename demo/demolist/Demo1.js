/**
 *
 * @title 富文本编辑器
 * @description 美观易用的React富文本编辑器，基于draft-js开发
 *
 */

import React, { Component } from 'react';
import AcEditor from '../../src/index';
class Demo1 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <AcEditor />
            </div>
        )
    }
}

export default Demo1;
