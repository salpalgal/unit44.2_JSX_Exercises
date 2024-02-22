const Tweet = (prop)=>{
    return (
        <ul>
            <li>username : {prop.username}</li>
            <li>name : {prop.name}</li>
            <li>data : {prop.date}</li>
            <li>text : {prop.text}</li>
        </ul>
    )
}