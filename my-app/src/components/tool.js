function Tool(props){
    const name = props.name;
    const tool = props.tool;
    return(
        <div>
            <h1>my name is {name}</h1>
            <p>my tool is {tool}</p>
        </div>
    );
}

export default Tool