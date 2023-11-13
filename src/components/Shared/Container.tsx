import { Outlet } from 'react-router-dom';

function ContainerComponent() {
    return (
        <div>
              <Outlet/>
        </div>
    );
}

export default ContainerComponent;