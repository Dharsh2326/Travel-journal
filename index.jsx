import { createRoot } from "react-dom/client";
import App from './App.jsx';
function Page(){
    return (
        <>
            <App/>
        </>
    )
}
const root= createRoot(document.getElementById('root'));
root.render(
<Page/>
)
