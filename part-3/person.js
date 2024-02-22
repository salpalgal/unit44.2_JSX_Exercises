const Person =(prop)=>{
    let msg;
    let name;
    if(prop.age>18){
        msg = <h3>please go vote!</h3>
    }else{
        msg = <h3>you must be 18</h3>
    }
    if(prop.name.length>8){
        name = prop.name.slice(0,8)
    }else{
        name = prop.name
    }
    return (
        <p>
            <div>Learn some infornamtion about this person.</div>
            <div>name : {name}</div>
            <div>age : {prop.age}</div>
            <div>message : {msg}</div>
            <div>hobbies :
            <ul>
                {prop.hobbies.map(hobbie=><li>{hobbie}</li>)}
            </ul>
            </div>
        
        </p>
    )
}