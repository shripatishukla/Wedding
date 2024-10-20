import '../css/Introduction.css';
import ncthlogo from "../store/NCTHlogo.png";
import love from "../store/love.png";
function Introduction() {
    return (
        <div  id = "home" className="container">
           <h1 style={{ textAlign: 'center' }}>HOME</h1>
            <h1 className="text-center my-4">Welcome to New Comrade Tent House!</h1>

            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                    <div className="first-heading-text">
                        <p>
                            NCTH is a wedding designing and event planning company, set up almost three decades ago with an extensive in-house production facility. From idea to reality, from fabric to upholstery, and from flowers to lighting.
                        </p>
                        <div>
                        <img  src = {love} alt = "No Image" />
                        <img  src = {ncthlogo} alt = "No Image" />
                        <img  src = {love} alt = "No Image" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
