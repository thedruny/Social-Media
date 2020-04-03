import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';



let Preloader = (props) => {
    return <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
    </Dimmer>
}

export default Preloader;