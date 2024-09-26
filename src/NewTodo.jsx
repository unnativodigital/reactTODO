function NewTodo(props) {
    return (
        <div className='border mt-0' style={{width: '320px'}}>
            <p className='bg-primary-subtle d-flex column' style={{ borderRadius: '4px', margin: '1px', paddingLeft: '180px', fontSize: '17px', maxWidth: '100%' }}>
                {props.textProper} 
            </p>
        </div>
    );
}

export default NewTodo;
