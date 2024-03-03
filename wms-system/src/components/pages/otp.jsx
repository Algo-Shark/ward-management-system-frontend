import Card from "../common/Card";



export default function OTP({setRoute}) {


    return (

        <div className="container common-bg vh-100">
        <div className="row">
            <div className="col-12">
                <div className="col-9" id="qrCodeView">
                    <h1>Enter OTP</h1>
                    <div className="col-6 text-center ">
                        <input className="form-control form-control-lg" type="email" placeholder="Enter OTP" aria-label=".form-control-lg example" />
                        <br />
                        <button type="button" className="btn btn-primary" id="btn"  onClick={() => setRoute("password")}>Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}