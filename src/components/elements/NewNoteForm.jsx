import { useRef } from "react";
import PropTypes from "prop-types";

function NewNoteForm(props) {
    const textAreaRef = useRef();
    const { onSubmit } = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit({
            content: textAreaRef.current.value,
        });
        textAreaRef.current.value = '';
    }

    return (
        <form className={'notes-form'}
            onSubmit={onSubmitHandler}>
            <div className={'notes-form-element'}>
                <textarea className={'notes-form-textarea'}
                    ref={textAreaRef}
                />
            </div>
            <div className={'notes-form-element'}>
                <button>
                    Add
                </button>
            </div>
        </form>
    )
}

NewNoteForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default NewNoteForm;
