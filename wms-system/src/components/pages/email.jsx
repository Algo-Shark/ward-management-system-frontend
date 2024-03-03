import Card from "../common/Card";



export default function Email({setRoute}) {


    return (

        <div class="container common-bg vh-100">
        <div class="row">
            <div class="col-12">
                <div class="col-9" id="qrCodeView">
                    <h1>Enter Email</h1>
                    <div class="col-6 text-center ">
                        <input class="form-control form-control-lg" type="email" placeholder="example@gmail.com" aria-label=".form-control-lg example" />
                        <br />
                        <button type="button" class="btn btn-primary" id="btn" onClick={() => setRoute("otp")}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}