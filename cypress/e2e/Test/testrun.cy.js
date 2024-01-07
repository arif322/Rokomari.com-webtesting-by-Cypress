import { BaseUrl } from "../BaseDriver/BaseUrl.cy";
import { SignInPage } from "../Pages/Signin.cy";


const baseurl = new BaseUrl();
const signinPage = new SignInPage();

before(()=>{
    baseurl.URL();
});

it("login information", function(){
    signinPage.SignFirst();
})