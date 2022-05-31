import {useState} from 'react';
import {Editor, EditorProps, EditorProvider, Toolbar} from 'react-simple-wysiwyg';

const App = () => {

    const [state, setState] = useState({
        plain: 'Initial plain text',
        rich: 'Initial rich text',
    });

    const onChange = (which, value) => {
        setState({
            ...state,
            [which]: value,
        });
    }

    return (
        <div className="App">
            <h1>React Simple WYSIWYG Issue</h1>
          <p>
            This app demonstrates a shortcoming in the <a href="https://www.npmjs.com/package/react-simple-wysiwyg">react-simple-wysiwyg</a> package.
            To see the problem, make some change to the Plain Text field, then make a change to the Rich Text field
          </p>
          <p><strong>Expected Results</strong>: the Plain Text value keeps its updated value</p>
          <p><strong>Actual Results</strong>: the Plain Text value is reverted to its initial value</p>

            <div>
                <label htmlFor="plain-text">Plain Text</label><br/>
                <input type="text" id="plain-text" value={state.plain}
                       onChange={e => onChange('plain', e.target.value)}/>
            </div>
            <div>
                <label>Rich Text</label>
                <EditorProvider>
                    <Editor value={state.rich}
                            onChange={e => onChange('rich', e.target.value)}/>
                </EditorProvider>
            </div>
        </div>
    );
}

export default App;
