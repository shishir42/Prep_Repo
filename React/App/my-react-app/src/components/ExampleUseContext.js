import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext';

function ExampleUseContext() {
    const { user, setUser } = useContext(UserContext);

    const handleChangeName = () => {
        setUser("Jane");
    };
    return (
        <div>
          <p>Hello, {user}!</p>
          <button onClick={handleChangeName}>Change name</button>
        </div>
      );
}

export default ExampleUseContext