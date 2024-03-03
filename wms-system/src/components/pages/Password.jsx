import Card from "../common/Card";



export default function Password() {


    return (

        <div className="container common-bg vh-100">
        <div className="row">
            <div className="col-12">
                <div className="col-9" id="qrCodeView">
                <h1>Re-new Password</h1>
                    <div className="col-6 text-center p-5">
                        <input className="form-control form-control-lg" type="email" placeholder="Enter password" aria-label=".form-control-lg example" />
                        <br />
                        <input className="form-control form-control-lg" type="email" placeholder="Re Enter password" aria-label=".form-control-lg example" />
                        <br />
                        <button type="button" className="btn btn-primary" id="btn" onClick={() => setRoute("otp")}>Set Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}